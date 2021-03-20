import React from 'react';
import Link from 'next/link';
import Logo from 'public/images/logo.svg';

export default function Navbar() {
  return (
    <>
      <navbar className="mynavbar absolute w-full">
        <div className="container mx-auto items-center flex justify-between">
          <div style={{ height: 54 }}>
            <div className="company_identity pl-0 pr-20 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0">
              <Logo className="relative left-0 xl:left-5"></Logo>
              <span className="text-white font-bold text-xs md:text-lg lg:text-lg relative top-1 left-4 xl:left-6">
                PT. CIPTA KARYA MERDEKA
              </span>
            </div>
          </div>
          <ul className="float-right">
            <li>
              <Link href="/">
                <a className="p-1 pl-2 pr-2">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="p-1 pl-2 pr-2">Our Product</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a className="p-1 pl-2 pr-2">Our Works</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a className="p-1 pl-2 pr-2">News</a>
              </Link>
            </li>
          </ul>
        </div>
      </navbar>
    </>
  );
}
