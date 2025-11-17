import React from "react";
import Productive from "../Componentes/Productive";
import Statistic from "../Componentes/Statistic";
import SkeletonLoader from "../Componentes/SkeletonLoader";
import useApps from "../Hooks/useApps";
import AppsCard from "../Componentes/AppsCard";
import { Link } from "react-router";
import AppDetails from "./AppDetails";

const Home = () => {
  const { loading, apps } = useApps();

  const trendingApps = apps.slice(0, 8);

  return (
    <div className="">
      <section>
        <Productive></Productive>
      </section>
      <section>
        <Statistic></Statistic>
      </section>
      <section>
        <div className="bg-[#f5f5f5]">
          <div>
            <h2 className="font-inter text-4xl font-bold text-[#001931] text-center pt-20">
              Trending Apps
            </h2>
            <p className="text-center text-xl text-[#627382] mt-4 pb-10">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          {loading ? (
            <SkeletonLoader></SkeletonLoader>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto pt-4 pb-12">
              {trendingApps.map((app) => (
                <AppsCard key={app.id} app={app}></AppsCard>
              ))}
            </div>
          )}
          <div className="flex justify-center">
            <Link to="/apps" className="btn py-3 px-10 rounded-sm bg-linear-to-t from-[#9F62F2] to-[#632EE3] text-white font-semibold text-base mb-20 cursor-pointer">
              Show All
            </Link>
          </div>
        </div>
      </section>

      <section>
        <AppDetails></AppDetails>
      </section>
    </div>
  );
};

export default Home;
