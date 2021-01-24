import React from 'react';
import ImageWa from 'public/images/whatsapp.svg';
import ImageFb from 'public/images/facebook.svg';
import ImageTw from 'public/images/twitter.svg';
import ImageIg from 'public/images/instagram.svg';
import ImageLi from 'public/images/linkedin.svg';

export default function Officers({ officers_socialmedia }) {
  return (
    <>
      <div className="w-1/4 p-4">
        <div className="relative mx-auto w-40 h-40 rounded-full bg-white border-8 border-custom-header -bottom-7">
          &nbsp;
        </div>
        <div className="bg-white rounded-md p-2 divide-y-2 divide-custom-header">
          <h1 className="pt-8 text-center font-semibold text-custom-header text-xl">
            JAMES TAYLOR
          </h1>
          <h1 className="text-center text-custom-sun font-semibold uppercase">
            Branch Manager
          </h1>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <ImageWa className={officers_socialmedia} />
            <ImageFb className={officers_socialmedia} />
            <ImageTw className={officers_socialmedia} />
            <ImageIg className={officers_socialmedia} />
            <ImageLi className={officers_socialmedia} />
          </div>
        </div>
      </div>
    </>
  );
}
