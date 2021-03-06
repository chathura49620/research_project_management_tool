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
    title: "Group Registration ",
    path: "/stuGroup-registration",
    icon: <IoIcons.IoMdPerson />,
  },
  {
    title: "Topic Registration",
    path: "/topic-registration",
    icon: <IoIcons.IoMdPlay />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  }, 
  
  {
    title: "Supervisor Approval ",
    path: "/email-sending",
    icon: <IoIcons.IoMdPerson />,
  },
  {
    title: "Document Submission",
    path: "/document-substu",
    icon: <IoIcons.IoMdPlay />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },  
  {
    title: "Profile",
    path: "/student-profile-details",
    icon: <IoIcons.IoMdPerson />,
  },
];
