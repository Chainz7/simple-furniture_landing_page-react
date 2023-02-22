import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import FurnitureLeft from './FurnitureLeft'
import FurnitureRight from './FurnitureRight'

function FurnitureWrapper() {
  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .8 }}>
      <FurnitureWrapper>
        <FurnitureLeft />
        <FurnitureRight />
      </FurnitureWrapper>
    </motion.div>
  )
}

export default FurnitureWrapper
