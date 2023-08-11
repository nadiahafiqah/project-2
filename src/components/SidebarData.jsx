import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { BsClipboard2XFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Active lines",
    path: "/active",
    icon: <FaIcons.FaClipboardList />,
    cName: "nav-text",
  },
  {
    title: "Inactive lines",
    path: "/inactive",
    icon: <BsClipboard2XFill />,
    cName: "nav-text",
  },
  {
    title: "Add lines",
    path: "/new",
    icon: <IoIcons.IoMdAdd />,
    cName: "nav-text",
  },
  {
    title: "Sign out",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
