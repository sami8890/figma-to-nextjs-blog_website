"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Community", path: "/community" },
        { name: "Blog", path: "/blog" },
        { name: "Pricing", path: "/pricing" },
    ];

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    }, [isMobileMenuOpen]);

    return (
        <nav className="flex justify-between items-center px-14 py-7">
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <svg
                        className="w-8 h-8 mr-3 animate-bounce"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="10" stroke="green" strokeWidth="4" />
                    </svg>
                    <h1 className="text-4xl font-serif">Nexcent</h1>
                </div>
            </Link>

            {/* Desktop Navbar */}
            <ul className="hidden md:flex gap-3 items-center capitalize font-medium">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className="hover:text-green-500 transition duration-300 rounded-md"
                    >
                        <Link
                            href={item.path}
                            className="px-4 py-2 block font-bold" // Added font-bold here
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
                {/* Get Started Button */}
                <li>
                    <button className="flex flex-row gap-2 justify-center items-center bg-green-500 h-[7vh] w-[10vw] rounded-lg text-white hover:bg-green-600">
                        <span className="text-lg">Get started</span>
                        <span className="text-lg">→</span>
                    </button>
                </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden lg:hidden flex flex-col">
                <button
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    className="flex items-center justify-center focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute flex flex-col justify-center items-center text-4xl gap-7 top-20 right-0 shadow-md backdrop-blur-2xl bg-accent text-black p-4 z-10 w-screen h-screen md:hidden transition-all duration-300">
                    <ul className="flex flex-col gap-10 capitalize font-medium">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-sans" 
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
