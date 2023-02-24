import React from 'react'
import styled from 'styled-components'
import { motion }from 'framer-motion'

import Content from './NewsletterContent'

function NewsletterWrapper() {
  const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
  `

  return (
    <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5, ease: 'easeInOut' }}>
      <Wrapper>
        <Content />
      </Wrapper>
    </motion.div>
  )
}

export default NewsletterWrapper