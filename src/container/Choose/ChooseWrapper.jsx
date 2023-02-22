import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
    }
  `
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: .8 }}
    >
      <ChooseWrapper>
        <ChooseSection />
      </ChooseWrapper>
    </motion.div>
  )
}

export default ChooseWrapper