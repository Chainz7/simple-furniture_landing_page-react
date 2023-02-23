import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images } from '../../../constants'

function FurnitureLeft() {

  const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    width: 65%;
    @media (max-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      overflow: hidden;
    }
    @media (min-width: 2560px) {
      margin-left: 20rem;
    }
  `
  const Left = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    width: 30%;
    @media (max-width: 992px) {
      justify-content: center;
      align-items: center;
      width: auto;
    }
  `
  const LeftMini = styled.div`
    position: relative;
    width: 100%;
    height: 32.4rem;
    border-radius: .75rem;
    @media (max-width: 992px) {
      width: 6rem;
      height: 8rem;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      width: 12rem;
      height: 10rem;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      width: 13.3rem;
      height: 11rem;
    }
    `
  const MiniImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: .75rem;
  `
  const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;
    @media (max-width: 992px) {
      justify-content: center;
      align-items: center;
      width: auto;
    }
  `
  const RightBig = styled.div`
    position: relative;
    width: 100%;
    height: 32.4rem;
    border-radius: .75rem;
    @media (max-width: 992px) {
      width: 6rem;
      height: 8rem;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      width: 12rem;
      height: 10rem;
    }
    @media (min-width: 768px) and (max-width: 992px) {
      width: 13.3rem;
      height: 11rem;
    }
  `
  const BigImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: .75rem;
  `

  return (
    <Container>
      <Left>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <LeftMini>
            <MiniImage src={images.fur1}/>
          </LeftMini>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <LeftMini>
            <MiniImage src={images.fur2}/>
          </LeftMini>
        </motion.div>
      </Left>
      <Right>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <RightBig>
            <BigImage src={images.fur3}/>
          </RightBig>
        </motion.div>
      </Right>
    </Container>
  )
}

export default FurnitureLeft