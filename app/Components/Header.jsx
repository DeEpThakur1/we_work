import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Header = () => {
  return (
    <>
      <header>

        <ul>
          <li>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={38}
                height={38}

              />

            </Link>
          </li>

          <li className="arrow">
            <Image className="arrow"
              src="/arrow.svg"
              alt="arrow"
              width={24}
              height={24}

            />
          </li>
        </ul>
        <MobileMenu />

        <ul className="navRight">

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
            <Link href="#">
              <Image
                src="/mail.svg"
                alt="galary"
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
        </ul>

      </header>
      <div className="hrLine"></div>
    </>
  )
};
