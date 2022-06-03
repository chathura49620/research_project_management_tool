import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./styles.css";

const Nav = styled.div`
  background: #fdfefe;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #5F8575;
  width: 280px;
  height:100vh;
  border-style: solid;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  @media only screen and (max-width: 1920px) {
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  }
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: " black" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h4 >Research Project Management Tool</h4>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              localStorage.removeItem("logged");
              window.location.href = "/";
            }
          }
          >
            Log out
          </button>
          <br></br>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
