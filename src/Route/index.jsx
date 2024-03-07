// import React, { Fragment } from "react";
// import { Suspense } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import Signin from "../myPages/myAuth/Signin";
// import ForgetPassword from "../myPages/myAuth/ForgetPassword";
// import ResetPassword from "../myPages/myAuth/ResetPassword";
// import Signup from "../myPages/myAuth/Signup";
// import AppLayout from "../Layout/Layout";
// import { routes } from "./Routes";
// // setup fake backend
// const Routers = () => {

//   return (
//     <BrowserRouter basename={"/"}>
//       <Suspense fallback={<Loader />}>
//         <Routes>

//           <Route exact path={"/"} element={<Signin />} />

//           <Route path={"/signup"} element={<Signup />} />
//           <Route path={"/forgot-password"} element={<ForgetPassword />} />
//           <Route path={"/reset-password"} element={<ResetPassword />} />
          
//           {/* <Route path={"/users/all-customers"} element={<AllCustomers />} /> */}
//           <Routes>
//         {routes.map(({ path, Component }, i) => (
//           <Fragment key={i}>
//           <Route element={<AppLayout />} key={i}>
//             <Route path={path} element={Component} />
//           </Route>
//           </Fragment>
//         ))}
//       </Routes>
       
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// };
// export default Routers;
// import React, { Fragment } from "react";
// import { Suspense } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import Signin from "../myPages/myAuth/Signin";
// import ForgetPassword from "../myPages/myAuth/ForgetPassword";
// import ResetPassword from "../myPages/myAuth/ResetPassword";
// import Signup from "../myPages/myAuth/Signup";
// import AppLayout from "../Layout/Layout";
// import { routes } from "./Routes";

// const Routers = () => {
//   return (
//     <BrowserRouter basename={"/"}>
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           <Route exact path={"/"} element={<Signin />} />
//           <Route path={"/signup"} element={<Signup />} />
//           <Route path={"/forgot-password"} element={<ForgetPassword />} />
//           <Route path={"/reset-password"} element={<ResetPassword />} />
//           {/* Your dynamic routes */}
//           {routes.map(({ path, Component }, i) => (
            
//             <Route key={i} path={path} element={<AppLayout><Component /></AppLayout>} />
//           ))}
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// };
// export default Routers;
// import React, { Fragment } from "react";
// import { Suspense } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import Signin from "../myPages/myAuth/Signin";
// import ForgetPassword from "../myPages/myAuth/ForgetPassword";
// import ResetPassword from "../myPages/myAuth/ResetPassword";
// import Signup from "../myPages/myAuth/Signup";
// import AppLayout from "../Layout/Layout";
// import { routes } from "./Routes";
// // setup fake backend
// const Routers = () => {

//   return (
//     <BrowserRouter basename={"/"}>
//       <Suspense fallback={<Loader />}>
//         <Routes>

//           <Route exact path={"/"} element={<Signin />} />

//           <Route path={"/signup"} element={<Signup />} />
//           <Route path={"/forgot-password"} element={<ForgetPassword />} />
//           <Route path={"/reset-password"} element={<ResetPassword />} />
          
//           {/* <Route path={"/users/all-customers"} element={<AllCustomers />} /> */}
//           <Routes>
//         {routes.map(({ path, Component }, i) => (
//           <Fragment key={i}>
//           <Route element={<AppLayout />} key={i}>
//             <Route path={path} element={Component} />
//           </Route>
//           </Fragment>
//         ))}
//       </Routes>
       
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// };
// export default Routers;
import React, { Fragment } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../Layout/Loader";
import Signin from "../myPages/myAuth/Signin";
import ForgetPassword from "../myPages/myAuth/ForgetPassword";
import ResetPassword from "../myPages/myAuth/ResetPassword";
import Signup from "../myPages/myAuth/Signup";
import LayoutRoutes from "./LayoutRoutes";

const Routers = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path={"/"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/forgot-password"} element={<ForgetPassword />} />
          <Route path={"/reset-password"} element={<ResetPassword />} />
          <Route path={`/*`} element={<LayoutRoutes/>} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Routers;
