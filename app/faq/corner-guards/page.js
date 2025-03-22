'use client';

import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FAQCG = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <NavBar />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Corner & Wall Guards - FAQs</h1>

                {/* FAQ 1 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are corner and wall guards, and why are they important?
                        <span className="text-blue-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-blue-100 text-black">
                            Corner and wall guards are protective devices installed on the edges of walls, corners, and other surfaces to prevent damage from impacts, collisions, or abrasions. They are commonly used in industrial, commercial, and residential settings to enhance safety and prolong the lifespan of structures. Learn more at <a href='https://en.wikipedia.org/wiki/Corner_guard' target='_blank' className='text-blue-700'>Wikipedia</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What types of corner and wall guards does Elastomech offer?
                        <span className="text-blue-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-blue-100 text-black">
                            Elastomech offers a wide range of corner and wall guards, including rubber guards, polyurethane guards, and metal guards. These are designed for various applications, such as industrial facilities, warehouses, hospitals, and schools. More details can be found <a href='https://www.elastomech.in/products/corner-guards' className='text-blue-700'>here</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        What materials are used in manufacturing corner and wall guards?
                        <span className="text-blue-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-blue-100 text-black leading-relaxed">
                            Corner and wall guards are typically made from:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Rubber:</span> Offers excellent impact resistance and durability. Ideal for high-traffic areas.</li>
                                <li><span className="font-semibold">Polyurethane:</span> Lightweight, chemical-resistant, and suitable for indoor and outdoor use.</li>
                                <li><span className="font-semibold">Aluminum/Steel:</span> Provides maximum strength and is used in heavy-duty industrial applications.</li>
                            </ul>
                            <p className="mt-2">
                                Read more about rubber types
                                <a
                                    href="https://www.rubbercal.com/sheet-rubber/"
                                    target="_blank"
                                    className="text-blue-700 font-semibold hover:underline"
                                >
                                    here
                                </a>.
                            </p>
                        </div>
                    )}
                </div>

                {/* FAQ 4 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                        How do I choose the right corner and wall guards for my facility?
                        <span className="text-blue-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-blue-100 text-black">
                            Selecting the right guards depends on:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Application:</span> Industrial, commercial, or residential use.</li>
                                <li><span className="font-semibold">Traffic level:</span> High-traffic areas require durable materials like rubber or metal.</li>
                                <li><span className="font-semibold">Environment:</span> For outdoor use, choose weather-resistant materials like polyurethane.</li>
                                <li><span className="font-semibold">Aesthetics:</span> Custom colors and designs are available for branding or visual appeal.</li>
                            </ol>
                            Elastomech offers custom solutions tailored to your needs.
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        How do you install corner and wall guards?
                        <span className="text-blue-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-blue-100 text-black">
                            Installation steps include:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li>Clean the surface where the guard will be installed.</li>
                                <li>Measure and mark the placement of the guard.</li>
                                <li>Use adhesive, screws, or brackets to secure the guard in place.</li>
                                <li>Ensure the guard is firmly attached and aligned properly.</li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        Can corner and wall guards be customized?
                        <span className="text-blue-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-blue-100 text-black">
                            Yes! Elastomech offers customizations such as:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Branding:</b> Add company logos or specific colors.</li>
                                <li><b>Size and shape:</b> Tailored to fit unique spaces or designs.</li>
                                <li><b>Material:</b> Choose from rubber, polyurethane, or metal based on your needs.</li>
                            </ol>
                            <a className='text-blue-700' href="https://elastomech.in/custom-product">Contact us here</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        How often should I replace corner and wall guards?
                        <span className="text-blue-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-blue-100 text-black">
                            The lifespan of guards depends on their material and usage. Inspect them regularly for cracks, wear, or damage. Rubber guards typically last 5-7 years, while polyurethane and metal guards can last longer with proper maintenance.
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        What are the advantages of using rubber corner and wall guards?
                        <span className="text-blue-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-blue-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Impact resistance:</span> Absorbs shocks and prevents damage.</li>
                                <li><span className="font-semibold">Durability:</span> Long-lasting and resistant to wear and tear.</li>
                                <li><span className="font-semibold">Safety:</span> Soft edges reduce the risk of injuries.</li>
                                <li><span className="font-semibold">Eco-friendly:</span> Made from recycled materials.</li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        Why choose Elastomech corner and wall guards?
                        <span className="text-blue-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-blue-100 text-black">
                            Elastomech provides high-quality, durable, and industry-compliant guards that ensure maximum protection and reliability. Our guards are:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li>Tested for impact resistance and durability.</li>
                                <li>Weather-resistant and suitable for indoor and outdoor use.</li>
                                <li>Available in various sizes, materials, and custom designs.</li>
                            </ol>
                            <a
                                href="https://www.elastomech.in/products/corner-guards"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700"
                            >
                                Explore our range of corner and wall guards
                            </a>.
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-blue-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                        Are corner and wall guards legally required?
                        <span className="text-blue-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-blue-100 text-black">
                            In many industries, corner and wall guards are required to comply with safety regulations, such as:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">OSHA:</span> Mandates guards in high-traffic areas to prevent workplace injuries.</li>
                                <li><span className="font-semibold">ADA (Americans with Disabilities Act):</span> Requires guards in public spaces to ensure safety for all individuals.</li>
                                <li><span className="font-semibold">Building codes:</span> Often require guards in schools, hospitals, and commercial buildings.</li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* Back to Home Link */}
                <div className="mt-6 text-center">
                    <Link href="/" className="text-blue-500 font-semibold">Back to Home</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQCG;