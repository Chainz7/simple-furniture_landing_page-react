import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import PartnerLeft from './PartnerLeft'
import PartnerRight from './PartnerRight'

function PartnerWrapper() {
  
  const PartnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9rem;
    margin-left: 3rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      flex-direction: column;
      gap: 1rem;
      margin-left: 0;
      margin-top: 2rem;
      margin-bottom: 2.5rem;
    }
    @media (min-width: 1100px) and (max-width: 1300px) {
      gap: 1.25rem;
    }
  `

  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
      <PartnerWrapper>
        <PartnerLeft />
        <PartnerRight />
      </PartnerWrapper>
    </motion.div>
  )
}

export default PartnerWrapper