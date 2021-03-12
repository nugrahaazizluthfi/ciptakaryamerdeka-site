import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../fragments/Header';
import Hero from 'src/fragments/Hero';
import Offers from 'src/fragments/Offers/Index';
import VissionMission from 'src/fragments/VissionMission/Index';
import OurOfficers from 'src/fragments/OurOfficers/Index';
import NewsAndBlog from 'src/fragments/NewsAndBlog/Index';
import Footer from '../fragments/Footer';

import api from 'src/constants/api';

function Home({ vissionmission, ourteams, articles, profile }) {
  useEffect(async () => {
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
          <VissionMission data={vissionmission} />
        </section>
        <section className="officersection">
          <OurOfficers data={ourteams} />
        </section>
        <section className="newsandblogsection">
          <NewsAndBlog data={articles} />
        </section>
        <section className="footersection">
          <Footer data={profile} quicklinks={articles} />
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const vissionmission = await api.vissionmission();
    const ourteams = await api.ourteams();
    const articles = await api.articles();
    const profile = await api.profile();

    return { vissionmission, ourteams, articles, profile };
  } catch (error) {}
};

export default Home;
