import React from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  width: 150px;
  background-color: #518F97;
  height: 100vh;
`;

const navLinks = [
  {pageTitle: "Home", link: "/home"},
  {pageTitle: "Projects", link: "/projects"},
  {pageTitle: "Admin", link: "/admin"}
]

export default function SideBar(): JSX.Element {
  return (
    <SideBarContainer>
      {navLinks.map(({ pageTitle }) => (
        <div>
          <p>{pageTitle}</p>
        </div>
      ))}
    </SideBarContainer>
  )
}

