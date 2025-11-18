import { Link, useParams } from "react-router-dom";
import useApps from "../Hooks/useApps";
import { updateApps } from "../utils/localStorage";
import { ToastContainer } from "react-toastify";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Installation from "./Installation";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((e) => String(e.id) === id);

  if (loading) return <p>Loading..⏳⏳</p>;
  if (!app) return <p className="text-center py-40 text-4xl font-bold">App not found</p>;

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

  // chart data generate
// const totalsByCategory = {};
//   Installation.forEach((product) => {
//     const category = product.category;

//     totalsByCategory[category] =
//       (totalsByCategory[category] || 0) + product.price;
//   });


//   const chartData = Object.keys(totalsByCategory).map((category) => ({
//     category: category,
//     total: totalsByCategory[category],
//   }));
//   console.log(chartData);

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
            <Link to={`/apps/${id}`}>
              <button
                onClick={() => updateApps(app)}
                to={`/apps/${id}`}
                className="btn hover:shadow-md font-inter font-semibold text-xl text-white py-3.5 px-5 bg-[#00D390] rounded-md mt-7 cursor-pointer"
              >
                Install Now ({size})
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <hr className="py-7 text-gray-400 w-11/12 mx-auto" />

      {/* barcherts */}
      {/* <div className="w-11/12 mx-auto">
        <h2 className="text-2xl font-semibold mt-16 mb-4">Ratings</h2>
        <div className="bg-base-100 border rounded-xl p-4 w-full h-80">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart layout="vertical" data={}>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="ratings" barSize={20} fill="#413ea0" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div> */}

      <hr className="py-7 text-gray-400 w-11/12 mx-auto" />
      {/* Description */}
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
