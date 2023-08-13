import React from "react";
import { Outlet } from "react-router-dom";
import Navbarpanel from "./Navbarpanel";
import { Provider } from "react-redux";
import rstore from "../store/rstore"; // Make sure the import path is correct

const RootLayout = () => {
  return (
    <>
      <Provider store={rstore}> {/* Use 'store' prop instead of 'rstore' */}
        <Navbarpanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
