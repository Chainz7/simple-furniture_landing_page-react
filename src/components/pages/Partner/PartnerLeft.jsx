import React from 'react'
import styled from 'styled-components'

import { variables } from '../../../constants'

function PartnerLeft() {

  const PartnerLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${variables.primaryFont};
    @media (min-width: 100px) and (max-width: 750px) {
      justify-content: center;
      align-items: center;
    }
    @media (min-width: 750px) and (max-width: 1100px) {
      justify-content: center;
      align-items: center;
    }
  `
  const PartnerContainerTitle = styled.span`
    font-weight: 700;
    font-size: 96px;
    @media (min-width: 100px) and (max-width: 750px) {
      font-size: 24px;
    }
    @media (min-width: 750px) and (max-width: 1100px) {
      font-size: 48px;
    }
  `
  const PartnerContainerSubTitle = styled.span`
    font-weight: 400;
    font-size: 24px;
    @media (min-width: 100px) and (max-width: 750px) {
      font-size: 14px;
    }
    @media (min-width: 750px) and (max-width: 1100px) {
      font-size: 18px;
    }
  `

  return (
    <>
      <PartnerLeftContainer>
        <PartnerContainerTitle>25+</PartnerContainerTitle>
        <PartnerContainerSubTitle>PARTNERED BRANDS</PartnerContainerSubTitle>
      </PartnerLeftContainer>
    </>
  )
}

export default PartnerLeft