import React from 'react';
import Link from 'next/link';
import Logo from 'public/images/logo.svg';

export default function Navbar() {
  return (
    <>
      <navbar className="mynavbar absolute w-full">
        <div className="container mx-auto items-center flex justify-between">
          <div style={{ height: 54 }}>
            <div className="company_identity pl-2 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
              <Logo></Logo>
            </div>
          </div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/">
                <a>Our Service</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Our Team</a>
              </Link>
            </li> */}
            <li>
              <Link href="/">
                <a>Our Product</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>News</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </navbar>
    </>
  );
}
