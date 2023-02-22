import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images, variables } from '../../../constants'

function HeroLeft() {
  const HeroLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 63.5%;
    @media (min-width: 100px) and (max-width: 900px) {
      width: 100%;
    }
  `
  const HeroLeftContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    margin-top: 10rem;
    margin-bottom: 6rem;
    margin-left: 4.125rem;
    margin-right: 4rem;
    width: 657px;
    @media (min-width: 100px) and (max-width: 600px) {
      margin: 2rem 0 2rem 0;
      width: 100%;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      margin: 2rem 0 2rem 0;
      width: 100%;
    }
  `
  const HeroContainerTitle = styled.span`
    font-weight: 700;
    font-size: 4.25rem;
    color: ${variables.primaryFont};
    @media (min-width: 100px) and (max-width: 600px) {
      width: 340px;
      font-size: 2rem;
      text-align: center;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      width: 540px;
      font-size: 3.25rem;
      text-align: center;
    }
    @media (min-width: 900px) and (max-width: 1100px) {
      width: 540px;
      font-size: 3.5rem;    
    }
  `
  const HeroContainerTitleSpan = styled.span`
    color: ${variables.tertiaryFont};
  `
  const HeroContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    @media (min-width: 100px) and (max-width: 600px) {
      flex-direction: column;
      gap: .75rem;
    }
  `
  const HeroContainerSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    background-color: ${variables.secondaryFunction};
    border-radius: .75rem;
    cursor: pointer;
    &:hover {
      background-color: ${variables.secondaryFunctionHover};
      transition: all 0.3s ease-in-out;
      .nav_right-title {
        color: ${variables.sevenFont};
        transition: all 0.3s ease-in-out;
      }
    }
  `
  const HeroSearchIcon = styled.img`
    padding: 0 0 0 3.46rem;
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 1.5rem 0 1.5rem 3rem;
    }
    @media (min-width: 900px) and (max-width: 1100px) {
      padding: 1.5rem 0 1.5rem 2.5rem;
    }
  `
  const HeroSearchTitle = styled.span`
    padding: 1.5rem 3.46rem 1.5rem 0;
    font-weight: 400;
    font-size: 21px;
    color: ${variables.primaryFunction};
    @media (min-width: 100px) and (max-width: 600px) {
      font-size: 16px;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 1.5rem 3rem 1.5rem 0;
      font-size: 18px;
    }
    @media (min-width: 900px) and (max-width: 1100px) {
      padding: 1.5rem 2.5rem 1.5rem 0;
      font-size: 18px;
    }
  `
  const HeroContainerWatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    border: 1px solid black;
    border-radius: .75rem;
    cursor: pointer;
    &:hover {
      border: 1px solid ${variables.secondaryFunctionHover};
      transition: all 0.3s ease-in-out;
      .nav_right-title {
        color: ${variables.sevenFont};
        transition: all 0.3s ease-in-out;
      }
    }
  `
   const HeroWatchIcon = styled.img`
    padding: 0 0 0 3.46rem;
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 1.5rem 0 1.5rem 3rem;
    }
    @media (min-width: 900px) and (max-width: 1100px) {
      padding: 1.5rem 0 1.5rem 2.5rem;
    }
   `
   const HeroWatchTitle = styled.span`
    padding: 1.5rem 3.46rem 1.5rem 0;
    font-weight: 400;
    font-size: 21px;
    color: ${variables.primaryFunction};
    @media (min-width: 100px) and (max-width: 600px) {
      padding: 1.3rem 4.7rem 1.3rem 0;
      font-size: 16px;
    }
    @media (min-width: 600px) and (max-width: 900px) {
      padding: 1.3rem 3rem 1.3rem 0;
      font-size: 18px;
    }
    @media (min-width: 900px) and (max-width: 1100px) {
      padding: 1.3rem 2.5rem 1.3rem 0;
      font-size: 18px;
    }
   `
  return (
    <HeroLeft>
        <motion.div
             whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
             transition={{ duration: .8 }}
        >
        <HeroLeftContainer>
            <HeroContainerTitle>The kind of <HeroContainerTitleSpan>furniture</HeroContainerTitleSpan> you have been looking for</HeroContainerTitle>
            <HeroContainerButton>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <HeroContainerSearch>
                        <HeroSearchIcon src={images.herosearch}/>
                        <HeroSearchTitle>SEARCH&nbsp;CATALOG</HeroSearchTitle>
                    </HeroContainerSearch>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <HeroContainerWatch>
                        <HeroWatchIcon src={images.herowatch}/>
                        <HeroWatchTitle>WATCH&nbsp;VIDEOS</HeroWatchTitle>
                    </HeroContainerWatch>
                </motion.div>
            </HeroContainerButton>
        </HeroLeftContainer>
        </motion.div>
    </HeroLeft>
  )
}

export default HeroLeft