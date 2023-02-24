import React from 'react'

import styled from 'styled-components'

import { motion } from 'framer-motion'

import { images, variables } from '../../../constants'

function Middle() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 100px) and (max-width: 700px) {
      display: none;
    }
  `
  const MiddleUl = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    @media (min-width: 700px) and (max-width: 800px) {
      gap: 1rem;
    }
    @media (min-width: 800px) and (max-width: 900px) {
      gap: 2rem;
    }
  `
  const MiddleLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.85rem;
    cursor: pointer;
  `
  const MiddleLiTitle = styled.a`
    font-weight: 500;
    font-size: 1rem;
    color: ${variables.sevenFont};
    &:hover {
      color: ${variables.primaryFunction};
      transition: all 0.2s ease-in-out;
    }
  `
  const MiddleLiDown = styled.img`
    width: .75rem;
  `
  
  return (
    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }}>
      <Container>
        <MiddleUl>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MiddleLi><MiddleLiTitle href="#" >About us</MiddleLiTitle></MiddleLi>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MiddleLi>
              <MiddleLiTitle href="#" >Furniture</MiddleLiTitle>
              <MiddleLiDown src={images.arrowdown} />
            </MiddleLi>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MiddleLi><MiddleLiTitle href="#" >Partnerships</MiddleLiTitle></MiddleLi>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MiddleLi><MiddleLiTitle href="#" >Contact</MiddleLiTitle></MiddleLi>
          </motion.div>
        </MiddleUl>
      </Container>
    </motion.div>
  )
}

export default Middle