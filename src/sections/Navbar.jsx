import React, { useState } from 'react'
import menu from '/assets/menu.svg'
import close from '/assets/close.svg'
import { navLinks } from '../constants'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const NavItems = (isOpen) => {
        return (isOpen ?
            (<ul className='nav-ul'>
                {navLinks.map(
                    ({ id, href, name }) => (
                        <a key={id} href={href} className='nav-li_a'>
                            <li key={id} className='nav-li'>
                                {name}
                            </li>
                        </a>
                    )
                )}
            </ul>) : (<ul className='nav-ul'>
                {navLinks.map(
                    ({ id, href, name }) => (
                        <li key={id} className='nav-li'>
                            <a href={href} className='nav-li_a'>{name}</a>
                        </li>
                    )
                )}
            </ul>)
        )
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/50'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Shravan Chandrachud
                    </a>

                    <button onClick={toggleMenu} className='text-neutral-400 p-3 focus:outline-none flex sm:hidden' aria-label='Toggle Menu'>
                        <img src={isOpen ? close : menu} alt='toggle' className='w-6 h-6' />
                    </button>

                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? `max-h-screen` : `max-h-0`}`}>
                <nav className='p-5'>
                    <NavItems isOpen />
                </nav>
            </div>
        </header>
    )
}

export default Navbar