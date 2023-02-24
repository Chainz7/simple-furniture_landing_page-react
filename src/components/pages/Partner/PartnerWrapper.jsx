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
    gap: 10rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
      margin-bottom: 4rem;
    }
  `

  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5 }}>
      <PartnerWrapper>
        <PartnerLeft />
        <PartnerRight />
      </PartnerWrapper>
    </motion.div>
  )
}

export default PartnerWrapper