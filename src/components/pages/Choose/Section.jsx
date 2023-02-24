import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images, variables } from '../../../constants'

function Section() {
  const SectionHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media (min-width: 100px) and (max-width: 900px) {
      justify-content: center;
    }
  `
  const SectionHeaderTitle = styled(motion.span)`
    font-weight: 400;
    font-size: 20px;
  `
  const SectionMain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media (min-width: 600px) and (max-width: 900px) {
      justify-content: center;
    }
  `
  const SectionMainTitle = styled(motion.span)`
    font-weight: 700;
    font-size: 40px;
    @media (min-width: 100px) and (max-width: 900px) {
      text-align: center;
      font-size: 22px;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 30px;
    }
    @media (min-width: 700px) and (max-width: 900px) {
      font-size: 34px;
    }
    @media (min-width: 800px) and (max-width: 900px) {
      font-size: 38px;
    }
  `
  const SectionFooter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 3rem;
    @media (min-width: 100px) and (max-width: 600px) {
      flex-direction: column;
      gap: 1rem;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      gap: 1rem;
    }
  `
  const SectionFooterContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 33%;
    height: 100%;
    @media (min-width: 100px) and (max-width: 900px) {
      justify-content: flex-start;
      width: 100%;
    }
  `
  const SectionFooterBox = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${variables.secondaryFunctionOpacity};
    border-radius: .5rem;
  `
  const SectionFooterIcon = styled.img`
    padding: .5rem .55rem;
    width: 16px;
    height: 16px;
  `
  const SectionFooterFive = styled.span`
    padding: .3rem .7rem;
    font-weight: 700;
    font-size: 19px;
    cursor: default;
  `
  const SectionFooterTitle = styled(motion.span)`
    font-weight: 700;
    font-size: 17px;
    cursor: default;
    @media (min-width: 100px) and (max-width: 900px) {
      font-size: 16px;
    }
    @media (min-width: 600px) and (max-width: 830px) {
      font-size: 13px;
    }
    @media (min-width: 830px) and (max-width: 900px) {
      font-size: 16px;
    }
    @media (min-width: 900px) and (max-width: 1000px) {
      font-size: 13px;
    }
    @media (min-width: 1000px) and (max-width: 1100px) {
      font-size: 15px;
    }
  `
  return (
    <>
      <SectionHeader>
        <SectionHeaderTitle whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }}>WHY  US?</SectionHeaderTitle>
      </SectionHeader>
      <SectionMain>
        <SectionMainTitle whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }}>We care about details and the quality of our products</SectionMainTitle>
      </SectionMain>
      <SectionFooter>
        <SectionFooterContainer whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }}>
          <SectionFooterBox whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterIcon src={images.chooseSearch}/>
          </SectionFooterBox>
          <SectionFooterTitle whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }} whileHover={{ scale: 1.1 }}>MANUFACTURED WITH QUALITY MATERIALS</SectionFooterTitle>
        </SectionFooterContainer>
        <SectionFooterContainer whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }}>
          <SectionFooterBox whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterFive>5</SectionFooterFive>
          </SectionFooterBox>
          <SectionFooterTitle whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }} whileHover={{ scale: 1.1 }}>5 YEARS OF WARRANTY FOR EACH PRODUCT</SectionFooterTitle>
        </SectionFooterContainer>
        <SectionFooterContainer whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }}>
          <SectionFooterBox whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterIcon src={images.chooseback}/>
          </SectionFooterBox>
          <SectionFooterTitle whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }} whileHover={{ scale: 1.1 }}>20 YEARS OF EXPERTISE</SectionFooterTitle>
        </SectionFooterContainer>
      </SectionFooter>
    </>
  )
}
  
export default Section