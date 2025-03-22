import FAQToggle from "../../components/FAQToggle";
import FAQLayout from "../../components/FAQLayout";

export default function FAQDF() {
    const faqs = [
        {
            question: "What are dock fenders, and why are they important?",
            answer: (
                <div>
                    Dock fenders are protective devices installed on docks, piers, and marine structures to absorb impact from vessels during berthing. They are crucial for:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Protecting vessels from damage</li>
                        <li>Preventing dock structure damage</li>
                        <li>Ensuring safe vessel mooring</li>
                        <li>Reducing maintenance costs</li>
                        <li>Enhancing operational safety</li>
                    </ul>
                </div>
            )
        },
        {
            question: "What types of dock fenders does Elastomech offer?",
            answer: (
                <div>
                    Elastomech provides a comprehensive range of dock fenders:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Rubber Dock Fenders</li>
                        <li>Pneumatic Fenders</li>
                        <li>Foam Filled Fenders</li>
                        <li>Arch Fenders</li>
                        <li>Custom Fender Solutions</li>
                    </ul>
                </div>
            )
        },
        {
            question: "What materials are used in Elastomech dock fenders?",
            answer: (
                <div>
                    Our dock fenders are manufactured using high-quality materials:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Premium Rubber Compounds</li>
                        <li>High-Grade Foam</li>
                        <li>UV-Resistant Materials</li>
                        <li>Marine-Grade Components</li>
                        <li>Anti-Corrosive Coatings</li>
                    </ul>
                </div>
            )
        },
        {
            question: "How do I choose the right dock fender for my facility?",
            answer: (
                <div>
                    Consider these factors when selecting dock fenders:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Vessel Size and Weight</li>
                        <li>Berthing Energy</li>
                        <li>Water Level Variations</li>
                        <li>Environmental Conditions</li>
                        <li>Installation Requirements</li>
                    </ul>
                </div>
            )
        },
        {
            question: "What are the installation requirements for dock fenders?",
            answer: (
                <div>
                    Proper installation is crucial for effectiveness:
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
                        <li>Correct Mounting Height</li>
                        <li>Proper Spacing</li>
                        <li>Secure Fastening</li>
                        <li>Regular Inspection</li>
                        <li>Maintenance Schedule</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <FAQLayout>
            <h1 className="text-3xl font-bold text-black text-center mb-6">Dock Fenders - FAQs</h1>
            
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