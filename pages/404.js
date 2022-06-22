import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page Not Found | Fitsy</title>
      </Head>
      <main className="h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center m-2 flex-wrap">
          <Link href="/" className="m-4">
            <a className="flex flex-row items-center p-2">
              <div className="h-12 w-16 relative">
                <Image
                  src="/logo.svg"
                  alt="Fitsy Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-4xl text-primary font-bold italic">
                Fitsy
              </div>
            </a>
          </Link>
          <p className="text-center text-2xl md:text-2xl m-5 font-semibold">
            Page Not Found
          </p>
        </div>

        <Link className="mt-6" href="/">
          <a className="p-1 mx-4 visited:fill-primary text-primary visited:text-primary fill-primary text-xl font-medium flex items-center rounded-md outline-primary">
            <svg
              className="h-6 inline-block mr-2 fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
            </svg>
            <span className="fill-primary">Back to Home</span>
          </a>
        </Link>
      </main>
    </>
  );
}
