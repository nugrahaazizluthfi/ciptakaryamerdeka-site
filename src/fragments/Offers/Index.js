import React from 'react';
import Slider from 'react-slick';
import CardOffers from './CardOffers';
import ImageSavings from 'public/images/coins.svg';
import ImageHierarci from 'public/images/hierarci.svg';
import ImageDollar from 'public/images/dollar.svg';
import ImageHome from 'public/images/home.svg';
import styles from 'styles/offers_card.module.scss';

export default function Offers() {
  var slickSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  const data = [
    {
      title: 'High Balance Mortgage',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageSavings className={styles.card_offers_icon} />,
    },
    {
      title: 'Renovation Loans for Buyer',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageDollar className={styles.card_offers_icon} />,
    },
    {
      title: 'A Conventional Home Loan',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageHierarci className={styles.card_offers_icon} />,
    },
    {
      title: 'Homeready Fannie Mortgage',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageHome className={styles.card_offers_icon} />,
    },
    {
      title: 'High Balance Mortgage',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageSavings className={styles.card_offers_icon} />,
    },
    {
      title: 'Renovation Loans for Buyer',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageDollar className={styles.card_offers_icon} />,
    },
    {
      title: 'A Conventional Home Loan',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageHierarci className={styles.card_offers_icon} />,
    },
    {
      title: 'Homeready Fannie Mortgage',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageHome className={styles.card_offers_icon} />,
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 mb-10">
          <h4 className="text-center text-2xl font-extrabold mt-2 text-custom-header">
            # WHAT'S YOU EXPECT
          </h4>
          <h1 className="text-center text-5xl font-semibold mt-2 text-custom-sun">
            We Have Offer To You
          </h1>
          <p className="text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            diusmod <br /> mlaboret dolore magnad minim veniamquaera
          </p>
        </div>
        <Slider {...slickSettings}>
          {data?.length > 0 &&
            data?.map((item, index) => {
              return (
                <CardOffers
                  key={index}
                  {...styles}
                  title={item.title}
                  description={item.description}
                >
                  {item.image}
                </CardOffers>
              );
            })}
        </Slider>
        <div className="mb-24"></div>
      </div>
    </>
  );
}
