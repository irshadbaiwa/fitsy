import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Header from './Header';

export default function HeroSection() {
  return (
    <div className="hero-section h-screen w-full relative flex flex-col justify-center">
      <header className="fixed w-full top-0 z-50">
        <Header />
      </header>
      <section className="mt-14 lg:mt-0">
        <div className="m-4 lg:m-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <div className="intro m-2 lg:m-4 text-center md:text-left overflow-hidden">
            <h1
              className="text-3xl md:text-6xl text-primary font-black"
              style={{
                textShadow: `0 10px 15px rgb(224 242 254 / 0.2), 0 4px 6px rgb(224 242 254 / 0.2)`,
              }}
            >
              Stay Fit. Stay Healthy.
            </h1>
            <p className="mt-2 lg:mt-4 font-bold text-content text-lg md:text-3xl">
              Gain fitness by training with the greatest personal trainers you
              could find.
            </p>
            <Fade bottom duration={1200}>
              <div className="mt-2 lg:mt-4 flex flex-row justify-center md:justify-start">
                <a
                  href="#join"
                  className="mr-2 md:mr-4 whitespace-nowrap outline-primary"
                >
                  <button
                    tabIndex="-1"
                    className="bg-primary text-white border-2 border-primary hover:shadow-xl shadow-md shadow-light text-base md:text-lg font-semibold rounded-md py-2 px-4 outline-none"
                  >
                    Get Started
                  </button>
                </a>
                <a href="#about" className="whitespace-nowrap outline-primary">
                  <button
                    tabIndex="-1"
                    className="bg-white text-primary border-2 border-primary hover:shadow-xl shadow-md shadow-light text-base md:text-lg font-semibold rounded-md py-2 px-4 outline-none"
                  >
                    Learn More
                  </button>
                </a>
              </div>
            </Fade>
          </div>
          <Fade right delay={500} duration={1200}>
            <div className="m-4 h-56 w-56 lg:h-96 lg:w-96 rounded-md shadow-lg relative">
              <Image
                className="rounded-md"
                src="/hero.webp"
                alt="Gym Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
