import React, { useState } from "react";
import ContactCircles from "../components/ContactCircle";
import {
  FiUser,
  FiHome,
  FiFile,
  FiLayout,
  FiMessageCircle,
  FiServer,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const inactiveMenuIconCss = "stroke-gray-300 h-6 w-6 my-auto";
const activeMenuIconCss = "stroke-blue-500 h-6 w-6 my-auto";

const menus = [
  {
    title: "Home",
    iconInactive: <FiHome className={inactiveMenuIconCss} />,
    iconActive: <FiHome className={activeMenuIconCss} />,
  },
  {
    title: "About",
    iconInactive: <FiUser className={inactiveMenuIconCss} />,
    iconActive: <FiUser className={activeMenuIconCss} />,
  },
  {
    title: "Resume",
    iconInactive: <FiFile className={inactiveMenuIconCss} />,
    iconActive: <FiFile className={activeMenuIconCss} />,
  },
  {
    title: "Protfolio",
    iconInactive: <FiLayout className={inactiveMenuIconCss} />,
    iconActive: <FiLayout className={activeMenuIconCss} />,
  },
  {
    title: "Services",
    iconInactive: <FiServer className={inactiveMenuIconCss} />,
    iconActive: <FiServer className={activeMenuIconCss} />,
  },
  {
    title: "Contact",
    iconInactive: <FiMessageCircle className={inactiveMenuIconCss} />,
    iconActive: <FiMessageCircle className={activeMenuIconCss} />,
  },
];

const MenueTile = ({ title, iconActive, iconInactive, active }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      className="flex flex-row my-4 pl-8"
      onPointerEnter={() => {
        setHovering(!hovering);
      }}
      onPointerLeave={() => {
        setHovering(!hovering);
      }}
    >
      {active || hovering ? iconActive : iconInactive}
      <span
        className={`mx-3 ${
          active || hovering ? "text-white" : "text-gray-300"
        }  my-auto cursor-pointer`}
      >
        {title}
      </span>
    </div>
  );
};

const SideBar = ({ sidebar, profilePic }) => {
  return (
    <div
      className={`${
        sidebar ? "w-72" : "w-0"
      } duration-300 h-screen bg-slate-800`}
    >
      <div className={`${!sidebar ? "hidden" : ""} flex flex-col`}>
        <img
          src={profilePic}
          alt="profile pic"
          className="mx-auto mt-8 w-1/2 h-1/2 rounded-full border-8 border-slate-600"
        />
        <span className="my-4 text-2xl text-white font-semibold text-center mx-auto cursor-pointer">
          Mozharul Haq
        </span>
        <ContactCircles
          contacts={[
            {
              avatar: (
                <FaLinkedinIn className=" fill-white h-6 w-6 my-auto mx-auto" />
              ),
              link: "s",
            },
            {
              avatar: (
                <FaGithub className="fill-white h-6 w-6 my-auto mx-auto" />
              ),
              link: "s",
            },
            {
              avatar: (
                <FaFacebookF className="fill-white h-6 w-6 my-auto mx-auto" />
              ),
              link: "s",
            },
          ]}
        />
        <div className="flex flex-col mt-6">
          {menus.map((menu, i) => (
            <MenueTile
              key={i}
              active={i === 2}
              iconActive={menu.iconActive}
              iconInactive={menu.iconInactive}
              title={menu.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
