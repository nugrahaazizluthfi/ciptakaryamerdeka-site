import React from 'react';
import LogoFooter from 'public/images/logo.svg';

export default function Footer() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-20 text-gray-300">
          <div className="flex justify-start">
            <div className="w-1/4">
              <LogoFooter className="w-28 h-28" />
              <p className="mb-5 mt-5 text-md pr-5">
                Pento Financial Services, Inc. 200 Wood Avenue South, Ninth
                Floor Iselin, NJ 65432
              </p>
              <p className="text-md pr-5">
                Resouece Financial ServicInc. 200 Wood Avenue South
              </p>
            </div>
            <div className="w-1/4">
              <h1 className="text-2xl font-semibold mb-5">Quick Links</h1>
              <ul>
                <li className="mb-2">Mortgage Calculator</li>
                <li className="mb-2">Mortgage Checklist</li>
                <li className="mb-2">Renting vs Owning</li>
                <li className="mb-2">Credit Basics</li>
                <li className="mb-2">Disaster Relief Center</li>
                <li className="mb-2">Disclosure</li>
                <li className="mb-2">Home Disclosure Notice</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h1 className="text-2xl font-semibold mb-5">About Us</h1>
              <ul>
                <li className="mb-2">Down Payment Options</li>
                <li className="mb-2">Your Mortgage Payment</li>
                <li className="mb-2">Appraisal Basics</li>
                <li className="mb-2">Contact</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Privacy Choices</li>
                <li className="mb-2">Licencing</li>
              </ul>
            </div>
            <div className="w-1/4">
              <h1 className="text-2xl font-semibold mb-5">Send Message</h1>
              <div>
                <div>
                  <label>Your name:</label>
                  <input className="border border-white p-2 w-full text-gray-800 text-sm rounded-md"></input>
                </div>
                <div className="mb-2"></div>
                <div>
                  <label>Your email:</label>
                  <input className="border border-white p-2 w-full text-gray-800 text-sm rounded-md"></input>
                </div>
                <div className="mb-2"></div>
                <div>
                  <label>Your email:</label>
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
          <div className="mb-10 mt-10"></div>
          <div className="pb-10 pt-10 text-center">
            &copy; copyright 2021. Cipta Karya Merdeka
          </div>
        </div>
      </div>
    </>
  );
}
