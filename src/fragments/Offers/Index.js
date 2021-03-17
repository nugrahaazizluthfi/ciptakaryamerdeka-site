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
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const data = [
    {
      title: 'Renovasi',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageSavings className={styles.card_offers_icon} />,
    },
    {
      title: 'Desain Interior',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageSavings className={styles.card_offers_icon} />,
    },
    {
      title: 'Desain Eksterior',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageDollar className={styles.card_offers_icon} />,
    },
    {
      title: 'Furniture',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageHierarci className={styles.card_offers_icon} />,
    },
    {
      title: 'Macam Produk Alumunium',
      description: 'Migration do amet contur diisci velit suia nonnua',
      image: <ImageHome className={styles.card_offers_icon} />,
    },
    {
      title: 'Pagar',
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
                ></CardOffers>
              );
            })}
        </Slider>
        <div className="mb-24"></div>
      </div>
    </>
  );
}
