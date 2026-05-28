import React from 'react'
import { IoMdHeart } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
const Navbar = () => {
    return (
        <header className='fixed top-0 right-0 left-0'>
            <nav className='flex max-w-350 mx-auto justify-between h-[14vh] px-10 items-center'>
                <a href="/" className='text-3xl font-bold'>
                    Gr<span className='text-orange-500 uppercase'>o</span>sify
                </a>

                <ul className='flex items-center gap-x-5 '>
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
                {/* Nav Action */}
                <div className='flex gap-x-5 items-center'>
                    {/* input field */}
                    <div className='flex  p-1 border-2 border-orange-500 rounded-full items-center'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
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
                </div>
            </nav>
        </header>
    )
}

export default Navbar