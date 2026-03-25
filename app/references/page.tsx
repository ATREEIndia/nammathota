import React from 'react';
import { Book, Globe, Library } from 'lucide-react'; // Optional: Install lucide-react for icons
import Header from '../compoents/Header';
import Banner from '../compoents/Banner';
import { style_h1 } from '../constants';

const ReferencesPage = () => {
    const books = [
        "Engel, D. H., & Phummai, S. (2002). A Field Guide to Tropical Plants of Asia. Timber Press.",
        "Rauch, F. D., & Weissich, P. R. (2000). Plants for Tropical Landscapes: A Gardener’s Guide. University of Hawai‘i Press.",
        "Pascal, J. P., & Ramesh, B. R. (1987). Forest trees of the Western Ghats (India). French Institute of Pondicherry.",
        "Isaac, K. E. (1999). Common Indian wild flowers. Bombay Natural History Society.",
        "Keystone Foundation. (2018). Forest plants of the Nilgiris: Eastern Nilgiri Biosphere Reserve. Keystone Foundation.",
        "Gadgil, M., & Chandran, M. D. S. (1992). Heritage trees. Indian Institute of Science.",
        "Whistler, W. A. (2000). Tropical garden flora: Plants cultivated in the Hawaiian Islands and other tropical places. Bishop Museum Press.",
        "Mabberley, D. J. (2017). Mabberley’s plant-book: A portable dictionary of plants, their classification and uses (4th ed.). Cambridge University Press.",
        "Singh, V., Singh, P., & Chaudhary, L. B. (2013). Trees of Delhi: A field guide. Botanical Survey of India."
    ];

    const digitalResources = [
        { name: "World Plants", url: "https://www.worldplants.ca/" },
        { name: "BGCI PlantSearch / GlobalTreeSearch", url: "https://www.bgci.org/resources/bgci-tools-and-resources/" },
        { name: "Plants of the World Online (Kew)", url: "http://www.plantsoftheworldonline.org/" },
        { name: "Efloraofindia", url: "https://efloraofindia.com/" },
        { name: "India Biodiversity Portal", url: "https://indiabiodiversity.org/" },
        { name: "Digital Flora of Peninsular India", url: "http://indiaflora-ces.iisc.c.in" }
    ];

    return (
        <div>
             <Header currentpage="References"/>
        <Banner title="References" sub_title=""/>
             <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            
       
            <div className="max-w-4xl mx-auto mt-4">

                {/* Header Section */}
                <header className="mb-12 ">
                    <h1 className="text-2xl font-bold text-emerald-900 mb-4 tracking-tight">
                        Data Sources
                    </h1>
                    <p className="mt-1 text-stone-600 italic">
                        A curated collection of literature and digital databases.
                    </p>
                </header>

                <div className="space-y-12">

                    {/* Books Section */}
                    <section>
                        <div className="flex items-center mb-6 gap-2 border-b border-stone-200 pb-2">
                            <Book className="text-emerald-700 w-6 h-6" />
                            <h2 className="text-2xl font-semibold text-stone-800">Publications & Field Guides</h2>
                        </div>
                        <ul className="space-y-4">
                            {books.map((book, index) => (
                                <li key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-emerald-500">
                                    <span className="text-stone-400 font-mono text-sm">{index + 1}.</span>
                                    <p className="text-stone-700 leading-relaxed">{book}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Digital Resources Section */}
                    <section>
                        <div className="flex items-center mb-6 gap-2 border-b border-stone-200 pb-2">
                            <Globe className="text-emerald-700 w-6 h-6" />
                            <h2 className="text-2xl font-semibold text-stone-800">Digital Databases</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {digitalResources.map((site, index) => (
                                <a
                                    key={index}
                                    href={site.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-4 bg-emerald-50 border border-emerald-100 rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300"
                                >
                                    <h3 className="font-bold mb-1 group-hover:text-white">{site.name}</h3>
                                    <p className="text-sm text-emerald-700 group-hover:text-emerald-100 break-all underline">
                                        {site.url.replace(/(^\w+:|^)\/\//, '')}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </section>

                </div>

                
            </div>
        </div>

        </div>
       
    );
};

export default ReferencesPage;