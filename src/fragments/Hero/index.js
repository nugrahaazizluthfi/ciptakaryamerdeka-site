import React from 'react';
import ImageHero from 'public/images/bestplace.svg';

export default function Hero() {
  return (
    <>
      <div className="container mx-auto relative overflow-hidden">
        <div className="stars-one"></div>
        <div className="stars-two"></div>
        <div className="stars-three"></div>
        <div className="mainslide flex justify-between">
          <div className="flex responsive-padding">
            <div className="tagline">
              <p className="font-semibold text-white uppercase mb-3 text-4xl lg:text-5xl xl:text-5xl">
                welcome to
              </p>
              <p className="font-semibold text-white uppercase text-5xl lg:text-6xl xl:text-6xl">
                Cipta Karya Merdeka
              </p>
              <p className="text-white mt-6 text-2xl lg:text-3xl xl:text-3xl">
                Create Your{' '}
                <strong className="text-green-400">Dream Home</strong> With Us!
              </p>
              <div style={{ height: '15rem' }}></div>
            </div>
          </div>
          <div className="hero flex">
            <div className="hero-wrapper">
              <ImageHero />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
