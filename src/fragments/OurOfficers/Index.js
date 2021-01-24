import React from 'react';
import Officers from './Officers';
import styles from 'styles/officers.module.scss';

export default function Index() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 mb-10">
          <h4 className="text-center text-2xl font-extrabold mt-2 text-white">
            # OUR TEAM
          </h4>
          <h1 className="text-center text-5xl font-semibold mt-2 text-custom-sun">
            Know More About <br /> Our Team
          </h1>
        </div>
        <div className="flex justify-between">
          <Officers {...styles} />
          <Officers {...styles} />
          <Officers {...styles} />
          <Officers {...styles} />
        </div>
        <div className="mb-20"></div>
      </div>
    </>
  );
}
