'use client';

import Link from "next/link";

export default function BackToHomeLink() {
    return (
        <div className="mt-6 text-center">
            <Link href="/" className="text-yellow-500 font-semibold">
                Back to Home
            </Link>
        </div>
    );
} 