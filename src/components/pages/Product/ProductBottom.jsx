import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { images } from '../../../constants'
import '../../../styles.css'

import styled from "styled-components";

function ProductBottom() {

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80rem;
    height: 25rem;
    /* margin-right: 8rem; */
  `
  const SwiperImageBig = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    width: 100%;
    height: 24.7rem;
    cursor: pointer;
  `
  const SwiperImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: .75rem;
    object-fit: cover;
  `
  const SwiperButton = styled.div`
    display: ${props => (props.active ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5rem;
    left: 1.25rem;
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
    bottom: 2rem;
    left: 1.25rem;
    color: white;
  `

  const [isItemActive, setIsItemActive] = useState([false, false, false, false, false, false, false, false]);

  return (
    <Container>
      <Swiper slidesPerView={5} spaceBetween={30} className="mySwiper">
        <SwiperSlide onClick={() => setIsItemActive([true, false, false, false, false, false, false, false])}>
            <motion.div whileHover={isItemActive[0] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur1} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[0]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[0]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setIsItemActive([false, true, false, false, false, false, false, false])}>
            <motion.div whileHover={isItemActive[1] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur2} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[1]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[1]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setIsItemActive([false, false, true, false, false, false, false, false])}>
            <motion.div whileHover={isItemActive[2] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur3} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[2]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[2]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setIsItemActive([false, false, false, true, false, false, false, false])}>
            <motion.div whileHover={isItemActive[3] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur1} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[3]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[3]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setIsItemActive([false, false, false, false, true, false, false, false])}>
            <motion.div whileHover={isItemActive[4] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur2} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[4]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[4]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setIsItemActive([false, false, false, false, false, true, false, false])}>
            <motion.div whileHover={isItemActive[5] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur3} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[5]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[5]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setIsItemActive([false, false, false, false, false, false, true, false])}>
            <motion.div whileHover={isItemActive[6] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur1} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[6]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[6]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
        <SwiperSlide onClick={() => setIsItemActive([false, false, false, false, false, false, false, true])}>
            <motion.div whileHover={isItemActive[7] ? { scale: 1.1 } : {}} transition={{ duration: 0.5, type: 'tween' }}>
                <SwiperImageBig>
                    <SwiperImage src={images.fur2} />
                    <motion.div whileInView={{ opacity: [0.5, 1] }} transition={{ duration: .2 }}>
                        <SwiperButton active={isItemActive[7]}>
                            <SwiperTitle>$329</SwiperTitle>
                        </SwiperButton>
                        <SwiperSubtitle active={isItemActive[7]}>Und Chair</SwiperSubtitle>
                    </motion.div>
                </SwiperImageBig>
            </motion.div>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default ProductBottom