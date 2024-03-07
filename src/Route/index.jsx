import React, { Fragment } from 'react';
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../Layout/Loader";
import Signin from "../myPages/myAuth/Signin";
// setup fake backend
const Routers = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path={'/'} element={<Signin />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Routers;