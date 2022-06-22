import { useState } from 'react';

export default function GetStarted() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log('form submitted');
  };
  return (
    <section id="join" className="section">
      <h1 className="section-heading">Join Us</h1>
      <h2 className="section-description">Begin Your Journey to Fitness!</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Gains block */}
        <div className="my-6 lg:p-6 mx-8 md:mx-20 text-left overflow-hidden">
          <div className="text-3xl md:text-4xl font-bold my-6">Get Started</div>
          <div className="my-5 flex flex-row items-center justify-start">
            <svg
              className="h-7 md:h-8 inline-block mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M104 96h-48C42.75 96 32 106.8 32 120V224C14.33 224 0 238.3 0 256c0 17.67 14.33 32 31.1 32L32 392C32 405.3 42.75 416 56 416h48C117.3 416 128 405.3 128 392v-272C128 106.8 117.3 96 104 96zM456 32h-48C394.8 32 384 42.75 384 56V224H256V56C256 42.75 245.3 32 232 32h-48C170.8 32 160 42.75 160 56v400C160 469.3 170.8 480 184 480h48C245.3 480 256 469.3 256 456V288h128v168c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V56C480 42.75 469.3 32 456 32zM608 224V120C608 106.8 597.3 96 584 96h-48C522.8 96 512 106.8 512 120v272c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24V288c17.67 0 32-14.33 32-32C640 238.3 625.7 224 608 224z" />
            </svg>
            <span className="text-lg md:text-xl font-semibold">
              Gym Membership
            </span>
          </div>
          <div className="my-5 flex flex-row items-center justify-start">
            <svg
              className="h-7 md:h-8 inline-block mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M96 304.1c0-12.16 4.971-23.83 13.64-32.01l72.13-68.08c1.65-1.555 3.773-2.311 5.611-3.578C177.1 176.8 155 160 128 160H64C28.65 160 0 188.7 0 224v96c0 17.67 14.33 32 31.1 32L32 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96.39l-50.36-47.53C100.1 327.9 96 316.2 96 304.1zM480 128c35.38 0 64-28.62 64-64s-28.62-64-64-64s-64 28.62-64 64S444.6 128 480 128zM96 128c35.38 0 64-28.62 64-64S131.4 0 96 0S32 28.62 32 64S60.63 128 96 128zM444.4 295.3L372.3 227.3c-3.49-3.293-8.607-4.193-13.01-2.299C354.9 226.9 352 231.2 352 236V272H224V236c0-4.795-2.857-9.133-7.262-11.03C212.3 223.1 207.2 223.1 203.7 227.3L131.6 295.3c-4.805 4.535-4.805 12.94 0 17.47l72.12 68.07c3.49 3.291 8.607 4.191 13.01 2.297C221.1 381.3 224 376.9 224 372.1V336h128v36.14c0 4.795 2.857 9.135 7.262 11.04c4.406 1.893 9.523 .9922 13.01-2.299l72.12-68.07C449.2 308.3 449.2 299.9 444.4 295.3zM512 160h-64c-26.1 0-49.98 16.77-59.38 40.42c1.842 1.271 3.969 2.027 5.623 3.588l72.12 68.06C475 280.2 480 291.9 480 304.1c.002 12.16-4.969 23.83-13.64 32.01L416 383.6V480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-128c17.67 0 32-14.33 32-32V224C576 188.7 547.3 160 512 160z" />
            </svg>
            <span className="text-lg md:text-xl font-semibold">
              One-on-one Coaching
            </span>
          </div>
          <div className="my-5 flex flex-row items-center justify-start">
            <svg
              className="h-7 md:h-8 inline-block mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM80 256C71.16 256 64 263.2 64 272V368C64 376.8 71.16 384 80 384H176C184.8 384 192 376.8 192 368V272C192 263.2 184.8 256 176 256H80z" />
            </svg>
            <span className="text-lg md:text-xl font-semibold">
              Custom Training Plan
            </span>
          </div>
          <div className="my-5 flex flex-row items-center justify-start">
            <svg
              className="h-7 md:h-8 inline-block mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M352 432c0 8.836-7.164 16-16 16H176c-8.838 0-16-7.164-16-16L160 128H48C21.49 128 .0003 149.5 .0003 176v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48L512 384h-160L352 432zM104 439c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9V439zM104 335c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9V335zM104 231c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9v-30C56 196 60.03 192 65 192h30c4.969 0 9 4.031 9 9V231zM408 409c0-4.969 4.031-9 9-9h30c4.969 0 9 4.031 9 9v30c0 4.969-4.031 9-9 9h-30c-4.969 0-9-4.031-9-9V409zM591.1 0H239.1C213.5 0 191.1 21.49 191.1 48v256c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-256C640 21.49 618.5 0 591.1 0zM303.1 64c17.68 0 32 14.33 32 32s-14.32 32-32 32C286.3 128 271.1 113.7 271.1 96S286.3 64 303.1 64zM574.1 279.6C571.3 284.8 565.9 288 560 288H271.1C265.1 288 260.5 284.6 257.7 279.3C255 273.9 255.5 267.4 259.1 262.6l70-96C332.1 162.4 336.9 160 341.1 160c5.11 0 9.914 2.441 12.93 6.574l22.35 30.66l62.74-94.11C442.1 98.67 447.1 96 453.3 96c5.348 0 10.34 2.672 13.31 7.125l106.7 160C576.6 268 576.9 274.3 574.1 279.6z" />
            </svg>
            <span className="text-lg md:text-xl font-semibold">
              Workout Clips
            </span>
          </div>
          <div className="my-5 flex flex-row items-center justify-start">
            <svg
              className="h-7 md:h-8 inline-block mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" />
            </svg>
            <span className="text-lg md:text-xl font-semibold">Mobile App</span>
          </div>
        </div>
        {/* Gains end */}

        {/* 'Join Us' Form */}
        <div className="m-6">
          <form className="h-auto max-w-full border-2 border-slate-50 rounded-md shadow-xl p-6">
            <div className="flex flex-row flex-wrap justify-between items-center">
              <div className="m-2">
                <label className="block text-lg" htmlFor="first_name">
                  First name
                </label>
                <input
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="border-2 border-light-shade rounded-md h-10 p-2 outline-none focus:ring-2 ring-light"
                  type="text"
                  required="required"
                  id="first_name"
                />
              </div>
              <div className="m-2">
                <label className="block text-lg" htmlFor="last_name">
                  Last name
                </label>
                <input
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="border-2 border-light-shade rounded-md h-10 p-2 outline-none focus:ring-2 ring-light"
                  type="text"
                  required="required"
                  id="last_name"
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-start items-center">
              <div className="m-2">
                <label className="block text-lg" htmlFor="age">
                  Age <span className="text-sm text-supporting">(yrs)</span>
                </label>
                <input
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  className="border-2 border-light-shade rounded-md h-10 p-2 outline-none focus:ring-2 ring-light"
                  type="number"
                  min="1"
                  required="required"
                  id="age"
                />
              </div>
              <div className="m-2">
                <label className="block text-lg" htmlFor="weight">
                  Weight <span className="text-sm text-supporting">(kg)</span>
                </label>
                <input
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  className="border-2 border-light-shade rounded-md h-10 p-2 outline-none focus:ring-2 ring-light"
                  type="number"
                  min="1"
                  required="required"
                  id="weight"
                />
              </div>
            </div>
            <div className="m-2">
              <label className="block text-lg" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border-2 border-light-shade rounded-md h-10 p-2 outline-none focus:ring-2 ring-light"
                type="email"
                min="1"
                required="required"
                id="email"
              />
            </div>
            <div className="m-2">
              <label className="block text-lg" htmlFor="phone">
                Phone
              </label>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="w-full border-2 border-light-shade rounded-md h-10 p-2 outline-none focus:ring-2 ring-light"
                type="tel"
                min="1"
                required="required"
                id="phone"
              />
            </div>
            <div className="mt-6 mb-4 mx-2">
              <button
                onClick={submitForm}
                type="submit"
                className="w-full bg-primary text-white font-bold text-xl rounded-md h-12 p-2 outline-none focus:ring-2 ring-light"
              >
                <svg
                  className="h-6 mr-2 inline-block fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z" />
                </svg>
                <span>Join</span>
              </button>
            </div>
          </form>
        </div>
        {/* Form end */}
      </div>
    </section>
  );
}
