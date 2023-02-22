import React from 'react'
import styled from 'styled-components'

import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

function HeroWrapper() {
    const HeroWrapper = styled.nav`
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
    @media (min-width: 100px) and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    /* 
    @media (min-width: 700px) and (max-width: 750px) {
      justify-content: space-between;
      gap: 0;
      padding-left: .2rem;
      padding-right: .2rem;
    }
    @media (min-width: 750px) and (max-width: 900px) {
      justify-content: space-between;
      gap: 0;
      padding-left: 1rem;
      padding-right: 1.25rem;
    }
    @media (min-width: 900px) and (max-width: 1000px) {
      gap: 2rem;
    }
    @media (min-width: 1000px) and (max-width: 1100px) {
      gap: 4rem;
    }
    @media (min-width: 1100px) and (max-width: 1200px) {
      gap: 6rem;
    }
    @media (min-width: 1200px) and (max-width: 1300px) {
      gap: 8rem;
    } */
  `
  return (
    <HeroWrapper>
        <HeroLeft />
        <HeroRight />
    </HeroWrapper>
  )
}

export default HeroWrapper