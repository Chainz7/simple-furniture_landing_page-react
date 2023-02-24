import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

function FooterWrapper() {
  const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8.25rem;
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    @media (min-width: 100px) and (max-width: 1100px) {
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 4rem;
    }
  `
  return (
    <Container whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }}>
        <FooterLeft />
        <FooterRight />
    </Container>
  )
}

export default FooterWrapper