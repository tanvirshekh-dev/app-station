import React, { useEffect, useState } from "react";
import AppsCard from "../Componentes/AppsCard";
import SkeletonLoader from "../Componentes/SkeletonLoader";
import useApps from "../Hooks/useApps";
import { useNavigate } from "react-router";
import Loading from "../Layouts/Loading";

const Apps = () => {
  // const handleSearch = useState([])
  const { apps, loading, setSearch, search } = useApps();
  // const [search, setSearch] = useState("");
 console.log(apps);
//   if (loading) {
//   return <Loading></Loading>
// }
 
  // const [searchedApps, setSearchedApps] = useState(apps)
  // const [searchedLoading, setSearchedLoading] = useState(true)


  // useEffect(() => {
  //    const term = search.trim().toLocaleLowerCase();
  //   const searched = term
  //     ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
  //     : apps;
  //   console.log(searched);
    
  //   if (searched.length > 0) {
  //     setSearchedApps(searched)
  //   }
  //   else {
  //     setSearchedApps(apps);
  //   }
  // }, [search]);

  const navigate = useNavigate();
  const showAllApps = () => {
    navigate("/apps");
  };

  if (!apps || loading) {
    return <Loading></Loading>;
  }

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
            ({apps.length}) Apps Found{" "}
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
        {apps.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-5xl text-center font-semibold pt-20 pb-8 text-[#001931]">
              No Apps Found
            </p>
          </div>
        ) : (
          ""
        )}
        {loading ? (
          // <SkeletonLoader count={24}></SkeletonLoader>
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto pt-4 pb-20">
            {apps.map((app) => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
