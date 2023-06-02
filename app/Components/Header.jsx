import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Header = () => {
  return (
    <>
      <header className="header__nav">

        <ul className="header__nav--logo">
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

          <li className="header__nav--logo--arrow">
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={24}
              height={24}

            />
          </li>
        </ul>

        <MobileMenu />
        <ul className="header__nav--icons">

          < li>

            <div className="searchBox ">





              <Link href="#" className="searchBtn" >
                <Image
                  src="/search.svg"
                  alt="search bar"
                  width={23.5}
                  height={23.5}
                  className="header__nav--icons--search searchIcon"
                />


              </Link>
            </div>



            <Link href="#">
              <Image
                src="/mail.svg"
                alt="galary"
                width={30}
                height={30}
                className="header__nav--icons--mail "
              />
            </Link>

            <Link href="#">
              <Image
                src="/notification.svg"
                alt="notification"
                width={33}
                height={32}
                className="header__nav--icons--notification "
              />
            </Link>

            <Link href="#">
              <Image src="/question-mark.svg"
                alt="question"
                width={30}
                height={30}
                className="header__nav--icons--question "
              />
            </Link>

            <Link href="#">
              <Image src="/profile.svg"
                alt="profile"
                width={45}
                height={45}
                className="header__nav--icons--profile "
              />
            </Link>

          </li>
        </ul>

      </header>
      <div className="header__nav--hr-line"></div>
    </>
  )
};
