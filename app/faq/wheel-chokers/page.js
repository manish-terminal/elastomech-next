'use client';

import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FAQWC = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <NavBar />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-black text-center mb-6">Wheel Chockers - FAQs</h1>

                {/* FAQ 1 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(0)}>
                        What are wheel chockers, and why are they important?
                        <span className="text-yellow-500">{openIndex === 0 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 0 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Wheel chockers are sturdy blocks designed to prevent vehicles, trailers, or heavy machinery from rolling or moving unintentionally. They are commonly made from rubber, polyurethane, or metal and placed against the wheels to provide stability and safety. Wheel chockers are essential in industries like logistics, aviation, construction, and mining, where vehicles need to remain stationary during loading, unloading, or maintenance. Learn more at <a href='https://en.wikipedia.org/wiki/Wheel_chock' target='_blank' className='text-blue-700'>Wikipedia</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 2 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                        What types of wheel chockers does Elastomech offer?
                        <span className="text-yellow-500">{openIndex === 1 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 1 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech provides a wide range of wheel chockers, including rubber wheel chockers, custom wheel chockers, and rubber chockers for added protection. More details can be found <a href='https://www.elastomech.in/products/wheel-chokers' className='text-blue-700'>here</a>.
                        </div>
                    )}
                </div>

                {/* FAQ 3 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                        What materials are used in manufacturing wheel chockers?
                        <span className="text-yellow-500">{openIndex === 2 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 2 && (
                        <div className="p-4 bg-yellow-100 text-black leading-relaxed">
                            Wheel chockers are typically made from:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Rubber:</span> Offers excellent grip, durability, and resistance to wear and tear. Ideal for light to heavy-duty vehicles.</li>
                                <li><span className="font-semibold">Polyurethane:</span>Lightweight and resistant to chemicals, oil, and UV exposure. Commonly used in aviation and industrial applications.</li>
                                <li><span className="font-semibold">Aluminum/Steel:</span> Provides extreme durability and strength, used for heavy machinery and military vehicles.</li>
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
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                        How do I choose the right wheel chockers for my facility?
                        <span className="text-yellow-500">{openIndex === 3 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 3 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Selecting the right wheel chockers depends on multiple factors, including:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">Vehicle weight:</span>Heavier vehicles require stronger, larger chockers.</li>
                                <li><span className="font-semibold">Tire size:</span> Ensure the chocker is taller than 1/4th of the tire height for effective stopping power.</li>
                                <li><span className="font-semibold">Surface type:</span>  For gravel, dirt, or uneven surfaces, chockers with aggressive treads or grips are ideal.</li>
                                <li><span className="font-semibold">Weather resistance:</span> If exposed to extreme temperatures or chemicals, opt for materials like polyurethane.</li>
                            </ol>
                            Elastomech offers custom wheel chockers tailored to your needs.
                        </div>
                    )}
                </div>

                {/* FAQ 5 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                        How do you properly use wheel chockers?
                        <span className="text-yellow-500">{openIndex === 4 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 4 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li>Place the chockers firmly against the tire, ensuring they are positioned downhill if on a slope.</li>
                                <li>For vehicles with dual tires, use chockers on both sides for better security.</li>
                                <li>Ensure the surface is stable to avoid slipping.</li>
                                <li>Remove the chockers only after the vehicle is securely braked and ready to move.</li>
                            </ol>
                            Elastomech offers custom wheel chockers tailored to your needs.
                        </div>
                    )}
                </div>

                {/* FAQ 6 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                        Can wheel chockers be customized?
                        <span className="text-yellow-500">{openIndex === 5 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 5 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes! Many manufacturers offer customizations such as:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><b>Company logos or branding</b> for corporate identity.</li>
                                <li><b>Reflective strips</b>for visibility in low-light conditions.</li>
                                <li><b>Size and material variations</b> to suit specific vehicles and environments.</li>
                            </ol>
                            <a className='text-blue-700' href="https://elastomech.in/custom-product">Contact us here</a>
                        </div>
                    )}
                </div>

                {/* FAQ 7 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(6)}>
                        How often should I replace wheel chockers?
                        <span className="text-yellow-500">{openIndex === 6 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 6 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            The lifespan of wheel chockers depends on their usage and material. Inspect them regularly for cracks, excessive wear, or damage. Generally, rubber chockers last 3-5 years, while polyurethane and metal chockers have longer lifespans if maintained properly.
                        </div>
                    )}
                </div>

                {/* FAQ 8 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(7)}>
                        What are the advantages of using rubber wheel chockers?
                        <span className="text-yellow-500">{openIndex === 7 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 7 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">High durability:</span> Resistant to wear and tear.</li>
                                <li><span className="font-semibold">Non-slip grip:</span> Provides superior traction on all surfaces.</li>
                                <li><span className="font-semibold">Weather resistance:</span>  Works well in extreme temperatures and outdoor conditions.</li>
                                <li><span className="font-semibold">Eco-friendly options:</span> Made from recycled rubber materials.</li>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 9 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(8)}>
                        Why choose Elastomech wheel chockers?
                        <span className="text-yellow-500">{openIndex === 8 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 8 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Elastomech provides high-quality, durable, and industry-compliant wheel chockers that ensure maximum safety and reliability. Our chockers are:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li>Tested for high impact and load-bearing capabilities.</li>
                                <li>Weather-resistant and long-lasting.</li>
                                <li>Available in various sizes and materials to meet industry standards.</li>
                                We offer custom solutions, expert support, and competitive pricing for <b>Aircrafts</b>.
                                <a
                                href="https://www.elastomech.in/products/wheel-chokers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700"
                            >
                                best wheel chockers at Elastomech
                            </a>
                            </ol>
                        </div>
                    )}
                </div>

                {/* FAQ 10 */}
                <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
                    <button className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" onClick={() => toggleFAQ(9)}>
                    Are wheel chockers legally required?
                        <span className="text-yellow-500">{openIndex === 9 ? "-" : "+"}</span>
                    </button>
                    {openIndex === 9 && (
                        <div className="p-4 bg-yellow-100 text-black">
                            Yes, in many industries and countries, wheel chockers are legally mandated for safety compliance. For example:
                            <ol className="list-decimal pl-6 mt-2 space-y-1 text-gray-800">
                                <li><span className="font-semibold">OSHA (Occupational Safety and Health Administration):</span> Requires wheel chockers for trucks and trailers in loading docks.</li>
                                <li><span className="font-semibold">FAA (Federal Aviation Administration):</span> Mandates wheel chockers for aircraft parked on ramps.</li>
                                <li><span className="font-semibold">Mining and construction regulations:</span>  Often require heavy-duty chockers to prevent workplace accidents.</li>
                            </ol>
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

export default FAQWC;