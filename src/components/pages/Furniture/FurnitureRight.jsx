import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { variables } from '../../../constants'

function FurnitureRight() {

  const Container = styled.div`
    display: grid;
    justify-items: flex-start;
    align-items: center;
    gap: 2rem;
    margin-left: 3%;
    padding-right: 3%;
    width: 35%;
    @media (max-width: 992px) {
      display: grid;
      justify-items: center;
      align-items: center;
      gap: .5rem;
      width: 90%;
    }
  `
  const Header = styled.div`

  `
  const HeaderTitle = styled.span`
    font-weight: 400;
    font-size: 24px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      font-size: 18px;
    }
  `
  const Middle = styled.div`
    width: 30rem;
    @media (max-width: 992px) {
      text-align: center;
      width: 60%;
      margin-bottom: 1rem;
    }
  `
  const MiddleTitle = styled.span`
    font-weight: 700;
    font-size: 48px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      font-size: 22px;
    }
  `
  const Footer = styled.div`
    
  `
  const FooterItem = styled.div`
    display: grid;
    padding: 1.25rem 1rem;
    width: 25.3rem;
    background-color: ${props => (props.isOpen ? variables.secondaryFunction : 'none')};
    cursor: pointer;
    @media (max-width: 992px) {
      margin-right: 0;
      width: auto;
      margin-left: 0;
    }
  `
  const ItemTitle = styled.span`
    font-weight: 700;
    font-size: 18px;
  `
  const ItemSubtitle = styled.span`
    display: ${props => (props.active ? 'block' : 'none')};
    padding-top: .75rem;
    font-weight: 400;
    font-size: 14px;
  `

  const [isItemActive, setIsItemActive] = useState([false, true, false, false]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Categories</HeaderTitle>
      </Header>
      <Middle>
        <MiddleTitle>Furniture Sets Recommendations</MiddleTitle>
      </Middle>
      <Footer>
        <motion.div whileInView={isItemActive[0] ? { opacity: [0.5, 1] } : {}} transition={{ duration: .5 }}>
          <FooterItem onClick={() => setIsItemActive([true, false, false, false])} isOpen={isItemActive[0]}>
            <motion.div 
              whileInView={isItemActive[0] ? { scale: 0.95 } : {}}
              transition={{ duration: .5 }}>
              <ItemTitle>Bedroom</ItemTitle>
              <ItemSubtitle active={isItemActive[0]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam incidunt consequuntur aspernatur autem, ducimus veritatis nam ea accusamus dolor facere.</ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
        <motion.div whileInView={isItemActive[1] ? { opacity: [0.5, 1] } : {}} transition={{ duration: .5 }}>
          <FooterItem onClick={() => setIsItemActive([false, true, false, false])} isOpen={isItemActive[1]}>
            <motion.div 
              whileInView={isItemActive[1] ? { scale: 0.95 } : {}}
              transition={{ duration: .5 }}>
              <ItemTitle>Living Room</ItemTitle>
              <ItemSubtitle active={isItemActive[1]}>Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
        <motion.div whileInView={isItemActive[2] ? { opacity: [0.5, 1] } : {}} transition={{ duration: .5 }}>
          <FooterItem onClick={() => setIsItemActive([false, false, true, false])} isOpen={isItemActive[2]}>
            <motion.div 
              whileInView={isItemActive[2] ? { scale: 0.95 } : {}}
              transition={{ duration: .5 }}>
              <ItemTitle>Home Office</ItemTitle>
              <ItemSubtitle active={isItemActive[2]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati laborum necessitatibus et dicta ipsa impedit dignissimos nesciunt magni placeat?</ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
        <motion.div whileInView={isItemActive[3] ? { opacity: [0.5, 1] } : {}} transition={{ duration: .5 }}>
          <FooterItem onClick={() => setIsItemActive([false, false, false, true])} isOpen={isItemActive[3]}>
            <motion.div 
              whileInView={isItemActive[3] ? { scale: 0.95 } : {}}
              transition={{ duration: .5 }}>
              <ItemTitle>Gaming Room</ItemTitle>
              <ItemSubtitle active={isItemActive[3]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati laborum necessitatibus et dicta ipsa impedit dignissimos nesciunt magni placeat?</ItemSubtitle>
            </motion.div>
          </FooterItem>
        </motion.div>
      </Footer>
      </Container>
  )
}

export default FurnitureRight