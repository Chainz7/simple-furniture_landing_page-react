import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images, variables } from '../../../constants'

function NewsletterContent() {

  const Container = styled.span`
    display: grid;
    gap: 2.25rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 80rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      justify-items: center;
      align-items: center;
      margin-top: 0;
      width: auto;
    }
  `
  const Title = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: ${variables.primaryFont};
  `
  const Subtitle = styled.div`
    font-weight: 700;
    font-size: 64px;
    color: ${variables.primaryFont};
    @media (min-width: 100px) and (max-width: 800px) {
      text-align: center;
      font-size: 32px;
    }
    @media (min-width: 800px) and (max-width: 1100px) {
      text-align: center;
      font-size: 44px;
    }
  `
  const Email = styled.div`
    display: flex;
    @media (min-width: 100px) and (max-width: 1100px) {
      justify-content: center;
      align-items: center;
    }
  `
  const EmailButton = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `
  const EmailLeft = styled.div`
    padding: 1rem 2rem;
  `
  const EmailInput = styled.input`
    font-weight: 400;
    font-size: 20px;
    color: ${variables.primaryFont};
  `
  const EmailRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: ${variables.secondaryFunction};
    border-radius: 0 .75rem .75rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${variables.secondaryFunctionHover};
        transition: all 0.2s ease-in-out;
    }
  `
  const EmailIcon = styled.img`
    
  `

  return (
    <Container>
        <Title>LIMITED DEALS</Title>
        <Subtitle>Become a member and get 10% off of your first purchase</Subtitle>
        <Email>
          <EmailButton>
            <EmailLeft>
              <EmailInput placeholder='Enter your email here'/>
            </EmailLeft>
            <EmailRight>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                <EmailIcon src={images.vector}/>
              </motion.div>
            </EmailRight>
          </EmailButton>
        </Email>
    </Container>
  )
}

export default NewsletterContent