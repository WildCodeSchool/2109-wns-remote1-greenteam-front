import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LeftArrow from '../assets/icons/left-arrow.svg';
import RightArrow from '../assets/icons/right-arrow.svg';
import HiveLogo from '../assets/icons/hive.svg';
import CollabeeLogo from '../assets/icons/app-logo.svg';
import HomeLogo from '../assets/icons/home-logo.svg';
import ProjectsLogo from '../assets/icons/projects-logo.svg';
import AdminLogo from '../assets/icons/admin-logo.svg';

const LogoContainer = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  height: 41px;
`;

const navLinks = [
  { pageTitle: 'Home', link: '/', icon: HomeLogo },
  { pageTitle: 'Projects', link: '/projects', icon: ProjectsLogo },
  { pageTitle: 'Admin', link: '/admin', icon: AdminLogo },
];

const LeftArrowContainer = styled('div')<{showSmallSideBar: boolean}>`
    display: flex;
    justify-content: ${props => props.showSmallSideBar ? 'center' : 'end'};
    padding: ${props => props.showSmallSideBar ? '10px 0 0 0' : '10px 10px 0 0'};
    cursor: pointer;
    margin-bottom: 24px;
  `;

  const SideBarContainer = styled('div')<{showSmallSideBar: boolean}>`
    width: ${props => props.showSmallSideBar ? '50px' : '160px'};
    background-color: #518f97;
    height: 100vh;
  `;

  const PageTitle = styled('div')<{active: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    height: 33px;
    margin-bottom: 25px;
    background-color: ${props => props.active ? 'white': null};
    color: ${props => props.active ? '#518F97': null};
    border-radius: ${props => props.active ? '10px 0 0 10px': null};
  `;

export default function SideBar(): JSX.Element {
  const [showSmallSideBar, setShowSmallSideBar] = useState(false);

  const {pathname} = useLocation();
  
  const toggleShowSmallSideBar = () => {
    setShowSmallSideBar(!showSmallSideBar);
  };

  return (
    <SideBarContainer showSmallSideBar={showSmallSideBar} >
      <LeftArrowContainer showSmallSideBar={showSmallSideBar} onClick={toggleShowSmallSideBar}>
        <img src={showSmallSideBar ? RightArrow : LeftArrow} alt="left-arrow" />
      </LeftArrowContainer>
      <LogoContainer>
        <img
          src={showSmallSideBar ? HiveLogo : CollabeeLogo}
          alt="collabee-logo"
        />
      </LogoContainer>

      {navLinks.map(({ pageTitle, link, icon }) => (
        <div key={link}>
          <NavLink to={link} style={{textDecoration: 'none'}}>
            <PageTitle active={link === pathname}>
              {showSmallSideBar ? <img style={{fill: (link === pathname) ? '#518F97': 'white'}} src={icon} alt="bar-icon" /> : pageTitle}  
            </PageTitle>
          </NavLink>
        </div>
      ))}
    </SideBarContainer>
  );
}