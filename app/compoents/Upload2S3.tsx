'use client'

import { ChangeEvent, useState } from "react"

type probs = {
    filename: string;
    foldername: string;
    uploadgreen:(i:number ,m:boolean)=>void
}

const Upload2S3 = ({ filename, foldername, uploadgreen }: probs) => {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)

    const[isuploadSuccess, Setisuploadsuccess]=useState(false)

    

    const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (!selectedFile) return

        setFile(selectedFile)

        // RECOMMENDATION: Call upload directly or via a button instead of useEffect
        // to avoid running logic on the initial "null" state.
        await handleUpload(selectedFile)
    }

    const handleUpload = async (fileToUpload: File) => {
        setUploading(true)
        try {
            // 1. Get presigned url (Added leading slash /)
            const res = await fetch("/api/upload", {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Fixed casing
                body: JSON.stringify({
                    fileName: filename,
                    fileType: fileToUpload.type,
                    foldername: foldername
                }),
            })

            const { url, error } = await res.json()
            if (error) throw new Error(error)

            // 2. Upload to S3
            const contentType = fileToUpload.type || "application/octet-stream"
            const allowedTypes = [ ".jpg"];

            console.log("contentType:: "+fileToUpload.name)

            // 2. Validate
            if (!fileToUpload.name.includes('.jpg')) {
                alert("Only .jpg files are allowed");
                return;
            }
            const upload = await fetch(url, {
                method: "PUT",
                body: fileToUpload,
                headers: { "Content-Type": contentType }, // Fixed casing
            })

            if (upload.ok) {
               // alert('Uploaded successfully!')
                Setisuploadsuccess(true)
            } else {
                alert('Upload failed')
            }

        } catch (error) {
            console.error("Upload error:", error)
            alert('An error occurred during upload')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className={`p-2 cursor-pointer  border-2 text-sm ${isuploadSuccess?"bg-green-400":"bg-gray-100"} rounded-xl`}>
            <label className="text-sm font-mono cursor-pointer">
               {isuploadSuccess ? 'Uploaded' : 'Choose ❀'}
                <input
                    onChange={handleFileSelect}
                    type="file"
                    disabled={uploading}
                    className="block  text-sm text-gray-500 hidden"

                />
            </label>

            {uploading && <p>Uploading...</p>}
        </div>
    )
}

export default Upload2S3