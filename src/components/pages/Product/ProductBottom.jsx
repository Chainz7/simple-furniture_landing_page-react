import React, { useState } from 'react';
import { motion } from 'framer-motion';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

import { images } from '../../../constants'
import '../../../styles.css'

import styled from 'styled-components';

function ProductBottom() {

  const Container = styled(OwlCarousel)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80rem;
    height: 25rem;
    @media (max-width: 1100px) {
      width: 100vw;
      height: 18rem;
    }
  `
  const SwiperImageBig = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    padding: 1.2rem;
    width: 100%;
    height: 24.7rem;
    cursor: pointer;
    @media (max-width: 1100px) {
      width: 14rem;
      height: 17rem;
    }
  `
  const SwiperImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: .75rem;
    object-fit: cover;
  `
  const SwiperButton = styled(motion.div)`
    display: ${props => (props.active ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 6.1rem;
    left: 2.35rem;
    width: 4.75rem;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: .75rem;
  ` 
  const SwiperTitle = styled.span`
    font-weight: 400;
    font-size: 20px;
  `
  const SwiperSubtitle = styled.span`
    display: ${props => (props.active ? 'block' : 'none')};
    position: absolute;
    font-weight: 400;
    font-size: 34px;
    bottom: 3.1rem;
    left: 2.35rem;
    color: white;
  `

  const [isItemActive, setIsItemActive] = useState([true, false, false, false, false]);
  const options = {
    loop: false,
    margin: 30,
    items: 4,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        370:{
            items:2,
            margin: 100,
        },
        500:{
            items:3,
            margin: 160,
        },
        635: {
            items: 4,
            margin: 240,
        },
        1100:{
            items:4,
        },
    }
  };
  return (
    <Container className="owl-theme" {...options}>
      {/* Item 1 */}
      <SwiperImageBig whileHover={isItemActive ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }} onClick={() => setIsItemActive([true, false, false, false, false])}>
          <SwiperImage src={images.product1} />
            <SwiperButton whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }} active={isItemActive[0]}>
            <SwiperTitle>$329</SwiperTitle>
          </SwiperButton>
        <SwiperSubtitle active={isItemActive[0]}>Und Chair</SwiperSubtitle>
      </SwiperImageBig>
      {/* Item 2 */}
      <SwiperImageBig whileHover={isItemActive ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }} onClick={() => setIsItemActive([false, true, false, false, false])}>
          <SwiperImage src={images.product2} />
            <SwiperButton whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }} active={isItemActive[1]}>
            <SwiperTitle>$329</SwiperTitle>
          </SwiperButton>
        <SwiperSubtitle active={isItemActive[1]}>Und Chair</SwiperSubtitle>
      </SwiperImageBig>
      {/* Item 3 */}
      <SwiperImageBig whileHover={isItemActive ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }} onClick={() => setIsItemActive([false, false, true, false, false])}>
          <SwiperImage src={images.product3} />
            <SwiperButton whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }} active={isItemActive[2]}>
            <SwiperTitle>$329</SwiperTitle>
          </SwiperButton>
        <SwiperSubtitle active={isItemActive[2]}>Und Chair</SwiperSubtitle>
      </SwiperImageBig>
      {/* Item 4 */}
      <SwiperImageBig whileHover={isItemActive ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }} onClick={() => setIsItemActive([false, false, false, true, false])}>
          <SwiperImage src={images.product4} />
            <SwiperButton whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }} active={isItemActive[3]}>
            <SwiperTitle>$329</SwiperTitle>
          </SwiperButton>
        <SwiperSubtitle active={isItemActive[3]}>Und Chair</SwiperSubtitle>
      </SwiperImageBig>
      {/* Item 5 */}
      <SwiperImageBig whileHover={isItemActive ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }} onClick={() => setIsItemActive([false, false, false, false, true])}>
          <SwiperImage src={images.product1} />
            <SwiperButton whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }} active={isItemActive[4]}>
            <SwiperTitle>$329</SwiperTitle>
          </SwiperButton>
        <SwiperSubtitle active={isItemActive[4]}>Und Chair</SwiperSubtitle>
      </SwiperImageBig>
    </Container>
  )
}

export default ProductBottom