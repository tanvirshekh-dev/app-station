import React from "react";
import Navbar from "../Componentes/Navbar";
import { Outlet } from "react-router";
import Footer from "../Componentes/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
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
