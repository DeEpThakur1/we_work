"use client"
import Link from 'next/link'
import Image from 'next/image'
import menu from '/public/menu.svg'
import close from '/public/close.svg'
// import { navLinks } from "../mapping/"
import React, { useState } from 'react';
// import MobileMenu from '../styles/MobileMenu.module.css'

export default function MobileMenu() {
    const [toggle, setToggle] = useState(false);
    return (
        <>

            {/* <ul className="mobileMenu">

                <li className="searchBox">
                    <input type="text" className="searchText">
                    </input>
                    <Link href="#" className="searchBtn">
                        <Image className="searchIcon"
                            src="/search.svg"
                            alt="search bar"
                            width={23.5}
                            height={23.5}
                        />
                    </Link>
                </li>
                <li className="navIcon">
                    <img src="/menu burg.svg" alt="" />
                    <Link href="#">
                        <Image
                            src="/mail.svg"
                            alt="Galary"
                            width={30}
                            height={30}
                            className="mail"
                        />
                    </Link>

                    <Link href="#">
                        <Image
                            src="/notification.svg"
                            alt="notification"
                            width={33}
                            height={32}
                            className="notification"
                        />
                    </Link>

                    <Link href="#">
                        <Image src="/question-mark.svg"
                            alt="question"
                            width={30}
                            height={30}
                            className="question"
                        />
                    </Link>

                    <Link href="#">
                        <Image src="/profile.svg"
                            alt="profile"
                            width={45}
                            height={45}
                            className="profile"
                        />
                    </Link>

                </li>
            </ul> */}




            <Image
                src={toggle ? close : menu}
                alt='menu'
                width={23}
                height={23}
                onClick={() => setToggle(!toggle)}
                className='mobileMenu'
            />
            {/* className='mobileMenuContainer' */}
            {/*  `${!toggle ? $hidden : $flex}` */}
            {/* <div >     <ul>
                {navLinks.map((link) => (

                    <li
                        key={link.id}
                        // className={`${active === link.title
                        //     ? "text-white"
                        //     : "text-secondary"
                        //     } font-medium cursor-pointer text-[15px]`}
                        // automatic close menubar on click any link
                        onClick={() => {
                            setToggle(!toggle)
                            setActive(link.title)
                        }}
                    >
                        <Link href={`#${link.id}`}>
                            <Image
                                src={link.icon}
                                alt={link.title}
                                width={23}
                                height={23}
                            />
                        </Link>
                    </li>
                ))}

            </ul >
            </div > */}



        </>
    )
}
