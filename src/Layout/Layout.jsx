import React from "react";
import SideBar from "../Components/SideBar";
import Chats from "../Components/Chats/Chats";
import Messages from "../Components/Messages/Messages";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        {/* side bar */}
        <div>
          <SideBar />
        </div>

       
          <div className="w-80 h-screen ml-12 mt-10 rounded-tl-lg border ">
            <Outlet />
          </div>
          <Messages />
       
      </div>
    </div>
  );
};

export default Layout;
