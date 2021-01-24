import React, { Children } from 'react';

export default function CardOffers({
  card_wrapper,
  card_offers,
  card_offers_maintitle,
  card_offers_text,
  card_offers_link,
  image,
  title,
  description,
  link = '/',
  children,
}) {
  return (
    <>
      <div className={card_wrapper}>
        <div className={card_offers}>
          {children}
          <div>
            <h1 className={card_offers_maintitle}>{title}</h1>
            <p className={card_offers_text}>{description}</p>
            <p className={card_offers_link}>Read More...</p>
          </div>
        </div>
      </div>
    </>
  );
}
