'use client'
import React, { useEffect, useState } from 'react'
import Header from '../compoents/Header'
import Banner from '../compoents/Banner'
import QuerryLayout from '../compoents/QuerryLayout'
import { PlantType, Querrytype } from '../constants'
import Results from '../compoents/Results'
import { DatabaseReference, ref, onValue } from 'firebase/database'
import { db } from '../compoents/Firebase'

const page = () => {

    const [curentQuerry, SetcurrentQuerry] = useState(1)

    const [currentData, SetcurrentData] = useState<PlantType>({})
    const [resultData, SetResultData] = useState<PlantType>({})

    const SelectionQuerries: Querrytype = {
        1: {
            Title: "Where do you plan to grow your plants?",
            img: "q1.png",
            Options: {
                1: {
                    text: "Indoor",
                    desc: "Inside the house with controlled light and temperature conditions"
                },
                2: {
                    text: "Outdoor",
                    desc: "Open ground space with full or partial sun"
                },
                3: {
                    text: "Balcony / Terrace",
                    desc: "Small outdoor space with partial sun exposure"
                }
            }
        },
        2: {
            Title: "How often can you care for your garden?",
            img: "q2.png",
            Options: {
                1: {
                    text: "I travel a lot",
                    desc: "Plants that need minimal care, light pruning, low fertilizer needs, few pest or disease issues."
                },
                2: {
                    text: "I can do occasional check-ins",
                    desc: "Plants that need weekly attention, seasonal pruning, occasional fertilising, and sometimes face pests or diseases."
                },
                3: {
                    text: "I am Happy to Tend Regularly",
                    desc: "Plants that need frequent attention, regular pruning, consistent fertilising, and are more likely to face pests or diseases."
                }
            }
        },
        3: {
            Title: "How much water can you spare for your garden?",
            img: "q3.png",
            Options: {
                1: {
                    text: "My Water Use is Limited",
                    desc: "Plants that survive on minimal watering."
                },
                2: {
                    text: "My water Use is Regular but Mindful",
                    desc: "Plants that need moderate watering to stay healthy."
                },
                3: {
                    text: "I am Happy to Water Frequently",
                    desc: "Plants that prefer require frequent watering."
                }
            },

        },
        4: {
            Title: "What do you want from your plants?",
            img: "q4.png",
            Options: {
                1: {
                    text: "Medicinal Benefits",
                    desc: "Plants whose parts or whole can be used to prevent, relieve, or treat health conditions, or promote general wellness."
                },
                2: {
                    text: "Edible Produce",
                    desc: "Plants that produce fruits, vegetables, or herbs for cooking and consumption."
                },
                3: {
                    text: "Ornamental Beauties",
                    desc: "Plants grown mainly for their decorative or aesthetic appeal."
                }
            },


        },
        5: {
            Title: "Do you need plants that are safe for kids or pets?",
            img: "q5.png",
            Options: {
                1: {
                    text: "Yes",
                    desc: "Plants that are non-toxic and safe for children and pets."
                },
                2: {
                    text: "No",
                    desc: "Plants that can be toxic if touched or ingested."
                },

            },


        }

    }

    const [selections, Setselections] = useState<Record<number, number[]>>({
        1: [], 2: [], 3: [], 4: [], 5: []

    })

    const selectionValidation = {
        1: ["indoor", "outdoor", "indoor and outdoor"],
        2: ["low", "medium", "high"],
        3: ["low", "medium", "high"],

        4: ["medicinal", "edible", "ornamental"],
        5: ["yes", "no"],

    }


    const handleQuerryselction = (id: number, OnNext: boolean, OnPrev: boolean) => {
        // if(selections1.includes(id)){
        //     Setselections1(prev=>prev.filter(item=> item!==id))
        //     return;
        // }
        // Setselections1([...selections1,id])
        if (OnNext) {
            SetcurrentQuerry(curentQuerry + 1)
        }
        if (OnPrev) {
            SetcurrentQuerry(curentQuerry - 1)

        }

        if (id === 0) {
            Setselections(prev => ({
                ...prev, [curentQuerry]: []

            }))
            return;
        }
        Setselections(prev => ({
            ...prev, [curentQuerry]: [id]

        }))
    }

    useEffect(() => {


        console.log("resultData: " + Object.entries(resultData).map(([key, data]) => {
            return data.plantid
        }))

    }, [resultData])

    useEffect(() => {
        getResuls();


    }, [selections])

    useEffect(() => {
        const dbpath = ref(db, "/")
        const fetchDB = () => {
            onValue(dbpath, (snapshot) => {
                SetcurrentData(snapshot.val())

            })

        }

        fetchDB()

    }, [])

    const getResuls = () => {
        SetResultData(Object.fromEntries(
            Object.entries(currentData)
                .filter(([key, data]) => {

                    const getSelection = (index: number) => {
                        return selections[index][0] - 1;

                    }

                    const locationSelected = selectionValidation[1][getSelection(1)]
                    const maintinaceSelected = selectionValidation[2][getSelection(2)]
                    const waterSelected = selectionValidation[3][getSelection(3)];
                    const useSelected = selectionValidation[4][getSelection(4)];
                    const PetFriendlySelected = selectionValidation[5][getSelection(5)]

                    console.log({
                        locationSelected,
                        maintinaceSelected,
                        waterSelected,
                        useSelected,
                        PetFriendlySelected
                    });



                    let querry = true;

                    if (locationSelected) {
                        querry = querry &&
                            data.planting_location.toLowerCase() === locationSelected || data.planting_location.toLowerCase() === "indoor and outdoor"
                    }


                    if (maintinaceSelected) {

                        const maintinance = data.maintenance.toLowerCase();

                        if (maintinaceSelected === "low") {
                            querry = querry && maintinance == "low"
                        }
                        else if (maintinaceSelected == "medium") {
                            querry = querry && (maintinance === "medium" || maintinance === "low")

                        } else {
                            querry = querry && (maintinance === "medium" || maintinance === "low" || maintinance === "high")

                        }

                    }


                    if (waterSelected) {
                        const water = data.water_requirements.toLowerCase();

                        if (waterSelected === "low") {
                            querry = querry && water == "low"
                        }
                        else if (waterSelected == "medium") {
                            querry = querry && (water === "medium" || water === "low")

                        } else {
                            querry = querry && (water === "medium" || water === "low" || water === "high")

                        }
                    }

                    if (useSelected) {
                        const use = data.use.toLowerCase();

                        querry = querry && use.includes( useSelected);
                    }

                    if (PetFriendlySelected) {

                        const pet = data.kid_pet_friendly.toLowerCase();

                        querry = querry && pet == PetFriendlySelected;

                    }




                    return querry;




                })
        ))

    }


    return (
        <main className="w-full flex flex-col gap-5">
            <Header currentpage="Tool" />

            <Banner
                title="Tool"
                sub_title="" />

            {curentQuerry === 1 &&
                <QuerryLayout
                    Querrydata={SelectionQuerries[1]}
                    handleQuerryselction={handleQuerryselction}
                    activeSelection={selections[curentQuerry]}
                    isNext={true}
                    isPrev={false}
                    resultCount={Object.keys(resultData).length} />
            }


            {curentQuerry === 2 &&
                <QuerryLayout
                    Querrydata={SelectionQuerries[curentQuerry]}
                    handleQuerryselction={handleQuerryselction}
                    activeSelection={selections[curentQuerry]}
                    isNext={true}
                    isPrev={true}
                    resultCount={Object.keys(resultData).length} />
            }

            {curentQuerry === 3 &&
                <QuerryLayout
                    Querrydata={SelectionQuerries[curentQuerry]}
                    handleQuerryselction={handleQuerryselction}
                    activeSelection={selections[curentQuerry]}
                    isNext={true}
                    isPrev={true}
                    resultCount={Object.keys(resultData).length} />
            }

            {curentQuerry === 4 &&
                <QuerryLayout
                    Querrydata={SelectionQuerries[curentQuerry]}
                    handleQuerryselction={handleQuerryselction}
                    activeSelection={selections[curentQuerry]}
                    isNext={true}
                    isPrev={true}
                    resultCount={Object.keys(resultData).length} />
            }

            {curentQuerry === 5 &&
                <QuerryLayout
                    Querrydata={SelectionQuerries[curentQuerry]}
                    handleQuerryselction={handleQuerryselction}
                    activeSelection={selections[curentQuerry]}
                    isNext={false}
                    isPrev={true}
                    resultCount={Object.keys(resultData).length} />
            }

            <Results filteredList={resultData} />







        </main>
    )
}

export default page


