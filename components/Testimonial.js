import Image from 'next/image';
import Fade from 'react-reveal/Fade';

export default function Testimonial() {
  const testimonials = [
    {
      name: 'John Doe',
      review:
        'Lorem Ipsum dolor sit amet consectetur adipiscing lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit anet',
      avatar_src: '/john.webp',
    },
    {
      name: 'Jennifer Arthur',
      review:
        'Lorem Ipsum dolor sit amet consectetur adipiscing lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit anet',
      avatar_src: '/jane.webp',
    },
  ];

  return (
    <section className="section py-10 mx-10 overflow-hidden">
      <h1 className="section-heading">Testimonials</h1>
      <h2 className="section-description">Hear From Our Clients</h2>
      <div className="my-10 flex flex-row flex-wrap justify-center items-center">
        {testimonials.map((customer, index) => (
          <Fade key={index} bottom duration={1000} delay={300}>
            <div
              className="m-4 h-72 max-w-full flex flex-col md:flex-row rounded-md shadow-lg relative"
              style={{
                width: '600px',
              }}
            >
              <div className="relative w-full md:w-2/5 h-1/2 md:h-full">
                <Image
                  className="rounded-tl-md rounded-tr-md rounded-bl-none md:rounded-tr-none md:rounded-bl-md"
                  src={customer.avatar_src}
                  alt={customer.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-full md:w-3/5 h-1/2 md:h-full p-4 flex flex-col justify-center items-center rounded-br-md rounded-bl-md rounded-tr-none md:rounded-tr-md md:rounded-bl-none">
                <div className="font-bold text-center md:text-left overflow-y-auto">
                  <p className="text-xs md:text-lg">{customer.review}</p>
                  <p className="mt-2 text-sm md:text-xl text-primary">
                    - {customer.name}
                  </p>
                </div>
              </div>

              <div
                className="bg-light flex flex-col items-center justify-center rounded-full overflow-hidden"
                style={{
                  width: '16%',
                  height: '16%',
                  position: 'absolute',
                  top: '-8%',
                  left: '42%',
                }}
              >
                <svg
                  className="h-6 md:h-8 fill-primary inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" />
                </svg>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
