import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background: ${p => p.theme.headerBackgroundColor};
  box-sizing: border-box;
  display: flex;
  height: 60px;
  padding: 0 16px;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Menu = styled.nav`
  background: ${p => p.theme.headerBackgroundColor};
  border-bottom: 3px solid ${p => p.theme.secondaryColor};
  box-sizing: border-box;
  display: ${p => p.open ? 'block' : 'none'};
  font-family: 'Open Sans';
  left: 0;
  padding: 8px;
  position: absolute;
  top: 60px;
  width: 100%;

  @media(min-width: 768px) {
    background: none;
    border-bottom: none;
    display: flex;
    left: initial;
    margin: auto 0 auto auto;
    position: relative;
    top: initial;
    width: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return (
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
}

const StyledLink = styled(Link)`
  box-sizing: border-box;
  color: ${p => p.theme.headerFontColor};
  display: block;
  font-weight: ${p => p.isActive ? 'bold' : 'normal'};
  margin: 0 auto;
  padding: 5px 8px;
  text-align: center;
`;

const MobileMenuIcon = styled.div`
  cursor: pointer;
  margin: auto 0 auto auto;
  min-width: 25px;
  padding: 5px;
  width: 25px;

  @media(min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
      <HeaderWrapper>
        <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
          <span role="img" aria-label="hamburger-button">🍔</span>
        </MobileMenuIcon>
        <Menu open={menuOpen}>
          <StyledLink
            to="/categories"
            isActive={pathname === '/' || pathname === '/categories'}
          >
            Categories
          </StyledLink>
          <StyledLink
            to="/recipesList"
            isActive={pathname === '/recipesList'}
          >
            Recipes List
          </StyledLink>
          <StyledLink
            to="/recipe"
            isActive={pathname === '/recipe'}
          >
            Recipe
          </StyledLink>
        </Menu>
      </HeaderWrapper>
  )
};