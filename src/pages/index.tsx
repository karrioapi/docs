import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from '../components/navbar';
import HeroBody from '../components/hero-body';
import HeroFooter from '../components/hero-footer';
import IntroSection from '../components/intro-section';
import Footer from '../components/footer';
import clss from '../components/styles';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Navbar />

      <section className={clss("hero is-primary is-fullheight px-0 pb-0")}>
        <HeroBody />

        <HeroFooter />
      </section>

      <IntroSection />

      <Footer />
    </>
  );
}
