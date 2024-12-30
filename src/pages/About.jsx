import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import AboutProduct from '../components/AboutProduct'
import prod1 from '../assets/pro1.jpg'
import prod2 from '../assets/pro12.png'

const About = () => {
  return (
    <div className='py-[150px]'>
      <Container>
        <Heading as={'h3'} text={'About'} className='font-dm font-bold text-[40px]'/>
        <Heading as={'h3'} text={'Home > About'} className='font-dm font-bold text-[16px] text-InfoColor'/>

        <Flex className={'justify-between pt-[70px]'}>
          <div className="w-[49%] relative">
            <AboutProduct
            imgSrc={prod1}
            badge={'Our Brands'}/>
          </div>
          <div className="w-[49%] relative">
            <AboutProduct
            imgSrc={prod2}
            badge={'Our Stores'}/>
          </div>
        </Flex>
        <Heading as={'p'} text={'Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'} className='font-dm font-regular text-[30px] text-InfoColor pt-[70px]'/>
        <Flex className={'justify-between pt-[50px]'}>
          <div className="w-[32%]">
            <Heading as={'h4'} text={'Our Vision'} className='font-dm font-bold text-[25px]'/>
            <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.'} className='font-dm font-regular text-[13px] text-InfoColor'/>
          </div>
          <div className="w-[32%]">
            <Heading as={'h4'} text={'Our Story'} className='font-dm font-bold text-[25px]'/>
            <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.'} className='font-dm font-regular text-[13px] text-InfoColor'/>
          </div>
          <div className="w-[32%]">
            <Heading as={'h4'} text={'Our Brands'} className='font-dm font-bold text-[25px]'/>
            <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.'} className='font-dm font-regular text-[13px] text-InfoColor'/>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default About
