import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { images, variables } from '../../../constants'

function FurnitureLeft() {

  const FurnitureLeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `
  const FurnitureContainerMini = styled.div`
  
  `
  const FurnitureMiniImage = styled.img`
  
  `
  const FurnitureContainerBig = styled.div`
  
  `
  const FurnitureBigImage = styled.img`
  
  `

  return (
    <>
        <FurnitureLeftContainer>
            <FurnitureContainerMini>
                <FurnitureMiniImage src={images.furnituretest}/>
            </FurnitureContainerMini>
            <FurnitureContainerBig>
                <FurnitureBigImage src={images.furnituretest}/>
            </FurnitureContainerBig>
        </FurnitureLeftContainer>
    </>
  )
}

export default FurnitureLeft