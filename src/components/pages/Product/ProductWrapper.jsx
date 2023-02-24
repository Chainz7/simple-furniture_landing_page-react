import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import ProductTop from './ProductTop'
import ProductBottom from './ProductBottom'
import { variables } from '../../../constants'

function Product() {
  const ProductContainer = styled(motion.div)`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 2.5rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: ${variables.primaryBackground};
    @media (max-width: 1100px) {
      width: 100%;
    }
  `
  return (
    <ProductContainer whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }}>
      <ProductTop />
      <ProductBottom />
    </ProductContainer>
  )
}

export default Product