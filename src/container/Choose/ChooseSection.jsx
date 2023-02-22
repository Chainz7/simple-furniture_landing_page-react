import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images, variables } from '../../constants'

function ChooseSection() {
  const ChooseSectionHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media (min-width: 100px) and (max-width: 900px) {
      justify-content: center;
    }
  `
  const SectionHeaderTitle = styled.span`
    font-weight: 400;
    font-size: 20px;
  `
  const ChooseSectionMain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  `
  const SectionMainTitle = styled.span`
    font-weight: 700;
    font-size: 40px;
    @media (min-width: 100px) and (max-width: 900px) {
      text-align: center;
    }
  `
  const ChooseSectionFooter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 3rem;
  `
  const SectionFooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 33%;
    height: 100%;
  `
  const SectionFooterBox = styled.div`
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
  const SectionFooterTitle = styled.span`
    font-weight: 700;
    font-size: 17px;
    cursor: default;
  `
  return (
    <>
      <ChooseSectionHeader>
        <SectionHeaderTitle>WHY CHOOSE US?</SectionHeaderTitle>
      </ChooseSectionHeader>
      <ChooseSectionMain>
        <SectionMainTitle>We care about details and the quality of our products</SectionMainTitle>
      </ChooseSectionMain>
      <ChooseSectionFooter>
        <SectionFooterContainer>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterBox>
              <SectionFooterIcon src={images.chooseSearch}/>
            </SectionFooterBox>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterTitle>MANUFACTURED WITH QUALITY MATERIALS</SectionFooterTitle>
          </motion.div>
        </SectionFooterContainer>
        <SectionFooterContainer>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterBox>
              <SectionFooterFive>5</SectionFooterFive>
            </SectionFooterBox>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterTitle>5 YEARS OF WARRANTY FOR EACH PRODUCT</SectionFooterTitle>
          </motion.div>
        </SectionFooterContainer>
        <SectionFooterContainer>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterBox>
              <SectionFooterIcon src={images.chooseback}/>
            </SectionFooterBox>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
            <SectionFooterTitle>20 YEARS OF EXPERTISE</SectionFooterTitle>
          </motion.div>
        </SectionFooterContainer>
      </ChooseSectionFooter>
    </>
  )
}
  
export default ChooseSection