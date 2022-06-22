export default function Footer() {
  return (
    <section className="section bg-light-shade m-0 pt-10 pb-4">
      <a className="mt-2 flex justify-center items-center" href="#">
        <svg
          className="h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z" />
        </svg>
      </a>
      <div className="mt-4 text-center font-bold text-lg md:text-xl text-supporting">
        &copy; Fitsy. All Rights Reserved
      </div>
    </section>
  );
}
