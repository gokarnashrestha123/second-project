import React from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  // const location = useLocation();

  // Pages with black background
  // const blackPages = ["/"];
  // const isBlackPage = blackPages.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <div
      >
        {/* Navbar always visible */}
        {/* <Navbar /> */}

        {/* Page content */}
        <main className="">
          <Outlet />
        </main>

        {/* Footer always visible */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
