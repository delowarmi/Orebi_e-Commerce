import React from 'react'
import Image from '../components/Image'
import Badge from '../components/Badge'

const AboutProduct = ({imgSrc,badge}) => {
  return (
    <>
     <Image ImgSrc={imgSrc} className={'w-full'}/>
     <Badge badgeName={badge} className={'absolute bottom-10 left-1/2 -translate-x-1/2   '}/>
    </>
  )
}

export default AboutProduct
