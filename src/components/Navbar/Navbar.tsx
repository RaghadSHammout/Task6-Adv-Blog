// src/components/Navbar/Navbar.tsx
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoMoonOutline } from 'react-icons/io5'
import { ImSun } from 'react-icons/im'

interface NavbarProps {
    darkMode: boolean
    onToggleDark: () => void
}

export default function Navbar({ darkMode, onToggleDark }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    const linkClass = (isActive: boolean) =>
        `text-lg transition-colors ${isActive
            ? `font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`
            : darkMode
                ? 'text-gray-300'
                : 'text-gray-700'
        } hover:underline`

    const ToggleButton = (
        <button
            onClick={onToggleDark}
            aria-label="Toggle light/dark mode"
            className={`relative w-16 h-7 flex items-center p-1 rounded-full transition-colors ${darkMode ? 'bg-gray-200' : 'bg-gray-900'}`} >
            <ImSun className="absolute left-1 text-xl text-white" />
            <IoMoonOutline className={`absolute right-1 text-xl ${darkMode ? ' text-gray-900' : 'translate-x-7 text-white'}`}/>
            <div className={`relative z-10 w-6 h-6  rounded-full shadow transform transition-transform ${darkMode ? ' bg-gray-900 ' : 'translate-x-8 bg-white'}`}
            />
        </button>
    )

    const menuItems = [
        { to: '/', label: 'Blog' },
        { to: '/projects', label: 'Projects' },
        { to: '/about', label: 'About' },
        { to: '/newsletter', label: 'Newsletter' },
    ]

    return (
        <nav className={`max-w-7xl mx-auto  fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-screen-2xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                >
                    Your Name
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {menuItems.map(({ to, label }) => (
                        <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => linkClass(isActive)}>
                            {label}
                        </NavLink>
                    ))}
                    {ToggleButton}
                </div>

                <button
                    onClick={() => setMenuOpen(true)}
                    className={`md:hidden focus:outline-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    aria-label="Open menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className={`md:hidden fixed inset-0 flex flex-col justify-center items-center space-y-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                    {menuItems.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === '/'}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => linkClass(isActive)}
                        >
                            {label}
                        </NavLink>
                    ))}
                    {ToggleButton}
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                        className={`mt-8 text-3xl focus:outline-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                        ×
                    </button>
                </div>
            )}
        </nav>
    )
}
