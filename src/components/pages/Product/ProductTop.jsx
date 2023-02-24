import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { variables } from '../../../constants'

function ProductTop() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;
    margin-bottom: 2.5rem;
    width: 73rem;
    @media (max-width: 992px) {
      margin-left: 0;
      width: auto;
    }
  `
  const Left = styled.div`
    display: grid;
    width: 100%;
  `
  const LeftTitle = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: ${variables.secondaryFont};
    `
  const LeftSubtitle = styled.span`
    font-weight: 700;
    font-size: 48px;
    color: ${variables.secondaryFont};
    `
  const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%;
    `
  const RightButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9rem;
    height: 3rem;
    background-color: ${variables.secondaryFunction};
    border-radius: .75rem;
    cursor: pointer;
    &:hover {
        background-color: ${variables.secondaryFunctionHover};
        transition: all 0.2 ease-in-out;
    }
  `
  const RightTitle = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: ${variables.primaryFont};
  `
  return (
    <Container>
        <Left>
            <LeftTitle>OUR PRODUCTS</LeftTitle>
            <LeftSubtitle>This month’s best seller</LeftSubtitle>
        </Left>
        <Right>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                <RightButton>
                    <RightTitle>See More</RightTitle>
                </RightButton>
            </motion.div>
        </Right>
    </Container>
  )
}

export default ProductTop