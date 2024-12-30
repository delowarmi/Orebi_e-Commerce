import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import AddOne from '../assets/Ad_1.jpg'
import AddTwo from '../assets/Ad_2.png'
import AddThree from '../assets/Ad_3.jpg'

const AddsOne = () => {
  return (
    <div className='py-[100px]'>
      <Container className={'sm:max-w-SmContainer sm:mx-auto md:max-w-MdContainer md:mx-auto lg:max-w-LgContainer lg:mx-auto xl:max-w-XlContainer xl:mx-auto'}>
        <Flex className={'justify-between '}>
                <div className="w-[49%]">
                        <Image ImgSrc={AddOne}/>
                </div>
                <div className="w-[49%]">
                        <Image ImgSrc={AddTwo}/>
                        <Image ImgSrc={AddThree} className={'pt-8'}/>    
                </div>
        </Flex>
      </Container>
    </div>
  )
}

export default AddsOne
