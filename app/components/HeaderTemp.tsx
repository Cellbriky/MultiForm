"use client"
import React from 'react'
import { HeaderContainer, NavContainer, NavList, NavItem } from '../styles/Header'
import Link from 'next/link'
const header = () => {
  return (
    <HeaderContainer  >
      <NavContainer>
        <NavList>
          <NavItem><Link href="/">1</Link></NavItem>
          <NavItem><Link href="/step2">2</Link></NavItem>
          <NavItem><Link href="/step3">3</Link></NavItem>
          <NavItem><Link href="/step4">4</Link></NavItem>
        </NavList>
      </NavContainer>
    </HeaderContainer>
  )
}
export default header