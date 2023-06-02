"use client"
import Link from 'next/link'
import Image from 'next/image'
import menu from '/public/menu.svg'
import close from '/public/close.svg'
import { navLinks } from "../maping"
import React, { useState } from 'react';
// import MobileMenu from '../styles/MobileMenu.module.css'

export default function MobileMenu() {
    const [toggle, setToggle] = useState(false);
    return (
        <>



            {/* <Image
                src={toggle ? close : menu}
                alt='menu'
                width={23}
                height={23}
                onClick={() => setToggle(!toggle)}
                className='header__nav--mobile-menu '
            /> */}


            <Image
                src={toggle ? close : menu}
                alt='menu'
                width={23}
                height={23}
                className='object-contain cursor-pointer header__nav--mobile-menu '
                onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'}  p-6 black-gradient absolute top-[3rem] right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {/* {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title
                                ? "text-white"
                                : "text-secondary"
                                } font-medium cursor-pointer text-[15px]`}
                            // automatic close menubar on click any link
                            onClick={() => {
                                setToggle(!toggle)
                                setActive(link.title)
                            }}
                        >
                            <Link href={`#${link.id}`}>{link.title}
                            </Link>
                        </li>
                    ))} */}
                </ul>
            </div>
        </>
    )
}


{
    {
        {
            {
                {
                    {
                        "deepak thakur"
                    }
                }
            }
        }
    }
}