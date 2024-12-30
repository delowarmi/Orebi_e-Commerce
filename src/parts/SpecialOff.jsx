import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Product from '../parts/Product'
import product1 from '../assets/pro5.png'
import product2 from '../assets/pro6.png'
import product3 from '../assets/pro9.png'
import product4 from '../assets/pro11.png'

const SpecialOff = () => {
  return (
    <div className='pt-[50px] pb-[100px]'>
        <Container>
                <Heading as={'h3'} text={'Special Offers'} className='font-dm font-bold text-[40px] pb-[20px]'/>
                <Flex className={'justify-between'}>
                   <div className="w-[24%]">
                        <Product 
                        imgSrc={product1}
                        badge={'New'} />
                        <Flex className={'justify-between'}>
                            <Heading as={'h3'} text={'Basic Crew Neck Tee'} className='font-dm font-bold text-[20px] '/>
                            <Heading as={'p'} text={'$44.00'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                        </Flex>
                        <Heading as={'p'} text={'Black'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                   </div>
                   <div className="w-[24%]">
                        <Product 
                        imgSrc={product2}
                        badge={'New'} />
                        <Flex className={'justify-between'}>
                            <Heading as={'h3'} text={'Basic Crew Neck Tee'} className='font-dm font-bold text-[20px] '/>
                            <Heading as={'p'} text={'$44.00'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                        </Flex>
                        <Heading as={'p'} text={'Black'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                   </div>
                   <div className="w-[24%]">
                        <Product 
                        imgSrc={product3}
                        badge={'New'} />
                        <Flex className={'justify-between'}>
                            <Heading as={'h3'} text={'Basic Crew Neck Tee'} className='font-dm font-bold text-[20px] '/>
                            <Heading as={'p'} text={'$44.00'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                        </Flex>
                        <Heading as={'p'} text={'Black'} className='font-dm font-regular text-[16px] text-InfoColor'/>
                   </div>
                   <div className="w-[24%]">
                        <Product 
                        imgSrc={product4}
                        badge={'New'} />
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

export default SpecialOff
