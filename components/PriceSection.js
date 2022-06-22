import { useState } from 'react';

export default function PriceSection() {
  const MONTHLY = 'monthly';
  const YEARLY = 'yearly';
  const [subscriptionPlan, setPlan] = useState(MONTHLY);

  const monthly_price = 99;
  const yearly_price = 799;

  return (
    <section className="section bg-light-shade py-10" id="pricing">
      <h1 className="section-heading">Pricing</h1>
      <h2 className="section-description">Subscription Plan</h2>
      <div className="mt-4 overflow-hidden">
        {/* Tab */}
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="bg-slate-200 p-1 flex flex-row rounded-md">
            <button
              onClick={() => setPlan(MONTHLY)}
              className={
                'text-sm md:text-base py-2 px-4 uppercase font-bold rounded-md transition-all outline-primary' +
                (subscriptionPlan === MONTHLY
                  ? ' bg-white text-primary'
                  : ' text-supporting')
              }
            >
              Monthly
            </button>
            <button
              onClick={() => setPlan(YEARLY)}
              className={
                'text-sm md:text-base py-2 px-4 uppercase font-bold rounded-md transition-all outline-primary' +
                (subscriptionPlan === YEARLY
                  ? ' bg-white text-primary'
                  : ' text-supporting')
              }
            >
              Yearly
            </button>
          </div>
        </div>
        {/* end */}
        {(subscriptionPlan === MONTHLY && (
          <div className="text-center mt-4">
            <span className="text-2xl md:text-5xl text-primary font-bold">
              $
            </span>{' '}
            <span className="text-6xl md:text-9xl font-extrabold">
              {monthly_price}
            </span>
          </div>
        )) || (
          <div className="text-center mt-4">
            <span className="text-2xl md:text-5xl text-primary font-bold">
              $
            </span>{' '}
            <span className="text-6xl md:text-9xl font-extrabold">
              {yearly_price}
            </span>
          </div>
        )}

        <div className="mt-6 flex flex-row justify-center items-center">
          <a
            href="#join"
            className="bg-primary text-white border-2 border-primary hover:shadow-xl shadow-md shadow-light text-md md:text-lg font-semibold rounded-md py-2 px-4 outline-primary"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
