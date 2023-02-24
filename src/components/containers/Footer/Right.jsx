import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { variables } from '../../../constants'

function Right() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50%;
    @media (min-width: 100px) and (max-width: 1100px) {
        justify-content: center;
        width: 100%;
    }
  `
  const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    @media (min-width: 100px) and (max-width: 1100px) {
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    }
  `
  const Items = styled.div`
    display: grid;
    gap: 1.62rem;
    @media (min-width: 100px) and (max-width: 1100px) {
        justify-items: center;
        width: 40%;
    }
  `
  const HeaderText = styled.span`
    font-weight: 500;
    font-size: 20px;
    color: ${variables.fifthFont};
  `
  const MainText = styled.span`
    font-weight: 400;
    font-size: 16px;
    color: ${variables.sixthFont};
    cursor: pointer;
    &:hover {
        color: ${variables.fifthFont};
        transition: all 0.2s ease-in-out;
    }
  `
  return (
    <Wrapper>
      <Container>
        <Items>
          <HeaderText>Support</HeaderText>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MainText>Faq</MainText>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MainText>Shipping & Returns</MainText>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MainText>Care guide</MainText>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <MainText>Redeem warranty</MainText>
          </motion.div>
          </Items>
        <Items>
          <HeaderText>Social Media</HeaderText>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                  <MainText>Instagram</MainText>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <MainText>Facebook</MainText>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <MainText>Twitter</MainText>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <MainText>TikTok</MainText>
                </motion.div>
            </Items>
            <Items>
                <HeaderText>About Us</HeaderText>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <MainText>Our story</MainText>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <MainText>Designer</MainText>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <MainText>Craftmanship</MainText>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <MainText>Sustainability</MainText>
                </motion.div>
            </Items>
        </Container>
    </Wrapper>
  )
}

export default Right