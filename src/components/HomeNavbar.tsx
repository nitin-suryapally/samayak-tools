'use client'

import { useState } from 'react'
import NavLink from './NavLink'
import CategoryDropdown from './CategoryDropdown'
import MobileMenu from './MobileMenu'
import type { NavItem, Category } from '../types/nav'
import Image from 'next/image'
import { logo } from "@/index"
import { categories } from '@/data'
import { ContactUsButton } from './ContactUsButton'


const navLinks: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Downloads', href: '/downloads' },
]


const HomeNavbar = () => {
    const [isMobileOpen, setMobileOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md  py-4 sm:py-6 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="">
                        <Image src={logo} alt='logo' className='w-[80px] h-[60px] sm:w-[123px] sm:h-[101px]' />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <NavLink key={link.name} item={link} />
                        ))}
                        <CategoryDropdown categories={categories} />
                        {/* <NavLink item={{ name: 'Contact Us', href: '/contact' }} className='' /> */}
                    </div>

                    {/* Clerk User Icon */}
                    {/* <div className="flex items-center gap-4">
                        <UserButton />
                        
                    </div> */}
                    <ContactUsButton />
                    <button
                        className="md:hidden"
                        onClick={() => setMobileOpen(!isMobileOpen)}
                        aria-label="Toggle Mobile Menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>


                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <MobileMenu navLinks={navLinks} categories={categories} />
            )}
        </nav>
    )
}

export default HomeNavbar