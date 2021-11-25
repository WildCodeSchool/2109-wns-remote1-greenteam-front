import React, { useState } from 'react';
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
`

const navLinks = [
  {pageTitle: "Home", link: "/home", icon: HomeLogo},
  {pageTitle: "Projects", link: "/projects", icon: ProjectsLogo},
  {pageTitle: "Admin", link: "/admin", icon: AdminLogo}
]

export default function SideBar(): JSX.Element {
  
  const [showSmallSideBar, setShowSmallSideBar] = useState(false);

  const LeftArrowContainer = styled.div`
  display: flex;
  justify-content: ${showSmallSideBar ? 'center' : 'end'};
  padding: ${showSmallSideBar ? '10px 0 0 0' : '10px 10px 0 0'};
  cursor: pointer;
  margin-bottom: 24px;
  `;

  const SideBarContainer = styled.div`
  width: ${showSmallSideBar ? '50px' : '160px'};
  background-color: #518F97;
  height: 100vh;
  `;

  const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  height: 33px;
  margin-bottom: 25px;
  `;
  
  const toggleShowSmallSideBar = () => {
    setShowSmallSideBar(!showSmallSideBar);
    
  }

  return (
    <SideBarContainer>
      <LeftArrowContainer onClick={toggleShowSmallSideBar}>
        <img src={showSmallSideBar ? RightArrow : LeftArrow} alt="left-arrow"/>
      </LeftArrowContainer>
      <LogoContainer>
        <img src={showSmallSideBar ? HiveLogo : CollabeeLogo} alt="collabee-logo"/>
      </LogoContainer>
     
      {navLinks.map(({ pageTitle, link, icon }) => (
        <div key={link}>
        <PageTitle>{showSmallSideBar ? <img src={icon} alt="bar-icon" /> : pageTitle}</PageTitle>
        </div>
      ))}
    </SideBarContainer>
  )
}

