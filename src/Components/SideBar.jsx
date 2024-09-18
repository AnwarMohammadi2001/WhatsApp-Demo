import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { TbCircleDashed } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoArchiveOutline } from "react-icons/io5";

const sideItems = [
  {
    id: 1,
    title: "Chats",
    icon: <AiOutlineMessage size={20} />,
    path: "/",
  },
  {
    id: 2,
    title: "Calls",
    icon: <IoCallOutline size={20} />,
    path: "/calls",
  },
  {
    id: 3,
    title: "Status",
    icon: <TbCircleDashed size={20} />,
    path: "/status",
  },
];

const bottomItems = [
  {
    id: 4,
    title: "Starred",
    icon: <FaRegStar size={20} />,
    path: "/starred",
  },
  {
    id: 5,
    title: "Archived",
    icon: <IoArchiveOutline size={20} />,
    path: "/archived",
  },
  {
    id: 6,
    title: "Settings",
    icon: <CiSettings size={20} />,
    path: "/",
  },
  {
    id: 7,
    title: "Profile",
    icon: <CgProfile size={24} />,
    path: "/",
  },
];

const SideBar = () => {
  const [isActive, setIsActive] = useState(false); // For toggling sidebar
  const [activeItem, setActiveItem] = useState({ id: null, type: "" }); // For active state in items

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleItemClick = (id, type) => {
    setActiveItem({ id, type });
  };

  return (
    <div className="">
      <div
        className={`bg-slate-900 h-full fixed top-10 left-0 pb-10  flex flex-col px-2 z-50 transition-all duration-300 ease-in-out 
        ${isActive ? "w-56" : "w-12"} `}
      >
        <div className="text-gray-100 my-5 cursor-pointer" onClick={handleToggle}>
          {isActive ? (
            <AiOutlineClose className="h-7 w-7" />
          ) : (
            <LuMenu className="h-7 w-7" />
          )}
        </div>
        <div className=" flex-grow">
          <ul className="space-y-1">
            {sideItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleItemClick(item.id, "side")}
                className={`flex items-center text-gray-100 font-bold py-2 px-1 hover:text-gray-900 hover:bg-gray-200 rounded-md cursor-pointer ${
                  activeItem.id === item.id && activeItem.type === "side"
                    ? "bg-gray-300 text-gray-900"
                    : ""
                } ${!isActive ? "" : ""}`}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 ${
                    !isActive ? "" : ""
                  }`}
                  aria-label={item.title}
                >
                  {item.icon}
                  {isActive && <span className="text-xs">{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex-grow">
            <ul className="space-y-1">
              {bottomItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleItemClick(item.id, "bottom")}
                  className={`flex items-center text-gray-100 font-bold py-2 px-1 hover:text-gray-900 hover:bg-gray-200 rounded-md cursor-pointer ${
                    activeItem.id === item.id && activeItem.type === "bottom"
                      ? "bg-gray-300 text-gray-900"
                      : ""
                  } ${!isActive ? "" : ""}`}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 ${
                      !isActive ? "" : ""
                    }`}
                    aria-label={item.title}
                  >
                    {item.icon}
                    {isActive && <span className="text-xs">{item.title}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
