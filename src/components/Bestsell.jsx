import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Product from '../parts/Product'
import product1 from '../assets/pro1.jpg'
import product2 from '../assets/pro2.png'
import product3 from '../assets/pro3.png'
import product4 from '../assets/pro4.png'
import Heading from '../components/Heading'
const Bestsell = () => {
  return (
    <div className='pb-[50px]'>
      <Container>
         <Heading as={'h3'} text={'Our Bestsellers'} className='font-dm text-[36px] font-bold pb-[20px]'/>
        <Flex className={'justify-between'}>
                <div className="w-[24%]">
                        <Product
                        imgSrc={product1}
                        badge={'New'}
                        />
                        <Flex className={'justify-between'}>
                            <Heading as={'h3'} text={'Basic Crew Neck Tee'} className='font-dm font-bold text-[20px] '/>
                            <Heading as={'p'} text={'$44.00'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                        </Flex>
                        <Heading as={'p'} text={'Black'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                </div>
                <div className="w-[24%]">
                        <Product
                        imgSrc={product2}
                        badge={'-10%'}
                        />
                        <Flex className={'justify-between'}>
                            <Heading as={'h3'} text={'Basic Crew Neck Tee'} className='font-dm font-bold text-[20px] '/>
                            <Heading as={'p'} text={'$44.00'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                        </Flex>
                        <Heading as={'p'} text={'Black'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                </div>
                <div className="w-[24%]">
                        <Product
                        imgSrc={product3}
                        badge={'New'}
                        />
                        <Flex className={'justify-between'}>
                            <Heading as={'h3'} text={'Basic Crew Neck Tee'} className='font-dm font-bold text-[20px] '/>
                            <Heading as={'p'} text={'$44.00'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                        </Flex>
                        <Heading as={'p'} text={'Black'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                </div>
                <div className="w-[24%]">
                        <Product
                        imgSrc={product4}
                        badge={'-10%'}
                        />
                        <Flex className={'justify-between'}>
                            <Heading as={'h3'} text={'Basic Crew Neck Tee'} className='font-dm font-bold text-[20px] '/>
                            <Heading as={'p'} text={'$44.00'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                        </Flex>
                        <Heading as={'p'} text={'Black'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Bestsell
