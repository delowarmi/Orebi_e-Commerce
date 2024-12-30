import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container';
import { FaSearch ,FaUser ,FaSortDown,FaShoppingCart} from "react-icons/fa";
import Category from '../components/Category';
import User from './User';

const Header = () => {
  return (
    <div className='bg-subnavColor py-5  '>
      <Container>
      <Flex className={' sm:gap-x-0 md:gap-x-1 lg:gap-x-2 xl:gap-x-3'}>
        <div className="pt-2 sm:w-[12%] md:w-[15%] lg:w-[18%] xl:w-[20%]">
        <Category/>
        </div>
        <div className=" relative sm:w-[300px] md:w-[550px] lg:w-[700px] xl:w-[900px]">
          <input type="text"className='className = p-3 bg-white rounded-lg w-full border border-InfoColor'placeholder='Search Products' />
          <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2'/>
        </div>
        <div className=" pt-2 sm:w-[12%] md:w-[15%] lg:w-[18%] xl:w-[20%]">
        <Flex className={'justify-center'}>
                <User/>
                <FaSortDown className='ml-1'/>
                <FaShoppingCart className='ml-7'/>   
        </Flex>
        </div>
      </Flex>
      </Container>
    </div>
  )
}

export default Header
