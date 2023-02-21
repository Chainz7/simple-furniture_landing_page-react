import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { variables } from '../../constants'

function HeroLeft() {
  const HeroLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 63.5%;
  `
  const HeroLeftContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    width: 657px;
    margin-top: 10rem;
    margin-bottom: 6rem;
    margin-left: 9.125rem;
    margin-right: 4rem;
  `
  const HeroContainerTitle = styled.span`
    font-weight: 700;
    font-size: 4.25rem;
    color: ${variables.primaryFont};
  `
  const HeroContainerTitleSpan = styled.span`
    color: ${variables.tertiaryFont};
  `
  const HeroContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
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
  `
  const HeroSearchTitle = styled.span`
    padding: 1.5rem 3.46rem 1.5rem 0;
    font-weight: 400;
    font-size: 21px;
    color: ${variables.primaryFunction};
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
   `
   const HeroWatchTitle = styled.span`
    padding: 1.5rem 3.46rem 1.5rem 0;
    font-weight: 400;
    font-size: 21px;
    color: ${variables.primaryFunction};
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
                        <HeroSearchTitle>SEARCH CATALOG</HeroSearchTitle>
                    </HeroContainerSearch>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
                    <HeroContainerWatch>
                        <HeroWatchIcon src={images.herowatch}/>
                        <HeroWatchTitle>WATCH VIDEOS</HeroWatchTitle>
                    </HeroContainerWatch>
                </motion.div>
            </HeroContainerButton>
        </HeroLeftContainer>
        </motion.div>
    </HeroLeft>
  )
}

export default HeroLeft