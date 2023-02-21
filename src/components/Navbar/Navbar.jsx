import React from 'react'
import styled from 'styled-components'

import NavbarLeft from './NavLeft'
import NavbarMiddle from './NavMiddle'
import NavbarRight from './NavRight'

function Navbar() {

  const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11rem;
    /* margin-left: 6rem;
    margin-right: 6rem; */
    height: 5rem;
    @media (min-width: 100px) and (max-width: 700px) {
      justify-content: space-between;
      gap: 0;
      padding-left: 1rem;
      padding-right: 1.25rem;
      border-bottom: 1px solid rgba(210, 215, 211, 0.3);
      box-shadow: 0 2px 4px 0 rgba(210, 215, 211, 0.3); 
    }
    @media (min-width: 700px) and (max-width: 750px) {
      justify-content: space-between;
      gap: 0;
      padding-left: .2rem;
      padding-right: .2rem;
    }
    @media (min-width: 750px) and (max-width: 900px) {
      justify-content: space-between;
      gap: 0;
      padding-left: 1rem;
      padding-right: 1.25rem;
    }
    @media (min-width: 900px) and (max-width: 1000px) {
      gap: 2rem;
    }
    @media (min-width: 1000px) and (max-width: 1100px) {
      gap: 4rem;
    }
    @media (min-width: 1100px) and (max-width: 1200px) {
      gap: 6rem;
    }
    @media (min-width: 1200px) and (max-width: 1300px) {
      gap: 8rem;
    }
  `
  
  return (
    <NavWrapper>
      <NavbarLeft />
      <NavbarMiddle />
      <NavbarRight />
    </NavWrapper>
  )
}

export default Navbar