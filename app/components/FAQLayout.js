'use client';

import NavBar from "./Navbar";
import Footer from "./Footer";
import BackToHomeLink from "./BackToHomeLink";

export default function FAQLayout({ children }) {
    return (
        <div className="bg-white min-h-screen">
            <NavBar />
            <div className="max-w-3xl mx-auto">
                {children}
                <BackToHomeLink />
            </div>
            <Footer />
        </div>
    );
} 