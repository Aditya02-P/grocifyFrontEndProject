import React, { use, useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {

    const [nav,setNav]=useState(false);

    return (
        <header className='fixed top-6 md:top-0 right-0 left-0 '>
            <nav className='flex max-w-350 mx-auto justify-between sm:h-[12vh] md:h-[14vh] px-10 items-center'>
                <a href="/" className='text-3xl font-bold'>
                    Gr<span className='text-orange-500 uppercase'>o</span>sify
                </a>

                {/* Desktop Menu */}

                <ul className='hidden md:flex items-center gap-x-5 '>
                    <li>
                        <a
                            href="/"
                            className='font-semibold tracking-wider text-orange-400 hover:text-orange-500'
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="/about"
                            className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="/process"
                            className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
                        >
                            Process
                        </a>
                    </li>

                    <li>
                        <a
                            href="/contact"
                            className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
                        >
                            Contact Us
                        </a>
                    </li>

                </ul>

                {/* Mobile Nav */}
                <ul className={` md:hidden
                    flex items-center flex-col
                    gap-x-5 gap-y-12
                    absolute top-30 left-1/2
                    bg-orange-500/50 backdrop-blur-xl
                    rounded-xl p-10
                    transition-all duration-300 ease-in-out
                    ${nav ? '-translate-x-1/2 opacity-100' : 'translate-x-[-150%] opacity-0'} `}>
                    <li>
                        <a
                            href="/"
                            className='font-semibold tracking-wider text-zinc-900 hover:text-orange-500'
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="/about"
                            className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="/process"
                            className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
                        >
                            Process
                        </a>
                    </li>

                    <li>
                        <a
                            href="/contact"
                            className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'
                        >
                            Contact Us
                        </a>
                    </li>

                   <li className='flex md:hidden  p-1 border-2 border-orange-500 rounded-full items-center'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-linear-to-b from-red-600 to bg-orange-500 text-white w-10 h-10 rounded-full text-xl flex items-center justify-center'>
                            <IoSearchSharp />
                        </button>
                    </li>

                </ul>

                {/* Nav Action */}
                <div className='flex gap-x-5 items-center'>
                    {/* input field */}
                    <div className='hidden md:flex  p-1 border-2 border-orange-500 rounded-full items-center'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-linear-to-b from-red-600 to bg-orange-500 text-white w-10 h-10 rounded-full text-xl flex items-center justify-center'>
                            <IoSearchSharp />
                        </button>
                    </div>
                    <a href="" className='text-zinc-800 text-2xl'>
                        <IoMdHeart />
                    </a>
                    <a href="" className='text-zinc-800 text-2xl'>
                        <IoBagHandle />
                    </a>
                    {/* Menu */}
                    <a href="#" className='text-3xl text-zinc-800 md:hidden' onClick={()=>setNav(!nav)}>
                        
                        {
                            nav?<RxCross1 />:<GiHamburgerMenu />
                        }
                        
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar