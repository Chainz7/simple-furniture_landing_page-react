import React from 'react'

import styled from 'styled-components'

import { motion } from 'framer-motion'

import { images, variables } from '../../../constants'

function Left() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    &:hover {
      .nav_left-title {
        color: ${variables.primaryFunction};
        transition: all 0.2s ease-in-out;
      }
    }
  `
  const Logo = styled.img`
    width: 3rem;
    height: 3rem;
  `
  const Title = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    color: ${variables.primaryFont};
  `
  
  return (
    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }}>
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
        <Container> 
          <Logo src={images.logo} alt='logo'/>
          <Title className='nav_left-title'>Dekoor</Title>
        </Container>
      </motion.div>
    </motion.div>
  )
}

export default Left