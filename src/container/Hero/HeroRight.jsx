import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { variables } from '../../constants'

function HeroRight() {
  const HeroRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    width: 36.5%;
    height: 100%;
  `
  const HeroRightImage = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
  `
  const HeroRightContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: .25rem;
    position: absolute;
    top: 64%;
  `
  const HeroRightInfo = styled.div`
    margin-left: 2rem;
    width: 5rem;
    background-color: rgba(255,255,255, 0.5);
    border-radius: .75rem;
  `
  const HeroInfoTitle = styled.div`
    padding: .6rem .9rem;
    font-weight: 400;
    font-size: 21px;
    color: ${variables.sevenFont};
    opacity: .8;
  `
  const HeroRightSofa = styled.div`
    margin-left: 2rem;
    font-weight: 400;
    font-size: 42px;
    color: #FFFFFF;
  `
  const HeroRightButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: .5rem;
    margin-left: 2rem;
    width: 10.5rem;
    background-color: ${variables.primaryBackground};
    border-radius: .75rem;
    cursor: pointer;
    &:hover {
      background-color: ${variables.primaryBackgroundHover};
      transition: all 0.2s ease-in-out;
    }
  `
  const HeroButtonTitle = styled.div`
    padding: .8rem 0 .8rem 1.1rem;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
  `
  const HeroButtonIcon = styled.img`
    margin-left: 1.1rem;
    width: 6px;
    height: 10px;
  `
  return (
    <HeroRight>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <HeroRightImage src={images.heroimage}/>
        <HeroRightContainer>
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
            <HeroRightInfo>
              <HeroInfoTitle>$329</HeroInfoTitle>
            </HeroRightInfo>
            </motion.div>
            <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
              <HeroRightSofa>Pösht Sofa</HeroRightSofa>
            </motion.div>
            <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}transition={{ duration: .8 }}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                <HeroRightButton>
                  <HeroButtonTitle>VIEW DETAILS</HeroButtonTitle>
                  <HeroButtonIcon src={images.arrowright}/>
                </HeroRightButton>
              </motion.div>
          </motion.div>
        </HeroRightContainer>
      </motion.div>
    </HeroRight>
  )
}

export default HeroRight