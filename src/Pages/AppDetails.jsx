import { Link, useParams } from "react-router-dom";
import useApps from "../Hooks/useApps";
import { loadInstallation, updateApps } from "../utils/localStorage";
import { toast, ToastContainer } from "react-toastify";
// import Installation from "./Installation";
import { useEffect, useState } from "react";
import Recharts from "../Componentes/Recharts";
import AppsNotFound from "../Componentes/AppsNotFound";
import Loading from "../Layouts/Loading";
import { formatNumber } from "../utils/numberFormet";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((e) => String(e.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const storeApp = loadInstallation();
    console.log(storeApp);
    const isFind = storeApp.find((a) => a.id == id);
    if (isFind) {
      setIsInstalled(true);
    }
  }, []);

  if (loading) return <Loading></Loading>;
  if (!app) return <AppsNotFound></AppsNotFound>;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
  } = app || {};

  const handleClick = () => {
    toast.success("Successfully added this apps");
    setIsInstalled(true);
  };

  return (
    <div className="bg-[#f5f5f5]">
      {/* apps details */}
      <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto pt-20 pb-10">
        <figure>
          <img
            src={image}
            alt="app"
            className="w-72 h-72 pb-10 md:pb-0 md:mr-56 "
          />
        </figure>
        <div className="card-body w-full">
          <div className="">
            <div className="text-center md:text-left">
              <h2 className="font-inter font-bold text-4xl text-[#001931]">
                {title}
              </h2>
              <p className="font-inter text-xl text-[#627382] pt-3">
                Developed by{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
                  {companyName}
                </span>
              </p>
              <hr className="my-7 text-gray-400 w-full" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex flex-col items-center justify-center md:items-start">
                <img
                  src="/public/assets/icon-downloads.png"
                  alt=""
                  className="w-8 h-8"
                />
                <p className="font-inter text-[#001931] py-2">Downloads</p>
                <h2 className="font-inter font-extrabold text-4xl text-[#001931]">
                  {formatNumber(downloads)}
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center md:items-start">
                <img
                  src="/public/assets/icon-ratings.png"
                  alt=""
                  className="w-8 h-8"
                />
                <p className="font-inter text-[#001931] py-2">
                  Average Ratings
                </p>
                <h2 className="font-inter font-extrabold text-4xl text-[#001931]">
                  {ratingAvg}
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center md:items-start">
                <img
                  src="/public/assets/icon-review.png"
                  alt=""
                  className="w-8 h-8"
                />
                <p className="font-inter text-[#001931] py-2">Total Reviews</p>
                <h2 className="font-inter font-extrabold text-4xl text-[#001931]">
                  {reviews}
                </h2>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <button
                onClick={() => {
                  updateApps(app);
                  handleClick();
                }}
                disabled={isInstalled}
                className="btn hover:shadow-md font-inter font-semibold text-xl text-white py-3.5 px-5 bg-[#00D390] rounded-md mt-7 cursor-pointer"
              >
                {isInstalled ? "Installed" : <p>Install Now ({app.size})</p>}
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="py-7 text-gray-400 w-11/12 mx-auto" />

      {/* barcherts */}
      <Recharts app={app.ratings}></Recharts>

      <hr className="py-7 text-gray-400 w-11/12 mx-auto" />
      {/* Description */}
      <div className="w-11/12 mx-auto">
        <div>
          <h2 className="font-inter font-semibold text-2xl">Description</h2>
          <p className="text-[#627382] font-inter text-lg pt-6 pb-16 text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
