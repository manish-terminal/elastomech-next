'use client';

import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FAQTP = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <NavBar />

            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Tipper Pads - FAQs</h1>

                {/* FAQ 1 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are tipper pads, and why are they important?
                        <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Tipper pads are impact-resistant rubber or polyurethane pads used in tipper trucks to absorb shock, reduce noise, and protect the truck bed. They help minimize wear and tear while improving operational efficiency.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Shock Absorption:</b> Reduces impact during loading and unloading.</li>
                                <li><b>Noise Reduction:</b> Minimizes operational noise.</li>
                                <li><b>Protection:</b> Prevents damage to the truck bed.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Learn More About Tipper Pads</a>
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What materials are used in tipper pads?
                        <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech manufactures tipper pads using high-quality rubber and polyurethane for durability and flexibility.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Rubber:</b> Durable and flexible, ideal for general use.</li>
                                <li><b>Polyurethane:</b> Offers better durability and flexibility in extreme conditions.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Explore Tipper Pad Materials</a>
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        How do tipper pads enhance truck performance?
                        <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Tipper pads absorb impact, reduce vibration, and extend truck bed longevity.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Impact Absorption:</b> Protects the truck bed from heavy loads.</li>
                                <li><b>Vibration Reduction:</b> Minimizes wear and tear on the truck.</li>
                                <li><b>Longevity:</b> Extends the life of the truck bed.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Enhance Truck Performance</a>
                        </div>
                    )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                        What are the different types of tipper pads?
                        <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech offers a variety of tipper pads to suit different needs:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Standard Rubber Tipper Pads:</b> Ideal for general use.</li>
                                <li><b>Heavy-Duty Polyurethane Tipper Pads:</b> Suitable for extreme conditions.</li>
                                <li><b>Custom-Molded Tipper Pads:</b> Designed for specific truck models.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Explore Tipper Pad Types</a>
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        How often should tipper pads be replaced?
                        <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Replacement depends on usage, but regular inspection is recommended.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Inspection:</b> Check for wear and tear regularly.</li>
                                <li><b>Replacement:</b> Replace when signs of damage are visible.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Tipper Pad Maintenance</a>
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        Are polyurethane tipper pads better than rubber ones?
                        <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Polyurethane offers better durability and flexibility in extreme conditions.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Durability:</b> Polyurethane lasts longer under heavy use.</li>
                                <li><b>Flexibility:</b> Better performance in extreme temperatures.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Polyurethane vs Rubber Tipper Pads</a>
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        Where can I buy Elastomech tipper pads?
                        <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Visit <a href="https://www.elastomech.in/products/tipper-pads" className="text-blue-700">Elastomech Tipper Pads</a> for more details.
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        Do tipper pads reduce truck maintenance costs?
                        <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, tipper pads help reduce maintenance costs by preventing truck bed damage.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Cost Savings:</b> Reduces the need for frequent repairs.</li>
                                <li><b>Efficiency:</b> Improves overall truck performance.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Tipper Pad Benefits</a>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        Can tipper pads be customized for specific truck models?
                        <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, Elastomech offers customized tipper pads for different truck models.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Customization:</b> Tailored to fit specific truck models.</li>
                                <li><b>Compatibility:</b> Ensures optimal performance.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/custom-product" target="_blank" rel="noopener noreferrer" className="text-blue-700">Custom Tipper Pads</a>
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                        How do I install tipper pads properly?
                        <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Follow manufacturer guidelines for secure installation and maximum efficiency.
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Installation Steps:</b> Clean the surface, align the pads, and secure them.</li>
                                <li><b>Maintenance:</b> Regularly check for wear and tear.</li>
                            </ul>
                            🔗 <a href="https://www.elastomech.in/products/tipper-pads" target="_blank" rel="noopener noreferrer" className="text-blue-700">Tipper Pad Installation Guide</a>
                        </div>
                    )}
                </div>

                <p>For more information, check out these resources:</p>
                <ul>
                    <li>🔗 <a href="https://www.osha.gov/electrical-safety" target="_blank" rel="noopener noreferrer" className="text-blue-700">OSHA Electrical Safety</a></li>
                    <li>🔗 <a href="https://www.cableorganizer.com/articles/cable-management-best-practices.html" target="_blank" rel="noopener noreferrer" className="text-blue-700">Cable Management Best Practices</a></li>
                    <li>🔗 <a href="https://www.hse.gov.uk/electricity/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Workplace Electrical Safety Guidelines</a></li>
                    <li>🔗 <a href="https://www.cableorganizer.com/learning-center/articles/ultimate-guide-cable-management-for-beginners.php" target="_blank" rel="noopener noreferrer" className="text-blue-700">Cable Protector Buying Guide</a></li>
                    <li>🔗 <a href="https://www.nema.org/Standards/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-700">Comparison of Cable Protector Materials</a></li>
                </ul>

                {/* Back to Home Link */}
                <div className="mt-6 text-center">
                    <Link href="/" className="text-yellow-500 font-semibold">Back to Home</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQTP;