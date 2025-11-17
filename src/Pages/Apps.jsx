import React, { useState } from "react";
import AppsCard from "../Componentes/AppsCard";
import SkeletonLoader from "../Componentes/SkeletonLoader";
import useApps from "../Hooks/useApps";
import { FaSearch } from "react-icons/fa";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.name.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="bg-[#f5f5f5]">
      <div>
        <h2 className="font-inter text-4xl font-bold text-[#001931] text-center pt-20">
          Our All Applications
        </h2>
        <p className="text-center text-xl text-[#627382] mt-4 pb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex items-center justify-between w-11/12 mx-auto">
          <span className="text-2xl text-[#001931] font-medium">
            ({searchedApps.length}) Apps Found{""}
          </span>
          <div className="search-input-container">
            <label className="input flex items-center">
                {/* <FaSearch className="search-icon" /> */}
              <input
                className="px-4 py-2 font-inter text-[#627382] border border-[#D2D2D2] rounded-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        {loading ? (
          <SkeletonLoader count={24}></SkeletonLoader>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto pt-4 pb-20">
            {searchedApps.map((app) => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
