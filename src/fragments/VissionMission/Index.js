import React, { useEffect } from 'react';
import Box from './Box';
import dummy from 'src/dummy/vissionmission';

function Index({ data }) {
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
        <div className="flex flex-wrap">
          <Box
            title="Our Vission"
            description={data?.vission ?? dummy?.vission}
          />
          <Box
            title="Our Mission"
            description={data?.mission ?? dummy?.mission}
          />
        </div>
        {/* <div>
          <div className="text-center pt-11">
            <button className="bg-custom-sun rounded-full pl-4 pr-4 p-2 text-white transition-all ease-in hover:bg-custom-header shadow-md uppercase">
              Learn More
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Index;
