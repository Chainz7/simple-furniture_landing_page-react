import React from 'react'

import styled from 'styled-components'

import { motion } from 'framer-motion'

import { images, variables } from '../../../constants'

function NavRight() {
  const NavRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `
  const NavRightIcon = styled.img`
    cursor: pointer;
    @media (min-width: 700px) {
      display: none;
    }
  `
  const NavRightSignup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${variables.secondaryFunction};
    border-radius: .5rem;
    cursor: pointer;
    &:hover {
      background-color: ${variables.secondaryFunctionHover};
      transition: all 0.2s ease-in-out;
      .nav_right-title {
        color: ${variables.sevenFont};
        transition: all 0.2s ease-in-out;
      }
    }
    @media (min-width: 100px) and (max-width: 700px) {
      display: none;
    }
  `
  const NavRightSignupTitle = styled.span`
    padding: .75rem 1.5rem;
    font-weight: 500;
    font-size: 16px;
    color: ${variables.primaryFont};
  `
  const NavRightCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${variables.primaryFunction};
    border-radius: .5rem;
    cursor: pointer;
    &:hover {
      background-color: ${variables.primaryFunctionHover};
      transition: all 0.2s ease-in-out;
    }
    @media (min-width: 100px) and (max-width: 700px) {
      display: none;
    }
  `
  const NavRightCartLogo = styled.img`
    width: 1rem;
    height: 1.25rem;
    padding: .75rem .95rem; 
  `
  return (
    <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <NavRight> 
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <NavRightIcon src={images.menuicon}/>
          <NavRightSignup>
            <NavRightSignupTitle className='nav_right-title'>Sign Up</NavRightSignupTitle>
          </NavRightSignup>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <NavRightCart>
            <NavRightCartLogo src={images.cart}/>
          </NavRightCart>
        </motion.div>
      </NavRight>
    </motion.div>
  )
}

export default NavRight