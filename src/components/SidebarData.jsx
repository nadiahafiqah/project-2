import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IoIcons5 from "react-icons/io5";
// import { BsClipboard2XFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Your lines",
    path: "/lines",
    icon: <FaIcons.FaClipboardList />,
    cName: "nav-text",
  },
  // {
  //   title: "Inactive lines",
  //   path: "/inactive",
  //   icon: <BsClipboard2XFill />,
  //   cName: "nav-text",
  // },
  {
    title: "Add lines",
    path: "/new",
    icon: <IoIcons.IoMdAdd />,
    cName: "nav-text",
  },
  {
    title: "Sign out",
    path: "/",
    icon: <IoIcons5.IoLogOutOutline />,
    cName: "nav-text",
  },
];
