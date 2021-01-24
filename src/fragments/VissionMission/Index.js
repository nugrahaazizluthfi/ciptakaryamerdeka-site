import React from 'react';
import Box from './Box';

export default function Index() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 mb-10">
          <h4 className="text-center text-2xl font-extrabold mt-2 text-custom-header">
            # ABOUT US
          </h4>
          <h1 className="text-center text-5xl font-semibold mt-2 text-custom-sun">
            We Are Fully Dedicated <br /> To Support You
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Box
              title="Our Vission"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo
                            cum! Tenetur totam ipsum iure? Magnam, quisquam. Perspiciatis, at
                            placeat quae in, deleniti consequatur, sed ullam earum animi
                            officiis esse?"
            />
          </div>
          <div className="flex items-center">
            <Box
              title="Our Mission"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quo
                            cum! Tenetur totam ipsum iure? Magnam, quisquam. Perspiciatis, at
                            placeat quae in, deleniti consequatur, sed ullam earum animi
                            officiis esse?"
            />
          </div>
        </div>
        <div>
          <div className="text-center pt-11">
            <button className="bg-custom-sun rounded-full pl-4 pr-4 p-2 text-white transition-all ease-in hover:bg-custom-header shadow-md uppercase">
              Learn More
            </button>
          </div>
        </div>
        <div className="mb-24"></div>
      </div>
    </>
  );
}
