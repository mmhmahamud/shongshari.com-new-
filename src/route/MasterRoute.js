// Configuration
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Homepage from "../Wrapper/Home/Homepage";

const MasterRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MasterRoute;
