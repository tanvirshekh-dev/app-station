import React from "react";
import { useNavigate } from "react-router";

const AppsNotFound = () => {

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
  return (
    <div>
      <div className="p-20">
        <img
          src="/public/assets/App-Error.png"
          alt="Apps Not Found"
          className="mx-auto mb-5 pt-10 pb-5"
        />
        <h2 className="text-center text-5xl font-inter font-semibold">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="font-inter text-xl text-[#627382] mt-2 mb-4 text-center">
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        <div className="text-center pt-3">
                  <a 
                  onClick={goHome}    
            target="_blank"
            className="btn py-3 px-4 rounded-sm bg-linear-to-t from-[#9F62F2] to-[#632EE3] text-white cursor-pointer
         "
          >
            <span className="pl-2 font-semibold text-base" >Go Back!</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppsNotFound;
