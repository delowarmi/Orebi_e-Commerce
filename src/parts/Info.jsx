import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from '../components/Heading';
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiRotateCcw } from "react-icons/fi";

const Info = () => {
  return (
   <div className='shadow-lg '>
    <Container className={'sm:max-w-SmContainer sm:mx-auto md:max-w-MdContainer md:mx-auto lg:max-w-LgContainer lg:mx-auto xl:max-w-XlContainer xl:mx-auto'}>
        <Flex className={'justify-between items-center py-6'}>
                <div className="w-1/3">
                <Flex className={'gap-x-2 items-center'}>
                <PiNumberTwoBold className='text-[22px]'/>
                <Heading as={'p'} text={'Two years warranty'} className='text-[18px] font-dm font-semibold text-navHColor'/>
                </Flex>
                </div>
                <div className="w-1/3">
                <Flex className={'gap-x-2 items-center'}>
                <LiaShippingFastSolid className='text-[22px]'/>
                <Heading as={'p'} text={'Free shipping'} className='text-[18px] font-dm font-semibold text-navHColor'/>
                </Flex>
                </div>
                <div className="w-1/3">
                <Flex className={'gap-x-2 items-center'}>
                <FiRotateCcw className='text-[22px]'/>
                <Heading as={'p'} text={'Free shipping'} className='text-[18px] font-dm font-semibold text-navHColor'/>    
                </Flex>
                </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Info
