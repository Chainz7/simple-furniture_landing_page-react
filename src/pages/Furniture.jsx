import React from 'react'
import { motion } from 'framer-motion'

import { FurnitureContent } from '../components/'

function Furniture() {
  return (
    <motion.div whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5 }}>
      <FurnitureContent />
    </motion.div>
  )
}

export default Furniture
