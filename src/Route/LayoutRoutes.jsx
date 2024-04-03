import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoutes, UserRoutes } from "./Routes";
import AppLayout from "../Layout/Layout";
import { useSelector } from "react-redux";

const LayoutRoutes = () => {
  const Role = useSelector((state) => state.auth.role);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  

  return (
    <>
      <Routes>
        {Role === "Admin"
          ? AdminRoutes.map(({ path, Component }, i) => (
              <Fragment key={i}>
                <Route element={<AppLayout />} key={i}>
                  <Route path={path} element={Component} />
                </Route>
              </Fragment>
            ))
          : UserRoutes.map(({ path, Component }, i) => (
              <Fragment key={i}>
                <Route element={<AppLayout />} key={i}>
                  <Route path={path} element={Component} />
                </Route>
              </Fragment>
            ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;
