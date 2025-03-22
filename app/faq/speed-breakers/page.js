import FAQToggle from "../../components/FAQToggle";
import FAQLayout from "../../components/FAQLayout";

export default function FAQSB() {
    const faqs = [
        {
            question: "What are speed breakers, and why are they important?",
            answer: (
                <div>
                    Speed breakers are traffic calming devices designed to reduce vehicle speed in specific areas. They are crucial for enhancing road safety, especially in residential areas, school zones, and industrial premises. Elastomech's speed breakers are engineered to provide effective speed control while ensuring vehicle safety and durability.
                </div>
            )
        },
        {
            question: "What types of speed breakers does Elastomech offer?",
            answer: (
                <div>
                    Elastomech provides a comprehensive range of speed breakers, including:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Rubber Speed Breakers</li>
                        <li>Plastic Speed Breakers</li>
                        <li>Heavy-Duty Speed Breakers</li>
                        <li>Reflective Speed Breakers</li>
                        <li>Custom Speed Breakers</li>
                    </ul>
                </div>
            )
        },
        {
            question: "What materials are used in Elastomech speed breakers?",
            answer: (
                <div>
                    Our speed breakers are manufactured using high-quality materials:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Premium Rubber Compounds</li>
                        <li>High-Grade Plastic</li>
                        <li>Reflective Materials</li>
                        <li>Anti-Slip Surfaces</li>
                        <li>UV-Resistant Coatings</li>
                    </ul>
                </div>
            )
        },
        {
            question: "How do I choose the right speed breaker for my location?",
            answer: (
                <div>
                    Consider these factors when selecting a speed breaker:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Traffic Volume</li>
                        <li>Vehicle Types</li>
                        <li>Speed Requirements</li>
                        <li>Environmental Conditions</li>
                        <li>Installation Surface</li>
                    </ul>
                </div>
            )
        },
        {
            question: "What are the installation requirements for speed breakers?",
            answer: (
                <div>
                    Proper installation is crucial for effectiveness:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Level Surface Preparation</li>
                        <li>Correct Spacing</li>
                        <li>Proper Anchoring</li>
                        <li>Visibility Markings</li>
                        <li>Regular Maintenance</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <FAQLayout>
            <h1 className="text-3xl font-bold text-black text-center mb-6">Speed Breakers - FAQs</h1>
            
            {faqs.map((faq, index) => (
                <FAQToggle 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </FAQLayout>
    );
} 