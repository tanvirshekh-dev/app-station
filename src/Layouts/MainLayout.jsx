import Navbar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const MainLayout = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [location.pathname]);



  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>

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
    </div>
  );
};

export default MainLayout;
