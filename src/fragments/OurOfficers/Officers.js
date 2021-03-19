import React from 'react';
import ImageWa from 'public/images/whatsapp.svg';
import ImageFb from 'public/images/facebook.svg';
import ImageTw from 'public/images/twitter.svg';
import ImageIg from 'public/images/instagram.svg';
import ImageLi from 'public/images/linkedin.svg';
import Link from 'next/link';

export default function Officers({
  officers_socialmedia,
  peopleName,
  position,
  whatsapp_number,
  facebook_address,
  twitter_address,
  instagram_address,
  linkedin_address,
  avatar,
}) {
  return (
    <>
      <div className="relative mx-auto w-40 h-40 rounded-full bg-white border-8 border-custom-header -bottom-7 overflow-hidden">
        <img
          className="object-center object-cover items-center"
          src={`${avatar}`}
          alt={`${peopleName ?? 'Zulkarnain'}`}
        />
      </div>
      <div className="bg-white rounded-md p-2 divide-y-2 divide-custom-header">
        <h1 className="pt-8 text-center font-semibold text-custom-header text-xl">
          {`${peopleName ?? 'Zulkarnain'}`}
        </h1>
        <h1 className="text-center text-custom-sun font-semibold uppercase">
          {`${position ?? 'Branch Manager'}`}
        </h1>
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <Link
            href={`https://api.whatsapp.com/send?phone=${
              whatsapp_number ?? '#'
            }&text=Halo,%20%Selamat20siang%20pak...`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <a>
              <ImageWa className={officers_socialmedia} />
            </a>
          </Link>
          <Link
            href={`${facebook_address ?? '#'}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <a>
              <ImageFb className={officers_socialmedia} />
            </a>
          </Link>
          <Link
            href={`${twitter_address ?? '#'}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <a>
              <ImageTw className={officers_socialmedia} />
            </a>
          </Link>
          <Link
            href={`${instagram_address ?? '#'}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <a>
              <ImageIg className={officers_socialmedia} />
            </a>
          </Link>
          <Link
            href={`${linkedin_address ?? '#'}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <a>
              <ImageLi className={officers_socialmedia} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
