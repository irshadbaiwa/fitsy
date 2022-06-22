import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PriceSection from '../components/PriceSection';
import GetStarted from '../components/GetStarted';
import Testimonial from '../components/Testimonial';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitsy | Gym Services and Training Coach</title>
      </Head>
      <HeroSection />
      <main>
        <ServicesSection />
        <PriceSection />
        <GetStarted />
        <Testimonial />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
