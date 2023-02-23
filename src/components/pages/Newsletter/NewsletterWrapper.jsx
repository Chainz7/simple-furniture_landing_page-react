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
  `

  return (
    <motion.div whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: .5 }}>
      <Wrapper>
        <Content />
      </Wrapper>
    </motion.div>
  )
}

export default NewsletterWrapper