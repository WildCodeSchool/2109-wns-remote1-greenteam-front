/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import  { HomeIcon, ClipboardListIcon, LockClosedIcon } from '@heroicons/react/solid';
import LeftArrow from '../assets/icons/left-arrow.svg';
import RightArrow from '../assets/icons/right-arrow.svg';
import HiveLogo from '../assets/icons/hive.svg';
import CollabeeLogo from '../assets/icons/app-logo.svg';



export default function SideBar(): JSX.Element {


const navLinks = [
  { pageTitle: 'Home', link: '/homepage', icon: <HomeIcon className="w-8 h-8" /> },
  { pageTitle: 'Projects', link: '/projects', icon: <ClipboardListIcon className="w-8 h-8" /> },
  { pageTitle: 'Admin', link: '/admin', icon: <LockClosedIcon className="w-8 h-8" /> },
];

  const [showSmallSideBar, setShowSmallSideBar] = useState(false);

  const {pathname} = useLocation();
  
  const toggleShowSmallSideBar = () => {
    setShowSmallSideBar(!showSmallSideBar);
  };

  return (
    <div className={`${showSmallSideBar ? "w-50 transform duration-200" : "w-160 transform duration-400"} h-screen bg-cyan`} >
      <div className={`${showSmallSideBar ? "justify-center pt-10" : "justify-end pt-10 pr-10"} flex mb-24 cursor-pointer`} onClick={toggleShowSmallSideBar}>
        <img src={showSmallSideBar ? RightArrow : LeftArrow} alt="left-arrow" />
      </div>
      <div className="flex justify-center mb-70 h-41">
        <img
          src={showSmallSideBar ? HiveLogo : CollabeeLogo}
          alt="collabee-logo"
        />
      </div>

      {navLinks.map(({ pageTitle, link, icon }) => (
        <div key={link}>
          <NavLink to={link}>
            <div className={`${link === pathname && "bg-white text-cyan rounded-l-xsmall"} flex items-center justify-center text-white font-bold cursor-pointer h-33 mb-25`}>
              {showSmallSideBar ? icon : pageTitle}
       
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}