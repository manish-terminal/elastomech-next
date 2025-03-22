'use client';

import { useState } from 'react';

const FAQToggle = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-yellow-500 rounded-lg overflow-hidden shadow-md mb-4">
            <button 
                className="w-full text-left p-4 bg-black text-white font-semibold flex justify-between items-center" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className="text-yellow-500">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
                <div className="p-4 bg-yellow-100 text-black">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default FAQToggle; 