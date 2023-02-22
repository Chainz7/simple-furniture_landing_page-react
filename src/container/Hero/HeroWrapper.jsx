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
  `
  return (
    <HeroWrapper>
        <HeroLeft />
        <HeroRight />
    </HeroWrapper>
  )
}

export default HeroWrapper