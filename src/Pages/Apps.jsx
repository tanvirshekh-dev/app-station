import React, { useEffect, useState } from "react";
import AppsCard from "../Componentes/AppsCard";
import SkeletonLoader from "../Componentes/SkeletonLoader";
import useApps from "../Hooks/useApps";
import { useNavigate } from "react-router";
import Loading from "../Layouts/Loading";
import axios from "axios";

const Apps = () => {
  // const handleSearch = useState([])
  const [search, setSearch] = useState("");
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(()=>{
    axios.get('./appsData.json')
    .then(res=>{
      setApps(res.data)
    })
    .catch(err=>{
      console.log(err);
      
    })
  }, [])
  console.log(apps);
  const [searchResult, setSearchResult] = useState(apps)
   useEffect(()=>{
    setLoading(true)
    const delay = setTimeout(() => {
      if(search==''){
        setSearchResult(apps)
      }else{
        const filteredData = apps.filter(app=> app.title.toLowerCase().includes(search.toLowerCase()))
        setSearchResult(filteredData)
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(delay);
  },[apps, search])


  const navigate = useNavigate();
  const showAllApps = () => {
    navigate("/apps");
  };


  return (
    <div className="bg-[#f5f5f5]">
      <div>
        <h2 className="font-inter text-3xl md:text-4xl font-bold text-[#001931] text-center pt-20">
          Our All Applications
        </h2>
        <p className="text-center text-xl text-[#627382] mt-4 pb-10">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex items-center justify-between w-11/12 mx-auto">
          <span className="text-[18px] md:text-2xl text-[#001931] font-medium">
            ({searchResult.length}) Apps Found{" "}
          </span>
          <div className="search-input-container">
            <label className="input flex items-center">
              <input
                className="px-2 py-2 md:px-4 md:py-2 font-inter text-[#627382] border border-[#D2D2D2] rounded-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        {searchResult.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-5xl text-center font-semibold pt-20 pb-8 text-[#727272]">
              No Apps Found
            </p>
          </div>
        ) : (
          ""
        )}
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto pt-4 pb-20">
            {searchResult.map((app) => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
