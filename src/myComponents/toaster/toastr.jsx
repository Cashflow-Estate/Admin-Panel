import React, { ReactElement, ReactNode } from "react";
import { toast as rtoast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import Cross from "../crossSVG/Cross";

const ToasterContainer = (props) => {
  const { className } = props;
  return (
    <ToastContainer
      className={`${className} mahad`}
      position="bottom-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      limit={3}
      {...props}
    />
  );
};

const Element = ({
  Icon,
  message,
  title: customTitle,
}) => {
  return (
    <div className="toaster-wrap">
      {/* <span className="icon">{<Cross />}</span> */}
      <span className="title-text"> {customTitle}</span>
      <div className="description">{message}</div>
    </div>
  );
};

const error = (
  message,
  title,
  options,
  Icon
) => {
  rtoast.error(
    <Element
      type="error"
      message={message}
      title={title}
      Icon={<Cross fill="#f00" />}
    />,
    options
  );
};

const info = (
  message,
  title,
  Icon,
  options
) => {
  rtoast.info(
    <Element type="info" message={message} title={title} Icon={<Cross />} />,
    options
  );
};

const success = (
  message,
  title,
  Icon,
  options
) => {
  rtoast.success(
    <Element
      type="success"
      message={message}
      title={title}
      Icon={<img src="images/tick.png" alt="tick.svg" />}
    />,
    options
  );
};

const warning = (
  message,
  title,
  Icon,
  options
) => {
  rtoast.warning(
    <Element
      type="success"
      message={message}
      title={title}
      Icon={<Cross />}
    />,
    options
  );
};

const save = (
  message,
  title,
  Icon,
  options
) => {
  rtoast.success(
    <Element
      message={message}
      title={title || "Recipe Saved"}
      Icon={Icon ?? <img src="images/SaveRecipe.png" alt="heart" />}
    />,
    options
  );
};

const follow = (
  message,
  title,
  Icon,
  options
) => {
  rtoast.success(
    <Element
      message={message}
      title={title || "Cook Followed"}
      Icon={<img src="images/userfollow.png" alt="userfollow.svg" />}
    />,
    options
  );
};

export const toast = { error, info, success, warning, save, follow };

export default styled(ToasterContainer)`
`;
