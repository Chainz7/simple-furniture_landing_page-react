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
    width: 73rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      justify-items: center;
      align-items: center;
      gap: .5rem;
      margin-top: 0;
      margin-bottom: 2rem;
      width: 100%;
    }
  `
  const Title = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: ${variables.primaryFont};
    @media (min-width: 100px) and (max-width: 800px) {
      font-size: 16px;
    }
    @media (min-width: 800px) and (max-width: 1100px) {
      font-size: 18px;
    }
  `
  const Subtitle = styled.div`
    font-weight: 700;
    font-size: 64px;
    color: ${variables.primaryFont};
    @media (min-width: 100px) and (max-width: 800px) {
      width: 80%;
      text-align: center;
      font-size: 18px;
    }
    @media (min-width: 800px) and (max-width: 1100px) {
      width: 80%;
      text-align: center;
      font-size: 26px;
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
    @media (min-width: 100px) and (max-width: 1100px) {
      margin-top: 2rem;
      width: 100%;
      height: 100%;
    }
  `
  const EmailLeft = styled.div`
    padding: 1rem 2rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      padding: .5rem 1rem;
    }
  `
  const EmailInput = styled.input`
    font-weight: 400;
    font-size: 20px;
    color: ${variables.primaryFont};
    @media (min-width: 100px) and (max-width: 1100px) {
      font-size: 16px;
    }
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
    @media (min-width: 100px) and (max-width: 1100px) {
      padding: .5rem .75rem;
      width: 70%;
    }
  `
  const EmailIcon = styled.img`
    @media (min-width: 100px) and (max-width: 1100px) {
      width: .75rem;
      height: .75rem;
    }
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