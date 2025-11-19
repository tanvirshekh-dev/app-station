import React, { useState } from "react";
import AppsCard from "../Componentes/AppsCard";
import SkeletonLoader from "../Componentes/SkeletonLoader";
import useApps from "../Hooks/useApps";
import { useNavigate } from "react-router";

const Apps = () => {

   const navigate = useNavigate();
    const showAllApps = () => {
      navigate('/apps');
    }
  const { apps, loading } = useApps();

  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
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
            ({searchedApps.length}) Apps Found{" "}
          </span>
          <div className="search-input-container">
            <label className="input flex items-center">
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
        {searchedApps.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-5xl text-center font-semibold pt-20 pb-8 text-[#001931]">No Apps Found</p>
            <button onClick={showAllApps} className="btn py-3 px-4 rounded-sm bg-linear-to-t from-[#9F62F2] to-[#632EE3] text-white cursor-pointer">
              Show All Apps
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto pt-4 pb-20">
            {searchedApps.map((app) => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))}
          </div>
        )}
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
