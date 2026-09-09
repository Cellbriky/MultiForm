'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HeaderContainer,
  NavContainer,
  NavList,
  NavItem,
  NavCaption,
  NavName,
  NavMenu,
  NavNumber,
  NavLink,
} from '../../styles/Header';

const Header = () => {
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <NavContainer>
        <NavList>
          <NavItem>
            <NavLink href="/">
              <NavNumber active={pathname === '/'}>1</NavNumber>
              <NavMenu>
                <NavCaption>STEP 1</NavCaption>
                <NavName>YOUR INFO</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/step2">
              <NavNumber active={pathname === '/step2'}>2</NavNumber>
              <NavMenu>
                <NavCaption>STEP 2</NavCaption>
                <NavName>SELECT PLAN</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/step3">
              <NavNumber active={pathname === '/step3'}>3</NavNumber>
              <NavMenu>
                <NavCaption>STEP 3</NavCaption>
                <NavName>ADD-ONS</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/step4">
              <NavNumber active={pathname === '/step4'}>4</NavNumber>

              <NavMenu>
                <NavCaption>STEP 4</NavCaption>
                <NavName>SUMMARY</NavName>
              </NavMenu>
            </NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
