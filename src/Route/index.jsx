
import React, { Fragment } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../Layout/Loader";
import Signin from "../myPages/myAuth/Signin";
import ForgetPassword from "../myPages/myAuth/ForgetPassword";
import ResetPassword from "../myPages/myAuth/ResetPassword";
import Signup from "../myPages/myAuth/Signup";
import LayoutRoutes from "./LayoutRoutes";
import OTP from "../myPages/myAuth/OTP";

const Routers = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path={"/"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/otp-verification"} element={<OTP />} />
          <Route path={"/forgot-password"} element={<ForgetPassword />} />
          <Route path={"/reset-password"} element={<ResetPassword />} />
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Routers;
