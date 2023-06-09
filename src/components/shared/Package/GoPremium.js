import React from "react";
import { useNavigate } from "react-router-dom";

const GoPremium = ({ setShowPopup, message }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        onClick={(e) => setShowPopup(false)}
        className="fixed w-full h-full top-0 left-0 inset-0 z-10 bg-black/50 cursor-pointer"
      ></div>
      <div className="rounded sm:max-w-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] w-[400px] space-y-4 bg-white p-6 fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <p className="text-white font-semibold">
          {message}
        </p>
        <button onClick={()=>navigate("/packages")} className="bg-white font-bold text-lg px-4 py-2 rounded hover:bg-gray-100">
          Go Premium
        </button>
      </div>
    </>
  );
};

export default GoPremium;
