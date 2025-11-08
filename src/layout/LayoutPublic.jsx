import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid p-0" style={{ paddingTop: "80px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutPublic;
