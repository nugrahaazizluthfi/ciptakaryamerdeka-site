import React from 'react';
import Link from 'next/link';
import Logo from 'public/images/logo.svg';

export default function Navbar() {
  return (
    <>
      <navbar className="mynavbar absolute w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div style={{ height: 54 }}>
            <div className="company_identity">
              <Logo></Logo>
            </div>
          </div>
          <ul className="flex items-center">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Our Service</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Our Team</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </navbar>
    </>
  );
}
