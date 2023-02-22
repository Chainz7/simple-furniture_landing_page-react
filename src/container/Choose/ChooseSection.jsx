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
    @media (min-width: 600px) and (max-width: 900px) {
      justify-content: center;
    }
  `
  const SectionMainTitle = styled.span`
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
  const ChooseSectionFooter = styled.div`
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
  const SectionFooterContainer = styled.div`
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
      <ChooseSectionHeader>
        <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
          <SectionHeaderTitle>WHY CHOOSE US?</SectionHeaderTitle>
        </motion.div>
      </ChooseSectionHeader>
      <ChooseSectionMain>
        <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
          <SectionMainTitle>We care about details and the quality of our products</SectionMainTitle>
        </motion.div>
      </ChooseSectionMain>
      <ChooseSectionFooter>
        <SectionFooterContainer>
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
              <SectionFooterBox>
                <SectionFooterIcon src={images.chooseSearch}/>
              </SectionFooterBox>
            </motion.div>
          </motion.div>
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
              <SectionFooterTitle>MANUFACTURED WITH QUALITY MATERIALS</SectionFooterTitle>
            </motion.div>
          </motion.div>
        </SectionFooterContainer>
        <SectionFooterContainer>
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
              <SectionFooterBox>
                <SectionFooterFive>5</SectionFooterFive>
              </SectionFooterBox>
            </motion.div>
          </motion.div>
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
              <SectionFooterTitle>5 YEARS OF WARRANTY FOR EACH PRODUCT</SectionFooterTitle>
            </motion.div>
          </motion.div>
        </SectionFooterContainer>
        <SectionFooterContainer>
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
              <SectionFooterBox>
                <SectionFooterIcon src={images.chooseback}/>
              </SectionFooterBox>
            </motion.div>
          </motion.div>
          <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
              <SectionFooterTitle>20 YEARS OF EXPERTISE</SectionFooterTitle>
            </motion.div>
          </motion.div>
        </SectionFooterContainer>
      </ChooseSectionFooter>
    </>
  )
}
  
export default ChooseSection