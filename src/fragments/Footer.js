import React from 'react';
import LogoFooter from 'public/images/logo.svg';
import Link from 'next/link';
import news from 'src/dummy/news';

export default function Footer({
  company_address,
  company_number,
  company_email,
  quicklinks,
}) {
  console.log(quicklinks);
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-20 text-gray-300">
          <div className="flex flex-wrap">
            <div className="responsive-card footer-padding mb-5">
              <LogoFooter className="w-28 h-28" />
              <p className="mb-5 mt-5 text-md pr-5">
                {company_address ??
                  `Pento Financial Services, Inc. 200 Wood Avenue South, Ninth
                Floor Iselin, NJ 65432`}
              </p>
              <p>
                <span style={{ fontSize: '13px' }}>Phone</span>
                <br /> <strong>{`${company_number ?? '2992888'}`}</strong>
              </p>
              <p>
                <span style={{ fontSize: '13px' }}>Email</span>
                <br />{' '}
                <strong>{`${
                  company_email ?? 'mail@ciptakaryamerdeka20.com'
                }`}</strong>
              </p>
            </div>
            <div className="responsive-card footer-padding  mb-5">
              <h1 className="text-2xl font-semibold mb-5">Quick Links</h1>
              <ul>
                {news?.length > 0 ? (
                  news.map((row, index) => {
                    return (
                      <li className="mb-2 hover:text-yellow-300">
                        <Link href={`/news/${row.slug}`}>
                          <a>{`${row.content_title ?? 'No Link'}`}</a>
                        </Link>
                      </li>
                    );
                  })
                ) : (
                  <>
                    <li className="mb-2">Mortgage Calculator</li>
                    <li className="mb-2">Mortgage Checklist</li>
                    <li className="mb-2">Renting vs Owning</li>
                    <li className="mb-2">Credit Basics</li>
                    <li className="mb-2">Disaster Relief Center</li>
                    <li className="mb-2">Disclosure</li>
                    <li className="mb-2">Home Disclosure Notice</li>
                  </>
                )}
              </ul>
            </div>
            <div className="responsive-card footer-padding mb-5">
              <h1 className="text-2xl font-semibold mb-5">About Us</h1>
              <ul>
                <li className="mb-2">Contact</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Privacy Choices</li>
                <li className="mb-2">Licencing</li>
              </ul>
            </div>
            <div className="responsive-card footer-padding mb-5">
              <h1 className="text-2xl font-semibold mb-5">Send Message</h1>
              <div>
                <div>
                  <label>Your Name</label>
                  <input className="border border-white p-2 w-full text-gray-800 text-sm rounded-md"></input>
                </div>
                <div className="mb-2"></div>
                <div>
                  <label>Your Email</label>
                  <input className="border border-white p-2 w-full text-gray-800 text-sm rounded-md"></input>
                </div>
                <div className="mb-2"></div>
                <div>
                  <label>Your Message</label>
                  <textarea className="border border-white p-2 w-full text-gray-800 text-sm rounded-md"></textarea>
                </div>
                <div className="mb-2"></div>
                <div>
                  <button className="float-right bg-gradient-to-r from-custom-sun via-yellow-500 to-yellow-500 p-2 rounded-md text-custom-header font-semibold">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-10 pt-10 text-center">
            &copy; copyright 2021. Cipta Karya Merdeka
          </div>
        </div>
      </div>
    </>
  );
}
