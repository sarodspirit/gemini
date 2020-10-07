import React from "react";
import "../src/scss/tailwind.css";
const Layout = ({ children }) => {
  return <div className="flex w-screen bg-gray-200 p-5"><div className="m-auto">{children}</div></div>;
};

export default Layout;
