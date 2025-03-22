import { useState } from "react";
import Link from "next/link";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

export const metadata = {
    title: "FAQ-CABLE-PROTECTORS by Elastomech",
    description: "Explore Elastomech's detailed FAQ on cable protectors, including rubber cable protectors, heavy-duty cable ramps, and industrial wire covers. Learn about materials like polyurethane, rubber, and HDPE, and discover solutions for cable management in warehouses, event spaces, and industrial environments. Get insights on installation, durability, and safety compliance for protecting cables from damage and preventing trip hazards.",
    keywords: "cable protectors, rubber cable protectors, heavy-duty cable ramps, industrial wire covers, electrical safety, cable management solutions, warehouse cable protectors, event cable safety, industrial cable covers, hose and cable ramps, cable floor protectors, cable organizers, trip hazard prevention, cable protection solutions, Elastomech, cable safety, cable ramp solutions, outdoor cable protectors, indoor cable protectors, cable management best practices, cable protector installation, cable protector materials, cable protector types, cable protector weight capacity, cable protector safety standards"
};

const FAQCP = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <NavBar />

            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Cable Protectors - FAQs</h1>

                {/* FAQ 1 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are cable protectors, and why are they important?
                        <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Cable protectors safeguard electrical wires, hoses, and cables from damage caused by foot traffic, vehicles, and heavy machinery. They prevent tripping hazards, extend cable lifespan, and ensure workplace safety.
                            🔗 <a href="https://www.osha.gov/electrical-safety" target="_blank" rel="noopener noreferrer" className="text-blue-700">Learn More About Cable Safety Regulations</a>
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What types of cable protectors does Elastomech offer?
                        <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech provides a wide range of cable protectors, including rubber cable protectors, heavy-duty cable ramps, and industrial wire covers. More details can be found <a href='https://www.elastomech.in/products/cable-protectors' className='text-blue-700' >here</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        What materials are used in cable protectors?
                        <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 text-black leading-relaxed">
                            Common materials include:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Rubber:</span> Durable and flexible for heavy loads.</li>
                                <li><span className="font-semibold">Polyurethane (PU):</span> Lightweight and weather-resistant.</li>
                                <li><span className="font-semibold">High-Density Polyethylene (HDPE):</span> Strong and corrosion-resistant.</li>
                                <li><span className="font-semibold">Metal (Steel or Aluminum):</span> Used in extreme industrial conditions.</li>
                            </ul>
                            🔗 <a href="https://www.nema.org/Standards/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-700">Comparison of Cable Protector Materials</a>
                        </div>
                    )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                        How do cable protectors enhance workplace safety?
                        <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Cable protectors reduce trip hazards, prevent accidental cable damage, and improve overall workplace organization. By keeping wires and hoses secure, they help maintain compliance with safety regulations.
                            🔗 <a href="https://www.hse.gov.uk/electricity/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Workplace Electrical Safety Guidelines</a>
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        How do I choose the right cable protector for my needs?
                        <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Consider these factors:
                            <li><b>Environment: </b> Indoor, outdoor, or industrial.</li>
                            <li><b>Cable type and size:</b> Ensure the protector's channel fits your cables.</li>
                            <li><b>Load-bearing capacity:</b> Match it to pedestrian or vehicular traffic.</li>
                            <li><b>Material durability:</b> Rubber for flexibility, PU for lightweight use.</li>
                            🔗 <a href="https://www.cableorganizer.com/articles/cable-management-best-practices.html" target="_blank">Best Practices for Cable Management</a>
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        What are the different types of cable protectors?
                        <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Drop-over cable protectors</b>Drop-over cable protectors.</li>
                                <li><b>Split-top cable protectors</b>: Easy to insert cables.</li>
                                <li><b>Heavy-duty cable protectors</b>: Withstand vehicle and forklift loads.</li>
                            </ol>
                            🔗 <a href="https://www.cableorganizer.com/learning-center/articles/ultimate-guide-cable-management-for-beginners.php" target="_blank" rel="noopener noreferrer" className="text-blue-700">Cable Protector Buying Guide</a>
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        How do you install cable protectors?
                        <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li>Clean the surface before placing the protector.</li>
                                <li>Lay cables inside the designated grooves.</li>
                                <li>Secure the protector in place with fasteners if required.</li>
                            </ul>
                           <a href="https://www.hse.gov.uk/slips/campaigns.htm" target="_blank" rel="noopener noreferrer" className="text-blue-700">Comparison of Cable Protector Materials</a>
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        What industries use cable protectors?
                        <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Warehouses and factories</span> (prevent accidents).</li>
                                <li><span className="font-semibold">Events and concerts</span> (secure wiring).</li>
                                <li><span className="font-semibold">Construction sites</span> (protect electrical and hydraulic lines).</li>
                                <li><span className="font-semibold">Offices and commercial spaces</span> (reduce trip hazards).</li>
                            </ol>
                            For more details, visit: <a href="https://www.necconnect.org/national-electrical-code-nec/" target="_blank" rel="noopener noreferrer" className="text-blue-700">National Electrical Code (NEC) Guidelines</a>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        What weight capacity do cable protectors support?
                        <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            The weight capacity depends on the type of protector:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Light-duty (pedestrian use):</b> Supports up to 500 kg.</li>
                                <li><b>Medium-duty (office and event use):</b> Supports up to 2 tons.</li>
                                <li><b>Heavy-duty (vehicle and industrial use):</b> Can handle 10+ tons.</li>
                                <br />
                                <p>More details:</p>
                                <a
                                    href="https://www.osha.gov/standards"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700"
                                >
                                    OSHA Standards for Industrial Safety
                                </a>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                        Can cable protectors be used outdoors?
                        <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, certain cable protectors are designed for outdoor use, made from UV-resistant and weatherproof materials like polyurethane or reinforced rubber. These withstand extreme temperatures, moisture, and vehicle traffic.
                            🔗 <a href="https://www.weather.gov/safety" target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700">Weatherproofing Electrical Equipment</a>
                        </div>
                    )}
                </div>

                {/* Back to Home Link */}
                <div className="mt-6 text-center">
                    <Link href="/" className="text-yellow-500 font-semibold">Back to Home</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQCP;