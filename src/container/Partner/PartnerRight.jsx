import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import '../../styles.css'

function PartnerRight() {

  const PartnerRightContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5rem;
    @media (min-width: 100px) and (max-width: 750px) {
      justify-content: center;
      gap: .5rem;
    }
    @media (min-width: 750px) and (max-width: 1100px) {
      justify-content: center;
      gap: 4rem;
    }
  `
  const PartnerContainerLogo = styled.img`
    @media (min-width: 100px) and (max-width: 750px) {
      width: 70%;
    }
    @media (min-width: 750px) and (max-width: 1100px) {
      width: 85%;
    }
  `

  return (
    <>
      <PartnerRightContainer>
        <motion.div className='partner_right-motion' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <PartnerContainerLogo src={images.gusto}/>
        </motion.div>
        <motion.div className='partner_right-motion' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <PartnerContainerLogo src={images.stripe}/>
        </motion.div>
        <motion.div className='partner_right-motion' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <PartnerContainerLogo src={images.treehouse}/>
        </motion.div>
        <motion.div className='partner_right-motion' whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween' }}>
          <PartnerContainerLogo src={images.upwork}/>
        </motion.div>
      </PartnerRightContainer>
    </>
  )
}

export default PartnerRight