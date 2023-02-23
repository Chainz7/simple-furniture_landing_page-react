import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import ProductTop from './ProductTop'
import ProductBottom from './ProductBottom'
import { variables } from '../../../constants'

function Product() {
  const ProductContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    gap: 2.5rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: ${variables.primaryBackground};
    @media (max-width: 1200px) {
        display: none;
    }
  `
  return (
    <ProductContainer>
      <motion.div whileInView={{ x: [100, 50, 0], y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5 }}>
        <ProductTop />
        <ProductBottom />
      </motion.div>
    </ProductContainer>
  )
}

export default Product