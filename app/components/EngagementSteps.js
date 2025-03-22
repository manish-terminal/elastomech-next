import React from "react";
import { Grid } from "@mui/material";
import { Build, Factory, CheckCircle } from "@mui/icons-material";

const engagementSteps = [
    {
        title: "Consultation & Customization",
        description:
            "We'll schedule an initial consultation to understand your specific needs and requirements for the rubber products.",
        icon: <Build fontSize="large" />,
    },
    {
        title: "Product Development",
        description:
            "Our team will design and develop the rubber products according to your specifications, ensuring quality and precision.",
        icon: <Factory fontSize="large" />,
    },
    {
        title: "Quality Testing & Delivery",
        description:
            "We perform rigorous quality testing on the products and ensure timely delivery, meeting all industry standards.",
        icon: <CheckCircle fontSize="large" />,
    },
];

const EngagementProcess = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 md:px-[80px] lg:px-[120px] max-[800px]:px-[10px] max-[800px]:py-[10px]">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-[45px] font-bold leading-tight text-[#010d14] mb-12 font-playfair">
                    Our Process
                </h2>
                <Grid container spacing={3} justifyContent="center">
                    {engagementSteps.map((step, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <div className="h-full p-6 bg-[#ffd93125] rounded-md shadow-lg border-2 border-[#ffd93125] hover:border-[#ffd107] transition duration-300 ease-in-out">
                                <div className="text-[#ffd107] flex justify-center mb-4 !text-6xl md:!text-7xl">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-center text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default EngagementProcess;
