import { chakra } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image';

export const BackgroundPolygons = () => {
  return (
    <>
      <chakra.div
        display={{ base: 'none', xl: 'block' }}
        className="floating animation-delay-3000"
        pos="absolute"
        left="0px"
        top="100px"
        data-aos="fade"
        data-aos-delay="200"
      >
        <Triangle />
      </chakra.div>
      <chakra.div
        display={{ base: 'none', xl: 'block' }}
        className="floating animation-delay-4000"
        pos="absolute"
        right="-10px"
        top="30px"
        data-aos="fade"
        data-aos-delay="200"
      >
        <DemiCircle />
      </chakra.div>
    </>
  )
}

const DemiCircle = () => (
  <Image src="/purple-clouds.png" alt="Purple Clouds"  width={450} height={400} />
)
const Triangle = () => (

<Image src="/yellow-full-moon.png" alt="Yellow Moon"  width={250} height={250} />
);
