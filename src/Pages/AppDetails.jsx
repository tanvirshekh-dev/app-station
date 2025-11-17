import { useParams } from "react-router-dom";
import useApps from "../Hooks/useApps";
import { updateApps } from "../utils/localStorage";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((e) => String(e.id) === id);

  if (loading) return <p>Loading..⏳⏳</p>;
  if (!app) return <p>App not found</p>;

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
  } = app || {};

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex items-center w-11/12 mx-auto pt-20 pb-10">
        <figure>
          <img src={image} alt="app" className="w-72 h-72 mr-56" />
        </figure>
        <div className="card-body w-full">
          <div className="">
            <div>
              <h2 className="font-inter font-bold text-3xl text-[#001931]">
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

            <div className="flex items-center gap-16">
              <div className="">
                <img
                  src="/public/assets/icon-downloads.png"
                  alt=""
                  className="w-8 h-8"
                />
                <p className="font-inter text-[#001931] py-2">Downloads</p>
                <h2 className="font-inter font-extrabold text-4xl text-[#001931]">
                  {downloads}
                </h2>
              </div>

              <div className="">
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

              <div className="">
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
            <button
              onClick={() => updateApps(app)}
              className="font-inter font-semibold text-xl text-white py-3.5 px-5 bg-[#00D390] rounded-md mt-7 cursor-pointer"
            >
              Install Now ({size})
            </button>
          </div>
        </div>
      </div>
      <hr className="py-7 text-gray-400 w-11/12 mx-auto" />

      {/* bercharts */}

      <hr className="py-7 text-gray-400 w-11/12 mx-auto" />

      {/* dexcription */}
      <div className="w-11/12 mx-auto">
        <div>
          <h2 className="font-inter font-semibold text-2xl">Description</h2>
          <p className="text-[#627382] font-inter text-lg pt-6 pb-16">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
