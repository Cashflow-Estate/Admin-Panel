import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, LogIn, Mail, User } from "react-feather";
import man from "../../../assets/images/dashboard/profile.png";

import { LI, UL, Image, P } from "../../../AbstractElements";
import CustomizerContext from "../../../_helper/Customizer";
import {
  Account,
  Admin,
  Inbox,
  LogOut,
  ChangePassword,
} from "../../../Constant";
import img from "../../../assets/images/user/1.jpg"
import { useDispatch, useSelector } from "react-redux";
import { removeUserInfo } from "../../../features/auth/authSlice";

const UserHeader = () => {
  const history = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("Emay Walter");
  const { layoutURL } = useContext(CustomizerContext);
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"));
  const userAuth=useSelector((state)=>state.auth.isAuthenticated)
  console.log("🚀 ~ UserHeader ~ userAuth:", userAuth)
  const userName=useSelector((state)=>state.auth.userInfo.userName)
  const userRole=useSelector((state)=>state.auth.role)
  console.log("🚀 ~ UserHeader ~ userName:", userName)

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL") || man);
    setName(localStorage.getItem("Name") ? localStorage.getItem("Name") : name);
  }, []);
const dispatch=useDispatch()
  const Logout = () => {
    dispatch(removeUserInfo())
    localStorage.removeItem("profileURL");
    localStorage.removeItem("token");
    localStorage.removeItem("auth0_profile");
    localStorage.removeItem("Name");
    localStorage.setItem("authenticated", false);
    history(`${process.env.PUBLIC_URL}`);
  };

  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  return (
    <li className="profile-nav onhover-dropdown pe-0 py-0">
      <div className="media profile-media">
        <Image
          attrImage={{
            className: "img-40 m-0 rounded-circle",

            src: `${userAuth ?img : img}`,
            alt: "",
          }}
        />
        <div className="media-body">
          <span>{userAuth ? userName : name}</span>
          <P attrPara={{ className: "mb-0 font-roboto" }}>
            {userRole} <i className="middle fa fa-angle-down"></i>
          </P>
        </div>
      </div>
      <UL
        attrUL={{ className: "simple-list profile-dropdown onhover-show-div" }}
      >
        <LI
          attrLI={{
            onClick: () =>
              UserMenuRedirect(`${process.env.PUBLIC_URL}/account/profile`),
            // onClick: () => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/users/userProfile/${layoutURL}`),
          }}
        >
          <User />
          <span>{Account} </span>
        </LI>
        <LI
          attrLI={{
            onClick: () =>
              UserMenuRedirect(
                `${process.env.PUBLIC_URL}/reset-password`
              ),
            // onClick: () => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/users/userProfile/${layoutURL}`),
          }}
        >
          <span>{ChangePassword} </span>
        </LI>
        {/* <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/email-app/${layoutURL}`),
          }}>
          <Mail />
          <span>{Inbox}</span>
        </LI>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`${process.env.PUBLIC_URL}/app/todo-app/todo/${layoutURL}`),
          }}>
          <FileText />
          <span>{Taskboard}</span>
        </LI> */}
        <LI attrLI={{ onClick: Logout }}>
          <LogIn />
          <span>{LogOut}</span>
        </LI>
      </UL>
    </li>
  );
};

export default UserHeader;
