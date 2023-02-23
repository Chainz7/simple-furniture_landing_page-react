import React from 'react'
import styled from 'styled-components'
import { motion }from 'framer-motion'

import Content from './NewsletterContent'

function NewsletterWrapper() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `

  return (
    <Wrapper>
        <Content />
    </Wrapper>
  )
}

export default NewsletterWrapper