import React from 'react'
import styled from 'styled-components'

import { variables } from '../../constants'

import ChooseSection from './ChooseSection'

function ChooseWrapper() {
    const ChooseWrapper = styled.nav`
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      padding: 4.5rem 9rem;
      background-color: ${variables.primaryBackground};
      color: ${variables.secondaryFont};
    @media (min-width: 100px) and (max-width: 900px) {
      padding: 2rem 1.5rem;
      height: 20rem;
    }
  `
  return (
      <ChooseWrapper>
        <ChooseSection />
      </ChooseWrapper>
  )
}

export default ChooseWrapper