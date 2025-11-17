import React from "react";

const Statistic = () => {
  return (
    <div className="bg-linear-to-l from-[#9F62F2] to-[#632EE3]">
      <div>
        <h2 className="text-center text-white font-inter font-bold text-4xl pt-16 pb-10">
          Trusted by Millions, Built for You
              </h2>
              <div className="flex items-center col-span-1 md:col-span-2 lg:col-span-3 space-x-20 justify-center pb-16">
                  <div className="text-center">
                      <p className="font-inter text-white">Total Downloads</p>
                      <h2 className="font-inter text-white font-extrabold text-6xl py-4">29.6M</h2>
                      <p className="font-inter text-white">21% more than last month</p>
                  </div>
                  <div className="text-center">
                      <p className="font-inter text-white">Total Reviews</p>
                      <h2 className="font-inter text-white font-extrabold text-6xl py-4">906K</h2>
                      <p className="font-inter text-white">46% more than last month</p>
                  </div>
                  <div className="text-center">
                      <p className="font-inter text-white">Active Apps</p>
                      <h2 className="font-inter text-white font-extrabold text-6xl py-4">132+</h2>
                      <p className="font-inter text-white">31 more will Launch</p>
                  </div>
              </div>
      </div>
    </div>
  );
};

export default Statistic;
