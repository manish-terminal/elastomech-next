'use client';

import { useState } from "react";
import FAQToggle from "../../components/FAQToggle";
import FAQLayout from "../../components/FAQLayout";
import Script from 'next/script';

const FAQRS = () => {
    const faqs = [
        {
            question: "What are rubber stoppers, and what are they used for?",
            answer: (
                <div>
                    Rubber stoppers are versatile components used to seal, dampen vibrations, and protect surfaces from damage. They are commonly used in:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Industrial Applications:</b> Sealing pipes, machinery, and equipment.</li>
                        <li><b>Automotive:</b> Vibration damping and noise reduction.</li>
                        <li><b>Household:</b> Furniture protection and anti-slip solutions.</li>
                    </ul>
                    🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Learn More About Rubber Stoppers</a>
                </div>
            )
        },
        {
            question: "What materials are used in rubber stoppers?",
            answer: (
                <div>
                    Rubber stoppers are typically made from high-quality materials such as:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Natural Rubber:</b> Flexible and durable for general use.</li>
                        <li><b>Synthetic Rubber:</b> Resistant to chemicals and extreme temperatures.</li>
                        <li><b>Silicone:</b> Ideal for high-temperature applications.</li>
                    </ul>
                    🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Explore Rubber Stopper Materials</a>
                </div>
            )
        },
        {
            question: "What are the benefits of using rubber stoppers?",
            answer: (
                <div>
                    Rubber stoppers offer several advantages:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Vibration Damping:</b> Reduces noise and wear in machinery.</li>
                        <li><b>Shock Absorption:</b> Protects surfaces from impact damage.</li>
                        <li><b>Sealing:</b> Prevents leaks and contamination.</li>
                        <li><b>Durability:</b> Long-lasting and resistant to wear.</li>
                    </ul>
                    🔗 <a href="https://www.labdepotinc.com/articles/rubber-stopper-size-guide.html" target="_blank" rel="noopener noreferrer" className="text-blue-700">Benefits of Rubber Stoppers</a>
                </div>
            )
        },
        {
            question: "What are the different types of rubber stoppers?",
            answer: (
                <div>
                    Elastomech offers a variety of rubber stoppers, including:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Solid Rubber Stoppers:</b> For heavy-duty applications.</li>
                        <li><b>Hollow Rubber Stoppers:</b> Lightweight and flexible.</li>
                        <li><b>Custom-Molded Stoppers:</b> Designed for specific needs.</li>
                    </ul>
                    🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Explore Rubber Stopper Types</a>
                </div>
            )
        },
        {
            question: "How do I choose the right rubber stopper for my application?",
            answer: (
                <div>
                    Consider the following factors:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Application:</b> Industrial, automotive, or household.</li>
                        <li><b>Material:</b> Natural rubber, synthetic rubber, or silicone.</li>
                        <li><b>Size and Shape:</b> Ensure it fits your requirements.</li>
                        <li><b>Load Capacity:</b> Choose based on the weight and pressure.</li>
                    </ul>
                    🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Choosing the Right Rubber Stopper</a>
                </div>
            )
        },
        {
            question: "Can rubber stoppers be used in high-temperature environments?",
            answer: (
                <div>
                    Yes, certain rubber stoppers, such as those made from silicone, are designed for high-temperature environments.
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Silicone Stoppers:</b> Withstand temperatures up to 250°C.</li>
                        <li><b>Heat-Resistant Rubber:</b> Ideal for industrial applications.</li>
                    </ul>
                    🔗 <a href="https://www.rubberandseal.com/rubber-stoppers-types/#:~:text=This%20article%20explores%20the%20different%20types%20of%20rubber,as%20test%20tubes%2C%20flasks%2C%20and%20other%20laboratory%20glassware." target="_blank" rel="noopener noreferrer" className="text-blue-700">High-Temperature Rubber Stoppers</a>
                </div>
            )
        },
        {
            question: "How do I install rubber stoppers?",
            answer: (
                <div>
                    Installation is simple:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Clean the surface where the stopper will be placed.</li>
                        <li>Press the stopper firmly into place.</li>
                        <li>Ensure it is securely fitted and aligned.</li>
                    </ul>
                    🔗 <a href="https://www.elastomech.in/products/rubber-stoppers" target="_blank" rel="noopener noreferrer" className="text-blue-700">Rubber Stopper Installation Guide</a>
                </div>
            )
        },
        {
            question: "Are rubber stoppers resistant to chemicals?",
            answer: (
                <div>
                    Yes, synthetic rubber stoppers are highly resistant to chemicals and oils.
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Nitrile Rubber:</b> Resistant to oils and fuels.</li>
                        <li><b>EPDM Rubber:</b> Resistant to acids and alkalis.</li>
                    </ul>
                    🔗 <a href="https://mykin.com/rubber-chemical-resistance-chart" target="_blank" rel="noopener noreferrer" className="text-blue-700">Chemical Resistance of Rubber</a>
                </div>
            )
        },
        {
            question: "Can rubber stoppers be customized?",
            answer: (
                <div>
                    Yes, Elastomech offers custom rubber stoppers tailored to your specific requirements.
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li><b>Custom Shapes:</b> Designed to fit unique applications.</li>
                        <li><b>Custom Sizes:</b> Available in various dimensions.</li>
                    </ul>
                    🔗 <a href="https://www.elastomech.in/custom-product/" target="_blank" rel="noopener noreferrer" className="text-blue-700">Custom Rubber Stoppers</a>
                </div>
            )
        },
        {
            question: "Where can I buy Elastomech rubber stoppers?",
            answer: (
                <div>
                    Mail us <a href="mailto:sales.elastomech@gmail.com" className="text-blue-700">sales.elastomech@gmail.com</a> or call to <a href="tel:+91 90753 58795" className="text-blue-700">+91 90753 58795</a>.
                </div>
            )
        }
    ];

    // Helper function to extract text content from React elements
    const extractTextContent = (element) => {
        if (typeof element === 'string') return element;
        if (!element || !element.props) return '';
        
        const children = element.props.children;
        if (Array.isArray(children)) {
            return children.map(child => extractTextContent(child)).join(' ');
        }
        return extractTextContent(children);
    };

    // Create FAQ schema for structured data
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": extractTextContent(faq.answer)
            }
        }))
    };

    return (
        <FAQLayout>
            {/* Add structured data */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Main content */}
            <article className="max-w-3xl mx-auto px-4">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-black text-center mb-4">Rubber Stoppers - Frequently Asked Questions</h1>
                    <p className="text-gray-600 text-center">
                        Find answers to common questions about rubber stoppers, their applications, materials, and maintenance.
                    </p>
                </header>

                <section aria-label="FAQ List" className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQToggle 
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </section>

                <footer className="mt-8 text-center text-gray-600">
                    <p>
                        Still have questions? Contact us at{' '}
                        <a href="mailto:sales.elastomech@gmail.com" className="text-blue-700 hover:underline">
                            sales.elastomech@gmail.com
                        </a>
                    </p>
                </footer>
            </article>
        </FAQLayout>
    );
};

export default FAQRS; 