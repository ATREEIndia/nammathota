export const style_h1 = "text-xl  lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight font-semibold"
export const style_p = "text-lg leading-relaxed"

export type PlantTypeItems = {
    plantid: string;
    species_name: string;
    common_name: string;
    rank: string;
    feat_commonname: string;
    procurement: string;
    family_name: string;
    variety: string;
    native: string;
    native_india: string;
    type: string;
    habit: string;
    height_m: string;
    lifespan: string;
    growth_speed: string;
    habitat: string;
    flowering: string;
    fruiting: string;
    pollinators_visitors: string;
    known_predators: string;
    known_host: string;
    propagation: string;
    planting_location: string;
    pot_requirement: string;
    pests: string;
    diseases: string;
    competitiveness: string;
    light_requirement: string;
    water_requirements: string;
    maintenance: string;
    fragrance: string;
    orchid: string;
    succulent: string;
    night_garden: string;
    allergen: string;
    kid_pet_friendly: string;
    use: string;
    use_details: string;
    info: string;
    tips: string;
    plants_of_india_link: string;
    image_availability_rg_sir_folder: string;
    feature_image: string;
    other_images: string;
    license_information: string;
};

export type PlantType=Record<string,PlantTypeItems>


export type OptionType = {
    text: string;
    desc: string;
};

export type QuerryItemType = {
    Title: string;
    img: string;
    Options: Record<number, OptionType>;
};

export type Querrytype = Record<number, QuerryItemType>;




export const s3bucket = "https://namma-thota.s3.amazonaws.com/assets"

