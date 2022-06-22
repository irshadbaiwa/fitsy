import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const ABOUT = 'about';
  const SCHEDULE = 'schedule';
  const CONTACT = 'contact';

  const [tab, setTab] = useState(ABOUT);

  return (
    <section className="section bg-light-shade py-10 mb-0">
      <h1 className="section-heading">About</h1>
      <h2 className="section-description">Know More About Fitsy</h2>
      <div className="mt-10 mx-5 md:mx-10 max-w-full flex flex-col md:flex-row justify-center items-center overflow-hidden">
        <div
          className="my-1 md:mx-10 max-w-full h-72 md:h-96 relative overflow-hidden"
          style={{
            width: '500px',
          }}
        >
          <Image
            className="rounded-md"
            src="/session.webp"
            alt="Fitsy Training Session"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="p-2 my-1 md:mx-10 max-w-full h-72 md:h-96"
          style={{
            width: '600px',
          }}
        >
          <div className="mt-4">
            {/* Tab */}
            <div className="max-w-full flex flex-col justify-center items-center mb-2">
              <div className="bg-slate-200 p-1 flex flex-row rounded-md">
                <button
                  onClick={() => setTab(ABOUT)}
                  className={
                    'text-sm md:text-base py-1 px-2 md:py-2 md:px-4 uppercase font-bold rounded-md transition-all outline-primary' +
                    (tab === ABOUT
                      ? ' bg-white text-primary'
                      : ' text-supporting')
                  }
                >
                  About
                </button>
                <button
                  onClick={() => setTab(SCHEDULE)}
                  className={
                    'text-sm md:text-base py-1 px-2 md:py-2 md:px-4 uppercase font-bold rounded-md transition-all outline-primary' +
                    (tab === SCHEDULE
                      ? ' bg-white text-primary'
                      : ' text-supporting')
                  }
                >
                  Schedule
                </button>
                <button
                  onClick={() => setTab(CONTACT)}
                  className={
                    'text-sm md:text-base py-1 px-2 md:py-2 md:px-4 uppercase font-bold rounded-md transition-all outline-primary' +
                    (tab === CONTACT
                      ? ' bg-white text-primary'
                      : ' text-supporting')
                  }
                >
                  Contact
                </button>
              </div>
            </div>
            {/* end */}

            {/* content */}
            <div className="mt-4 overflow-y-auto transition-all">
              {(tab === ABOUT && (
                <div className="text-center text-base md:text-xl">
                  <p className="mt-2">
                    Fitsy coaches work tirelessly to plan effective workout
                    routines for our clients. We help you set goals, build
                    momentum, and acheive the fitness level you desire.
                  </p>
                  <p className="mt-2">
                    This is a template for fitness training companies, created
                    by{' '}
                    <a
                      className="text-primary"
                      href="mailto:irshaadbaiwa@gmail.com"
                    >
                      A.I Baiwa
                    </a>
                    .
                  </p>
                </div>
              )) ||
                (tab === SCHEDULE && (
                  <div className="text-center text-md md:text-xl">
                    <h3 className="mt-4 font-semibold flex items-center justify-center">
                      <svg
                        className="h-6 inline-block mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
                      </svg>
                      <span>Working Hours</span>
                    </h3>
                    <p className="mt-2">8:00AM - 10:00PM</p>
                    <h3 className="mt-5 font-semibold flex items-center justify-center">
                      <svg
                        className="h-6 inline-block mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM80 256C71.16 256 64 263.2 64 272V336C64 344.8 71.16 352 80 352H368C376.8 352 384 344.8 384 336V272C384 263.2 376.8 256 368 256H80z" />
                      </svg>
                      <span>Working Days</span>
                    </h3>
                    <p className="mt-2">Monday - Sunday</p>
                  </div>
                )) ||
                (tab === CONTACT && (
                  <div className="text-md md:text-xl flex flex-row flex-wrap items-start justify-center">
                    <div className="mx-2">
                      <h3 className="mt-5 font-medium flex items-start justify-start">
                        <svg
                          className="h-6 inline-block mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
                        </svg>
                        <span>Kano, Nigeria.</span>
                      </h3>

                      <h3 className="mt-5 font-medium flex items-start justify-start">
                        <svg
                          className="h-6 inline-block mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                        <a href="tel:+2349038078419">irshadbaiwa</a>
                      </h3>
                      <h3 className="mt-5 font-medium flex items-start justify-start">
                        <svg
                          className="h-6 inline-block mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                        <a href="tel:+2349038078419">codewith_irshad</a>
                      </h3>
                      <h3 className="mt-5 font-medium flex items-start justify-start">
                        <svg
                          className="h-6 inline-block mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
                        </svg>
                        <a href="tel:+2349038078419">+2349038078419</a>
                      </h3>
                      <h3 className="mt-5 font-medium flex items-start justify-start">
                        <svg
                          className="h-6 inline-block mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
                        </svg>
                        <a href="tel:+2349038078419">irshaadbaiwa@gmail.com</a>
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </section>
  );
}
