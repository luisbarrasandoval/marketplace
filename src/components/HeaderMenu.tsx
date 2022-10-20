import { FC } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { menu } from "../data/menu";
import Logo from "./Logo";

import { FaShoppingBag, FaSearch } from "react-icons/fa";


const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const HeaderMenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MenuItem = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: #3a3a3a;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const HeaderMenu:FC = () => {
  return <HeaderMenuContainer style={{
  }}>
    <Logo />
    <HeaderMenuItems>
      {menu.map((item) => (
        <MenuItem key={item.id} to={item.path}>{item.name}</MenuItem>
      ))}
    </HeaderMenuItems>
    <HeaderIconsContainer>
      <FaSearch size={20} />
      <FaShoppingBag size={20} />
    </HeaderIconsContainer>
  </HeaderMenuContainer>
}

export default HeaderMenu;