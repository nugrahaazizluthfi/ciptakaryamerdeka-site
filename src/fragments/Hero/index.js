import React from 'react';
import ImageHero from 'public/images/bestplace.svg';

export default function Hero() {
  return (
    <>
      <div className="container mx-auto relative overflow-hidden pt-10">
        <div className="stars-one"></div>
        <div className="stars-two"></div>
        <div className="stars-three"></div>
        <div className="mainslide flex justify-between">
          <div className="flex">
            <div className="tagline">
              <p className="font-semibold text-white text-5xl uppercase mb-3">
                welcome to
              </p>
              <p className="font-semibold text-white text-6xl uppercase">
                Cipta Karya Merdeka
              </p>
              <p className="text-white text-3xl mt-6">
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
