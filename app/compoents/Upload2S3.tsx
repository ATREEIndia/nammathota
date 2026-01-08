'use client'

import { ChangeEvent, useState } from "react"

const Upload2S3 = () => {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)

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
                    fileName: fileToUpload.name, 
                    fileType: fileToUpload.type 
                }),
            })

            const { url, error } = await res.json()
            if (error) throw new Error(error)

            // 2. Upload to S3
            const contentType = fileToUpload.type || "application/octet-stream"
            const upload = await fetch(url, {
                method: "PUT",
                body: fileToUpload,
                headers: { "Content-Type": contentType }, // Fixed casing
            })

            if (upload.ok) {
                alert('Uploaded successfully!')
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
        <div className="p-4">
            <input 
                onChange={handleFileSelect}
                type="file"
                disabled={uploading}
                className="block w-full text-sm text-gray-500 mb-4" 
            />
            {uploading && <p>Uploading...</p>}
        </div>
    )
}

export default Upload2S3