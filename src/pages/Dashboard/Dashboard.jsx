import React from "react";
import { cv1, cv2, cv3 } from "../../assets/Images/Images";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-5   h-screen m-5">
      <Link
        to={"/cv1"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv2"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv2} alt="" />
      </Link>

      <Link
        to={"/cv3"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv3} alt="" />
      </Link>
      <Link
        to={"/cv4"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
      <Link
        to={"/cv5"}
        className="col-span-3 cursor-pointer hover:scale-105 duration-500"
      >
        <img src={cv1} alt="" />
      </Link>
    </div>
  );
};

export default Dashboard;
