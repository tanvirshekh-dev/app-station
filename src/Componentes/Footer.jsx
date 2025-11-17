import { Facebook, Linkedin, Target, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#001931]">
      <footer className="footer sm:footer-horizontal md:flex md:justify-between bg-base-200 text-base-content p-10">
        <aside className="space-y-6">
          <Link
            to={"/"}
            className="btn btn-ghost text-2xl text-white font-bold flex items-center"
          >
            <img src="/logo.png" alt="" className="w-12 h-12 mr-2" /> Apps
            Station
          </Link>
          <p className="text-white">
            NextWave Digital Solutions.
            <br />
            Providing apps and software since 2002.
          </p>
        </aside>
        <nav className="flex flex-col space-y-4 text-white">
          <h6 className="footer-title font-semibold text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col space-y-4 text-white">
          <h6 className="footer-title font-semibold text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col space-y-4 text-white">
          <h6 className="font-semibold text-xl">Social Links</h6>
          <div className="flex space-x-5 mt-4">
            <a href="https://www.facebook.com/" target="_blank">
              <Facebook />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <Linkedin />
            </a>
            <a href="https://x.com/" target="_blank">
              <Twitter />
            </a>
          </div>
        </nav>
      </footer>
      <hr className="text-gray-600 w-11/12 mx-auto"/>
      <p className="text-center text-white py-5
      ">
        Copyright © 2025 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
