import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";

function Routers() {
  

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default Routers;
