// import React from 'react';
import { toast } from "react-toastify";

import { useState } from "react";
import {
  loadInstallation,
  removeFromInstallation,
} from "../utils/localStorage";

const Installation = () => {
  const [installation, setInstallation] = useState(() => loadInstallation());
  const [sortOrder, setSortOrder] = useState("none");

  if (!installation.length) {
    return (
      <p className="text-center font-inter pt-40 pb-44 text-4xl text-gray-500 font-semibold">
        No Apps Available
      </p>
    );
  }

  const sortedItem = (() => {
    if (sortOrder == "price-asc") {
      return [...installation].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder == "price-desc") {
      return [...installation].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installation;
    }
  })();

  const handleRemove = (id) => {
    removeFromInstallation(id);
    setInstallation((pre) => pre.filter((p) => p.id !== id));
  };

  const handleUninstall = () => {
    toast("🐴 This apps successfully uninstalled", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function compactFormat(num) {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  }

  return (
    <div className="bg-[#f5f5f5]">
      <div>
        <h2 className="font-inter text-3xl md:text-4xl font-bold text-[#001931] text-center pt-20">
          Your Installed Apps
        </h2>
        <p className="text-center text-xl text-[#627382] mt-4 pb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center w-11/12 mx-auto pb-6">
        <h1 className="text-xl md:text-3xl font-semibold">
          Installation{" "}
          <span className="text-lg text-gray-400">
            ({sortedItem.length}) Products Found{" "}
          </span>
        </h1>

        <label className="form-control w-full max-w-xs ">
          <select
            className="border border-[#627382] text-[#627382] w-full py-2 pr-4 pl-2 rounded-md"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option
              className="text-[#627382] w-full py-2 px-4 rounded-md"
              value="none"
            >
              Sort By Size
            </option>
            <option
              className="text-[#627382] w-full py-2 px-4 rounded-md"
              value="price-asc"
            >
              Low-&gt;Heigh
            </option>
            <option
              className="text-[#627382] w-full py-2 px-4 rounded-md"
              value="price-desc"
            >
              Heigh-&gt;Low
            </option>
          </select>
        </label>
      </div>

      <div className="space-y-3 pb-20">
        {sortedItem.map((p) => (
          <div key={p.id} className="w-11/12 mx-auto py-2">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-5 items-center">
                <img src={p.image} alt="" className="w-36 h-36 rounded-2xl" />
                <div className="text-center md:text-left">
                  <h2 className="font-inter text-2xl text-[#001931] pb-3 font-semibold">
                    {p.title}
                  </h2>
                  <div className="flex items-center justify-between font-inter text-xl">
                    <a
                      href=""
                      className="flex items-center space-x-2 text-[#00D390] py-1.5 rounded-sm"
                    >
                      <img
                        src="/assets/icon-downloads.png"
                        alt=""
                        className="w-4 h-4"
                      />{" "}
                      <span>{compactFormat(p.downloads)}</span>
                    </a>
                    <a
                      href=""
                      className="flex items-center space-x-2 text-[#FF8811] py-1.5 px-6 rounded-sm"
                    >
                      <img
                        src="/assets/icon-ratings.png"
                        alt=""
                        className="w-4 h-4"
                      />{" "}
                      <span>{p.ratingAvg}</span>
                    </a>

                    <p className="font-inter text-[#627382]">{p.size}</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleRemove(p.id);
                    handleUninstall();
                  }}
                  className="btn hover:shadow-md font-inter font-semibold text-xl text-white py-2 px-5 bg-[#00D390] rounded-md mt-7 cursor-pointer"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
