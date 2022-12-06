"use client"
import {useState} from 'react';
import { Switch } from "@headlessui/react";

const PricingSection = () => {

const [enabled, setEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-4 py-8">
          <h3 className="text-xl text-black">Monthly</h3>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-black" : "bg-gray-400"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6 bg-white" : "translate-x-1 bg-black"
              } inline-block h-4 w-4 transform rounded-full  transition-all duration-200`}
            />
          </Switch>
          <h3 className="text-xl text-black">Yearly</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 mt-10">
          <article className="w-full h-[450px] bg-slate-200 p-8 flex flex-col justify-center space-y-10 items-center">
            <h3 className="text-2xl text-black">Basic</h3>
            <p className="text-slate-600 text-center text-base leading-7">
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </p>
            <h4 className="text-3xl text-black">
              $ {enabled ? "190.00" : "19.00"}
            </h4>
            <p className="text-base text-slate-600 -translate-y-12">
              {" "}
              {enabled ? "per year" : "per month"}
            </p>

            <button className="w-full text-center text-white bg-black py-2 text-md uppercase">
              Pick Plan
            </button>
          </article>
          <article className="w-full h-[550px] bg-black p-8 flex flex-col justify-center space-y-10 items-center relative">
            <div className="h-2 absolute top-0 right-0 left-0 gradient"/>
            <h3 className="text-2xl text-white">Pro</h3>
            <p className="text-slate-200 text-center text-base leading-7">
              More advanced features available. Recommended for photography
              veterans and professionals.
            </p>
            <h4 className="text-3xl text-white">
              $ {enabled ? "390.00" : "39.00"}
            </h4>
            <p className="text-base text-slate-600 -translate-y-12">
              {" "}
              {enabled ? "per year" : "per month"}
            </p>
            <button className="w-full text-center text-black bg-white py-2 text-md uppercase">
              Pick Plan
            </button>
          </article>
          <article className="w-full h-[450px] bg-slate-200 p-8 flex flex-col justify-center space-y-10 items-center">
            <h3 className="text-2xl text-black">Business</h3>
            <p className="text-slate-600 text-center text-base leading-7">
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </p>
            <h4 className="text-3xl text-black">
              $ {enabled ? "990.00" : "99.00"}
            </h4>
            <p className="text-base text-slate-600 -translate-y-12">
              {" "}
              {enabled ? "per year" : "per month"}
            </p>
            <button className="w-full text-center text-white bg-black py-2 text-md uppercase">
              Pick Plan
            </button>
          </article>
        </div>
      </div>
    </div>
  );
};
export default PricingSection;
