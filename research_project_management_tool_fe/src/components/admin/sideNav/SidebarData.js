import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Register a Member",
    path: "/registerMember",
    icon: <IoIcons.IoMdTime />,
  },

  {
    title: "view members",
    path: "/viewMembers",
    icon: <IoIcons.IoMdColorFill />,
  },
  {
    title: "Research Groups",
    path: "/groups",
    icon: <IoIcons.IoMdPaperPlane />,
  },

  {
    title: "documents",
    path: "/documents",
    icon: <IoIcons.IoMdPaperPlane />,
  },
  {
    title: "uploaded",
    path: "/uploaded",
    icon: <IoIcons.IoMdPaperPlane />,
  },
  {
    title: "My Profile",
    path: "/myprofile",
    icon: <IoIcons.IoMdPerson />,
  },
];
