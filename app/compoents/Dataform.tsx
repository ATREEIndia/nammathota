'use client'
import { onValue, ref, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { db } from './Firebase';
import { PlantType } from '../constants';

type formprobs = {
    plantid: number;
    onCancel: () => void
}

const Dataform = ({ plantid, onCancel }: formprobs) => {

    const [input_plantid, setInput_plantid] = useState(plantid);
    const [input_species_name, setInput_species_name] = useState("");
    const [input_common_name, setInput_common_name] = useState("");
    const [input_rank, setInput_rank] = useState("");
    const [input_feat_commonname, setInput_feat_commonname] = useState("");
    const [input_procurement, setInput_procurement] = useState("");
    const [input_family_name, setInput_family_name] = useState("");
    const [input_variety, setInput_variety] = useState("");
    const [input_native, setInput_native] = useState("");
    const [input_native_india, setInput_native_india] = useState(false);
    const [input_type, setInput_type] = useState("");
    const [input_habit, setInput_habit] = useState("");
    const [input_height_m, setInput_height_m] = useState("");
    const [input_lifespan, setInput_lifespan] = useState("");
    const [input_growth_speed, setInput_growth_speed] = useState("");
    const [input_habitat, setInput_habitat] = useState("");
    const [input_flowering, setInput_flowering] = useState("");
    const [input_fruiting, setInput_fruiting] = useState("");
    const [input_pollinators_visitors, setInput_pollinators_visitors] = useState("");
    const [input_known_predators, setInput_known_predators] = useState("");
    const [input_known_host, setInput_known_host] = useState("");
    const [input_propagation, setInput_propagation] = useState("");
    const [input_planting_location, setInput_planting_location] = useState("");
    const [input_pot_requirement, setInput_pot_requirement] = useState("");
    const [input_pests, setInput_pests] = useState("");
    const [input_diseases, setInput_diseases] = useState("");
    const [input_competitiveness, setInput_competitiveness] = useState("");
    const [input_light_requirement, setInput_light_requirement] = useState("");
    const [input_water_requirements, setInput_water_requirements] = useState("");
    const [input_maintenance, setInput_maintenance] = useState("");
    const [input_fragrance, setInput_fragrance] = useState("");
    const [input_orchid, setInput_orchid] = useState(false);
    const [input_succulent, setInput_succulent] = useState(false);
    const [input_night_garden, setInput_night_garden] = useState(false);
    const [input_allergen, setInput_allergen] = useState(false);
    const [input_kid_pet_friendly, setInput_kid_pet_friendly] = useState(false);
    const [input_use, setInput_use] = useState("");
    const [input_use_details, setInput_use_details] = useState("");
    const [input_info, setInput_info] = useState("");
    const [input_tips, setInput_tips] = useState("");
    const [input_plants_of_india_link, setInput_plants_of_india_link] = useState("");
    const [input_image_availability_rg_sir_folder, setInput_image_availability_rg_sir_folder] = useState("");
    const [input_feature_image, setInput_feature_image] = useState("");
    const [input_other_images, setInput_other_images] = useState("");
    const [input_license_information, setInput_license_information] = useState("");

    const lmhoptions = ["Low", "Medium", "High"]
    const locationoptions = ["Indoor", "Outdoor", "Indoor and Outdoor"]
    const potoptions = ["Potted", "Unpotted", "Potted and Unpotted"]

    const [dbData, SetdbData] = useState<PlantType>()


    useEffect(() => {
        const dbPath = ref(db, "/");

        const unsubscribe = onValue(dbPath, (snapshot) => {
            SetdbData(snapshot.val());
        });

        return () => {
            unsubscribe(); // remove listener on unmount
        };
    }, []);

    useEffect(() => {
        console.log(dbData)



        if (dbData && dbData?.[plantid] !== undefined) {
            const data = dbData[plantid]
            setInput_species_name(data.species_name || "");
            setInput_common_name(data.common_name || "");
            setInput_rank(data.rank || "");
            setInput_feat_commonname(data.feat_commonname || "");
            setInput_procurement(data.procurement || "");
            setInput_family_name(data.family_name || "");
            setInput_variety(data.variety || "");
            setInput_native(data.native || "");
            setInput_native_india(data.native_india === "Yes" || data.native_india === "yes");
            setInput_type(data.type || "");
            setInput_habit(data.habit || "");
            setInput_height_m(data.height_m || "");
            setInput_lifespan(data.lifespan || "");
            setInput_growth_speed(data.growth_speed || "");
            setInput_habitat(data.habitat || "");
            setInput_flowering(data.flowering || "");
            setInput_fruiting(data.fruiting || "");
            setInput_pollinators_visitors(data.pollinators_visitors || "");
            setInput_known_predators(data.known_predators || "");
            setInput_known_host(data.known_host || "");
            setInput_propagation(data.propagation || "");
            setInput_planting_location(data.planting_location || "");
            setInput_pot_requirement(data.pot_requirement || "");
            setInput_pests(data.pests || "");
            setInput_diseases(data.diseases || "");
            setInput_competitiveness(data.competitiveness || "");
            setInput_light_requirement(data.light_requirement || "");
            setInput_water_requirements(data.water_requirements || "");
            setInput_maintenance(data.maintenance || "");
            setInput_fragrance(data.fragrance || "");
            setInput_orchid(data.orchid=== "Yes" || data.orchid=== "yes");
            setInput_succulent(data.succulent === "Yes" || data.succulent === "yes");
            setInput_night_garden(data.night_garden === "Yes" || data.night_garden === "yes");
            setInput_allergen(data.allergen === "Yes" || data.allergen === "yes");
            setInput_kid_pet_friendly(data.kid_pet_friendly === "Yes" || data.kid_pet_friendly === "yes");
            setInput_use(data.use || "");
            setInput_use_details(data.use_details || "");
            setInput_info(data.info || "");
            setInput_tips(data.tips || "");
            setInput_plants_of_india_link(data.plants_of_india_link || "");
            setInput_image_availability_rg_sir_folder(data.image_availability_rg_sir_folder || "");
            setInput_feature_image(data.feature_image || "");
            setInput_other_images(data.other_images || "");
            setInput_license_information(data.license_information || "");






        } else {

        }

    }, [dbData])



    const submitData = async () => {

        const newdata = {
            plantid: "nt"+String(input_plantid),
            species_name: input_species_name,
            common_name: input_common_name,
            rank: "NA",
            feat_commonname: input_feat_commonname,
            procurement: input_procurement,
            family_name: input_family_name,
            variety: input_variety,
            native: input_native,
            native_india: input_native_india ? "Yes" : "No",
            type: input_type,
            habit: input_habit,
            height_m: input_height_m,
            lifespan: input_lifespan,
            growth_speed: input_growth_speed,
            habitat: input_habitat,
            flowering: input_flowering,
            fruiting: input_fruiting,
            pollinators_visitors: input_pollinators_visitors,
            known_predators: input_known_predators,
            known_host: input_known_host,
            propagation: input_propagation,
            planting_location: input_planting_location,
            pot_requirement: input_pot_requirement,
            pests: input_pests,
            diseases: input_diseases,
            competitiveness: input_competitiveness,
            light_requirement: input_light_requirement,
            water_requirements: input_water_requirements,
            maintenance: input_maintenance,
            fragrance: input_fragrance,
            orchid: input_orchid? "Yes" : "No",
            succulent: input_succulent? "Yes" : "No",
            night_garden: input_night_garden? "Yes" : "No",
            allergen: input_allergen? "Yes" : "No",
            kid_pet_friendly: input_kid_pet_friendly? "Yes" : "No",
            use: input_use,
            use_details: input_use_details,
            info: input_info,
            tips: input_tips,
            plants_of_india_link: input_plants_of_india_link,

            license_information: input_license_information


        };
        const db_ref = ref(db, String(input_plantid))

        await set(db_ref, newdata)
        onCancel();

    }


    return (
        <div className="w-full ">


            <div className="absolute top-0 left-0 w-full h-full min-h-screen  bg-green-200 z-20 pt-20 flex items-center flex-col overflow-y-auto ">
                <div className="bg-white p-4 rounded-xl mt-10 w-[80vw]">

                    <h1 className="py-2 font-semibold text-xl">Add/edit items</h1>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Plant ID</p>
                            <p className="p-2 bg-gray-100 rounded-xl" >{input_plantid}</p>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Species Name</p>
                            <input onChange={(e) => { setInput_species_name(e.target.value) }} value={input_species_name} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Species Name" />
                        </div>
                        <div className="p-2 flex justify-between gap-2">

                            <div className="flex flex-col w-1/2">
                                <p className="text-sm text-gray-500 px-2">Featured Common Name</p>
                                <input onChange={(e) => { setInput_feat_commonname(e.target.value) }} value={input_feat_commonname} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Featured Common Name" />
                            </div>

                            <div className="flex flex-col w-1/2">
                                <p className="text-sm text-gray-500 px-2">Common Names</p>
                                <input onChange={(e) => { setInput_common_name(e.target.value) }} value={input_common_name} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Seperate by comma" />
                            </div>
                        </div>




                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Procurement</p>
                            <input onChange={(e) => { setInput_procurement(e.target.value) }} value={input_procurement} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Procurement" />
                        </div>

                        <div className="p-2 flex justify-between gap-2">

                            <div className="flex flex-col w-1/2">
                                <p className="text-sm text-gray-500 px-2">Family Name</p>
                                <input onChange={(e) => { setInput_family_name(e.target.value) }} value={input_family_name} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Family Name" />
                            </div>

                            <div className="flex flex-col w-1/2">
                                <p className="text-sm text-gray-500 px-2">Variety</p>
                                <input onChange={(e) => { setInput_variety(e.target.value) }} value={input_variety} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Variety" />
                            </div>
                        </div>

                        <div className="p-2 flex justify-around gap-2 border rounded-xl">

                            <div className="flex items-center">
                                <input onChange={(e) => setInput_native_india(e.target.checked)} checked={input_native_india} className="scale-150 rounded-xl accent-green-500" type="checkbox" />
                                <p className="text-sm text-gray-500 px-2">Native to India</p>

                            </div>

                            <div className="flex flex-col w-full max-w-2/3">
                                <p className="text-sm text-gray-500 px-2">Native</p>
                                <input onChange={(e) => { setInput_native(e.target.value) }} value={input_native} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Native Regions" />
                            </div>



                        </div>

                        <div className="p-2 flex justify gap-2 flex-wrap bg-green-800 rounded-2xl ">

                            <div className="flex flex-col">
                                <p className="text-sm text-white  px-2">Plant Type</p>
                                <input onChange={(e) => { setInput_type(e.target.value) }} value={input_type} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Plant Type" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-white px-2">Habit</p>
                                <input onChange={(e) => { setInput_habit(e.target.value) }} value={input_habit} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Habit" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-white px-2">Height (m)</p>
                                <input onChange={(e) => { setInput_height_m(e.target.value) }} value={input_height_m} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Height in meters" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-white px-2">Lifespan</p>
                                <input onChange={(e) => { setInput_lifespan(e.target.value) }} value={input_lifespan} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Lifespan" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-white px-2">Growth Speed</p>
                                <input onChange={(e) => { setInput_growth_speed(e.target.value) }} value={input_growth_speed} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Growth Speed" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-white px-2">Habitat</p>
                                <input onChange={(e) => { setInput_habitat(e.target.value) }} value={input_habitat} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Habitat" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-white px-2">Flowering</p>
                                <input onChange={(e) => { setInput_flowering(e.target.value) }} value={input_flowering} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Flowering Info" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-white px-2">Fruiting</p>
                                <input onChange={(e) => { setInput_fruiting(e.target.value) }} value={input_fruiting} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Fruiting Info" />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Pollinators / Visitors</p>
                            <input onChange={(e) => { setInput_pollinators_visitors(e.target.value) }} value={input_pollinators_visitors} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Pollinators" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Known Predators</p>
                            <input onChange={(e) => { setInput_known_predators(e.target.value) }} value={input_known_predators} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Known Predators" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Propagation</p>
                            <input onChange={(e) => { setInput_propagation(e.target.value) }} value={input_propagation} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Propagation Method" />
                        </div>

                        <div className="p-2 py-4 flex justify-around gap-2 flex-wrap border rounded-2xl ">

                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 px-2">Planting Location</p>

                                <select value={input_planting_location} className="p-2 bg-gray-300 rounded-xl" onChange={(e) => { setInput_planting_location(e.target.value) }}>
                                    {locationoptions.map((item, index) => (
                                        <option className="p-2" key={index} value={item}>{item}</option>
                                    ))}
                                </select>

                            </div> 
                            
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 px-2">Competativeness</p>

                                <select value={input_competitiveness} className="p-2 bg-gray-300 rounded-xl" onChange={(e) => { setInput_competitiveness(e.target.value) }}>
                                    {lmhoptions.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>


                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 px-2">Light Requirement</p>

                                 <input onChange={(e) => { setInput_light_requirement(e.target.value) }} value={input_light_requirement} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Light Requirement" />

                                


                            </div>

                           

                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 px-2">Water Requirements</p>

                                <select value={input_water_requirements} className="p-2 bg-gray-300 rounded-xl" onChange={(e) => { setInput_water_requirements(e.target.value) }}>
                                    {lmhoptions.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>



                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 px-2">Pot Requirements</p>

                                <select value={input_pot_requirement} className="p-2 bg-gray-300 rounded-xl" onChange={(e) => { setInput_pot_requirement(e.target.value) }}>
                                    {potoptions.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>



                            </div>

                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500 px-2">Maintenance</p>

                                <select value={input_maintenance} className="p-2 bg-gray-300 rounded-xl" onChange={(e) => { setInput_maintenance(e.target.value) }} >
                                    {lmhoptions.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>


                            </div>
                            </div>
                             <div className="p-2 py-4 flex justify-around gap-2 flex-wrap border rounded-2xl ">

                            <div className="flex items-center">
                                <input onChange={(e) => setInput_succulent(e.target.checked)} checked={input_succulent} className="scale-150 rounded-xl accent-green-500" type="checkbox" />
                                <p className="text-sm text-gray-500 px-2">Succulent</p>

                            </div>

                            <div className="flex items-center">
                                <input onChange={(e) => setInput_orchid(e.target.checked)} checked={input_orchid} className="scale-150 rounded-xl accent-green-500" type="checkbox" />
                                <p className="text-sm text-gray-500 px-2">Orchid</p>

                            </div>

                            <div className="flex items-center">
                                <input onChange={(e) => setInput_night_garden(e.target.checked)} checked={input_night_garden} className="scale-150 rounded-xl accent-green-500" type="checkbox" />
                                <p className="text-sm text-gray-500 px-2">Night Garden</p>

                            </div>

                            <div className="flex items-center">
                                <input onChange={(e) => setInput_allergen(e.target.checked)} checked={input_allergen} className="scale-150 rounded-xl accent-green-500" type="checkbox" />
                                <p className="text-sm text-gray-500 px-2">Allergen</p>

                            </div>

                            <div className="flex items-center">
                                <input onChange={(e) => setInput_kid_pet_friendly(e.target.checked)} checked={input_kid_pet_friendly} className="scale-150 rounded-xl accent-green-500" type="checkbox" />
                                <p className="text-sm text-gray-500 px-2">Kid/Pet Friendly</p>

                            </div>



                        </div>


                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Use</p>
                            <input onChange={(e) => { setInput_use(e.target.value) }} value={input_use} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Plant Use" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Use Details</p>
                            <textarea onChange={(e) => { setInput_use_details(e.target.value) }} value={input_use_details} className="p-2 bg-gray-100 rounded-xl" placeholder="Enter Use Details" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Information</p>
                            <textarea onChange={(e) => { setInput_info(e.target.value) }} value={input_info} className="p-2 bg-gray-100 rounded-xl" rows={3} placeholder="Enter Plant Information" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Tips</p>
                            <textarea onChange={(e) => { setInput_tips(e.target.value) }} value={input_tips} className="p-2 bg-gray-100 rounded-xl" rows={3} placeholder="Enter Tips" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">License Information</p>
                            <input onChange={(e) => { setInput_license_information(e.target.value) }} value={input_license_information} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="License Information" />
                        </div>

                        <div className="flex flex-col">
                            <p className="text-sm text-gray-500 px-2">Plants of India Link</p>
                            <input onChange={(e) => { setInput_plants_of_india_link(e.target.value) }} value={input_plants_of_india_link} className="p-2 bg-gray-100 rounded-xl" type="text" placeholder="Enter Plants of India Link" />
                        </div>

                        <div className="flex justify-center text-white gap-5">
                            <button onClick={onCancel} className="p-2 bg-red-600 rounded-xl cursor-pointer hover:bg-red-800 px-4 shadow-xl">Cancel</button>

                            <button onClick={submitData} className="p-2 bg-green-600 rounded-xl cursor-pointer hover:bg-green-800 px-4 shadow-xl">Submit</button>

                        </div>


                    </div>



                </div>



            </div>



        </div>
    )
}

export default Dataform
