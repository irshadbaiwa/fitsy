import Image from 'next/image';
import Fade from 'react-reveal/Fade';

export default function ServicesSection() {
  // dummy data
  const services = [
    {
      title: 'Gym',
      desc: 'Get access to 100+ well-equipped gyms located around the country',
      image_src: '/gym.webp',
    },
    {
      title: 'Coach',
      desc: 'One-on-one coaching for better results, tracking, and training plans',
      image_src: '/coach.webp',
    },
    {
      title: 'Plan',
      desc: 'Flexible training plans to fit your schedule, goals and travel.',
      image_src: '/plan.webp',
    },
    {
      title: 'Video Clips',
      desc: 'Get access to over 1000 videos for various exercises, workouts and intensive training',
      image_src: '/clip.webp',
    },
    {
      title: 'Mobile App',
      desc: 'Track your food, goal, and weight, connect with your trainer, all using our mobile app',
      image_src: '/app.webp',
    },
  ];

  return (
    <section className="section mt-0" id="services">
      <h1 className="section-heading">Services</h1>
      <h2 className="section-description">What We Offer</h2>
      <div className="mt-6 flex flex-row flex-wrap justify-center items-center overflow-hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="h-72 w-72 md:h-80 md:w-80 shadow-lg rounded-md relative my-6 mx-10 md:mx-14"
            style={{ maxWidth: '75%' }}
          >
            {/* bg image */}
            <div className="h-full w-full relative rounded-md">
              <Image
                className="rounded-md hover:scale-110 transition-all duration-500"
                src={service.image_src}
                alt={service.title + 'image'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* bg image end */}

            {/* top box */}
            <Fade right duration={1000} delay={200}>
              <div
                className="h-3/4 w-3/4 p-3 md:p-4 bg-white shadow-lg rounded-md absolute border-2 border-slate-50"
                style={{
                  top: '12.5%',
                  left: '50%',
                }}
              >
                {/* header */}
                <div className="flex flex-row items-center">
                  <div className="h-8 w-10 md:h-10 md:w-12 rounded relative inline-block mr-1 md:mr-2">
                    <div className="h-full w-full">
                      <Image
                        className="rounded-md"
                        src="/logo.svg"
                        alt="Fitsy Logo"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="text-lg md:text-2xl font-extrabold text-primary whitespace-nowrap inline-block">
                    {service.title}
                  </div>
                </div>
                {/* header end */}

                {/* body */}
                <div className="mt-2 md:mt-4 text-base md:text-lg font-semibold md:font-bold">
                  {service.desc}
                </div>
                {/* body end */}
              </div>
              {/* top box end */}
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
}
