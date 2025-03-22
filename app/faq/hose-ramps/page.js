'use client';

import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FAQHR = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <NavBar />

            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Hose Ramps - FAQs</h1>

                {/* FAQ 1 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are hose ramps, and why are they used?
                        <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Hose ramps are protective structures designed to shield hoses, cables, and pipes from damage caused by vehicular and pedestrian traffic. They help prevent costly repairs and leaks while ensuring workplace safety in industrial, emergency response, and event settings. Hose ramps are commonly used in construction sites, fire safety operations, warehouses, and public events where hoses need to be laid across roads or walkways without obstructing traffic.

                            For more information of hose ramps, check out this resource: <a href='https://www.globalspec.com/learnmore/electrical_electronic_components/wires_cables_accessories/cable_protectors' target='_blank' className='text-blue-700' >Globalspec</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What types of hose ramps does Elastomech offer?
                        <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech provides a wide range of hose ramps, including rubber hose ramps, custom hose ramps. More details can be found <a href='https://www.elastomech.in/products/hose-ramps' className='text-blue-700' >here</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        What materials are hose ramps made of?
                        <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 text-black leading-relaxed">
                            Hose ramps are typically made from durable materials like:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Rubber:</span> Provides flexibility, shock absorption, and weather resistance.</li>
                                <li><span className="font-semibold">Polyurethane (PU):</span> Lightweight and highly durable, suitable for heavy-duty applications.</li>
                                <li><span className="font-semibold">High-Density Polyethylene (HDPE):</span> Corrosion-resistant and commonly used in extreme environments.</li>
                                <li><span className="font-semibold">Metal (Steel or Aluminum):</span> Used in high-load industrial applications but can be heavy and less flexible.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                        What weight capacity do hose ramps support?
                        <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Hose ramps are designed to support various load capacities, ranging from pedestrian traffic (a few hundred kilograms) to heavy-duty vehicle traffic (several tons). Industrial-grade hose ramps can withstand trucks, forklifts, and emergency vehicles without compromising the integrity of the hoses beneath them.
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        Are hose ramps weather-resistant?
                        <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, most hose ramps are made from weather-resistant materials like rubber and polyurethane, making them suitable for extreme temperatures, rain, snow, and UV exposure. High-quality ramps ensure longevity even in harsh environments.
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        How do I install a hose ramp?
                        <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Installing a hose ramp is simple and requires no special tools:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Position the Ramp</b>: Place it over the hose or cable.</li>
                                <li><b>Secure It (If Necessary)</b>: Some ramps have connectors or bolts to secure them to the ground.</li>
                                <li><b>Check for Stability</b>: Ensure the ramp is firmly in place before allowing traffic over it.</li>
                            </ol>
                            For heavy-duty applications, ramps may include modular connectors for extended coverage.
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        Where are hose ramps commonly used?
                        <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Hose ramps are widely used in:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Fire departments</b> – Protecting fire hoses from vehicle damage during emergency operations.</li>
                                <li><b>Construction sites</b> – Preventing damage to water and air supply hoses.</li>
                                <li><b>Industrial plants</b> – Ensuring cables and hoses remain undamaged in high-traffic areas.</li>
                                <li><b>Outdoor events</b> – Protecting temporary wiring and hoses at concerts or festivals.</li>
                            </ul>
                            For more information, visit: <a href="https://www.northerntankstore.co.uk/a-guide-to-pipe-ramps-exploring-their-benefits-and-applications" target="_blank" rel="noopener noreferrer" className="text-blue-700">here</a>
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        Are there different types of hose ramps?
                        <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                Yes, hose ramps come in various types based on their application:
                                <li><span className="font-semibold">Single-channel hose ramps</span> – Designed for one hose or cable.</li>
                                <li><span className="font-semibold">Multi-channel hose ramps</span> – Made for industrial applications with high-load capacity.</li>
                                <li><span className="font-semibold">Heavy-duty hose ramps</span></li>
                                <li><span className="font-semibold">Portable hose ramps</span> – Lightweight and easy to transport.</li>
                            </ol>
                            For more details, visit: <a href="https://www.globalspec.com/learnmore/electrical_electronic_components/wires_cables_accessories/cable_protectors" target="_blank" rel="noopener noreferrer" className="text-blue-700">Globalspec</a>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        How do I maintain and clean hose ramps?
                        <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            To extend the lifespan of a hose ramp:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Regularly inspect for cracks or damage.</b></li>
                                <li><b>Clean with mild soap and water</b> to remove debris.</li>
                                <li><b>Store in a dry place</b> to prevent material degradation.</li>
                                <li><b>Ensure proper placement</b> to avoid unnecessary wear.</li>
                                <br />
                                <p>Visit our products page to see other products:</p>
                                <a
                                    href="https://www.elastomech.in/products/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700"
                                >
                                    Elastomech products
                                </a>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                        What weight capacity do hose ramps support?
                        <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Hose ramps are designed to support various load capacities, ranging from pedestrian traffic (a few hundred kilograms) to heavy-duty vehicle traffic (several tons). Industrial-grade hose ramps can withstand trucks, forklifts, and emergency vehicles without compromising the integrity of the hoses beneath them.
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

export default FAQHR;