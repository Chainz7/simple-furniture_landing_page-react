import React from 'react'
import styled from 'styled-components'

import { variables } from '../../../constants'

import ChooseSection from './ChooseSection'

function ChooseWrapper() {
    const ChooseContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 4rem;
      padding-bottom: 5rem;
      width: 100%;
      background-color: ${variables.primaryBackground};
        @media (min-width: 100px) and (max-width: 900px) {
        padding-top: 0;
      }
    `
    const ChooseWrapper = styled.div`
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      width: 72rem;
      color: ${variables.secondaryFont};
      @media (min-width: 100px) and (max-width: 900px) {
        padding: 2rem 1.5rem;
        width: auto;
      }
  `
  return (
    <ChooseContainer>
      <ChooseWrapper>
        <ChooseSection />
      </ChooseWrapper>
    </ChooseContainer>
  )
}

export default ChooseWrapper