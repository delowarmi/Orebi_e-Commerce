import React from 'react'
import Image from '../components/Image'
import Badge from '../components/Badge'
import Flex from '../components/Flex'
import Paragraph from '../components/Paragraph'
import { FaCodeCompare } from "react-icons/fa6";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Heading from '../components/Heading'


const Product = ({badge, imgSrc, para, para2, para3, para4, para5, para6}) => {
  return (
    <>
    <div className='relative'>
    <Image ImgSrc={imgSrc} className={'w-full'}/>
    <Badge badgeName={badge} className={'absolute top-4  left-5 '}/>
    
    </div>
    <div className='bg-white p-5 invisible group-hover:visible absolute w-full top-[43%] left-0'>
      <Flex className={'justify-end gap-x-3 items-center pb-4'}>
        <Paragraph text={para}/><FaHeart/>
      </Flex >
      <Flex className={'justify-end gap-x-3 items-center pb-2'}>
      <Paragraph text={para2}/> <FaCodeCompare/>
      </Flex>
      <Flex className={'justify-end gap-x-3 items-center'}>
          <Paragraph text={para3}/> <FaShoppingCart/>
      </Flex>
      </div>
      <div>
      <Flex className={'justify-between items-center mt-[30px]'}>
         <Heading as={'h5'} text={para4} className={'font-dms font-bold text-xl text-TextHColor'} />
         <Heading as={'h6'} text={para5} className={'font-dms text-[16px] text-TextColor'} />
      </Flex>
       <Heading as={'h6'} text={para6} className={'font-dms text-[16px] text-TextColor mt-[20px]'} />
    </div>
    </>
  )
}

export default Product

