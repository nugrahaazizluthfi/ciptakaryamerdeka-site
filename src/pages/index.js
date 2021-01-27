import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../fragments/Header';
import Hero from 'src/fragments/Hero';
import Offers from 'src/fragments/Offers/Index';
import VissionMission from 'src/fragments/VissionMission/Index';
import OurOfficers from 'src/fragments/OurOfficers/Index';
import NewsAndBlog from 'src/fragments/NewsAndBlog/Index';
import Footer from '../fragments/Footer';

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Head>
        <title>Wujudkan Rumah Impanmu dengan Cipta Karya - Offical Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="herosection">
          <Header />
          <Hero />
        </section>
        <section>
          <Offers />
        </section>
        <section className="vissionmissionsection">
          <VissionMission />
        </section>
        <section className="officersection">
          <OurOfficers />
        </section>
        <section className="newsandblogsection">
          <NewsAndBlog />
        </section>
        <section className="footersection">
          <Footer />
        </section>
      </main>
    </>
  );
}
