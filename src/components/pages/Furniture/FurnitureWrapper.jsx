import React from 'react'
import styled from 'styled-components'

import FurnitureLeft from './FurnitureLeft'
import FurnitureRight from './FurnitureRight'

function FurnitureWrapper() {
  
  const FurnitureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* gap: 3rem; */
    width: 100%;
    margin-bottom: 5rem;
    @media (max-width: 992px) {
        display: flex;
        flex-direction: column-reverse;
        justify-items: center;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
  `

  return (
    <FurnitureContainer>
        <FurnitureLeft />
        <FurnitureRight />
    </FurnitureContainer>
  )
}

export default FurnitureWrapper