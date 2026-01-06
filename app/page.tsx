'use client'
import Image from "next/image";
import Header from "./compoents/Header";
import Banner from "./compoents/Banner";
import Herosection from "./compoents/Herosection";
import Intro from "./compoents/Intro";
import SectionCategory from "./compoents/SectionCategory";
import Getintouch from "./compoents/Getintouch";
import { ref, set } from "firebase/database";
import { db } from "./compoents/Firebase";
import { PlantType } from "./constants";

export default function Home() {

  const plantData = {
   plantid: "nt10001",
    species_name: "Acorus calamus L.",
    common_name: "Sweet Flag, Sway, Muskrat Root, Baje, Athibaje, Vacha",
    rank: "NA",
    feat_commonname: "Sweet Flag",
    procurement: "NA",
    family_name: "Acoraceae",
    variety: "NA",
    native: "Indian subcontinent",
    native_india: "Yes",
    type: "Deciduous",
    habit: "Aquatic Herb",
    height_m: "0.5 m-1.5 m",
    lifespan: "Perennial",
    growth_speed: "Medium",
    habitat: "Edges Of Ponds And Other Wetlands",
    flowering: "April-July",
    fruiting: "April-July",
    pollinators_visitors: "Beetles",
    known_predators: "Unknown",
    known_host: "Unknown",
    propagation: "Rhizome division",
    planting_location: "Outdoor",
    pot_requirement: "potted and unpotted",
    pests: "Sibirhelus corpulentus larvae",
    diseases: "powdery mildews",
    competitiveness: "Medium",
    light_requirement: "6-8 Hours",
    water_requirements: "High",
    maintenance: "Low",
    fragrance: "yes",
    orchid: "no",
    succulent: "no",
    night_garden: "no",
    allergen: "no",
    kid_pet_friendly: "no",
    use: "Medicinal",
    use_details: "NA",
    info: "A fragrant, easy-to-grow plant with sword-like leaves...",
    tips: "NA",
    plants_of_india_link: "https://poi.theindianplants.org/species_page/AN_23_1_1_0",
    image_availability_rg_sir_folder: "Yes",
    feature_image: "sweet_flag_main.jpg",
    other_images: "",
    license_information: "Stefan.lefnaer, J.F. Gaffard, Autoreille, France, via Wikimedia Commons"
  

  };

  const adddata = async () => {
    const db_ref = ref(db, "000")

    await set(db_ref, plantData)


  }

  return (
    <main className="w-full h-full flex flex-col gap-5">
      <div className="h-10">
        <Header currentpage="Home" />
      </div>

      <Herosection />

      <Intro />

      <SectionCategory category="Indoor" datacat="planting_location" />

      <SectionCategory category="Outdoor" datacat="planting_location" />

      <SectionCategory category="Medicinal" datacat="use" />

      <SectionCategory category="Edible" datacat="use" />

      <Getintouch />

      <div className="w-full px-4 flex flex-col gap-2 items-center p-2">
        <h1 className="font-semibold text-xl"> Privacy Policy</h1>
       <p className="text-lg px-4">This app does not collect, store, or share any personal data. It is designed solely to provide gardening information and support decision-making. There is no login or account required. Anyone can access and use the app directly from their browser.</p>

      </div>
 
     
















    </main>
  );
}
