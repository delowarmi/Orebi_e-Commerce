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
      <Flex className={' mobile:gap-x-0 android:gap-x-1 taplet:gap-x-2 laptop:gap-x-3'}>
        <div className="pt-2 mobile:w-[12%] android:w-[15%] taplet:w-[18%] laptop:w-[20%]">
        <Category/>
        </div>
        <div className="w-full relative mobile:w-[300px] android:w-[550px] taplet:w-[700px] laptop:w-[1200px]">
          <input type="text"className='className = p-3 bg-white rounded-lg w-full border border-InfoColor'placeholder='Search Products' />
          <FaSearch className='absolute right-4 top-1/2 -translate-y-1/2'/>
        </div>
        <div className=" pt-2 mobile:w-[12%] android:w-[15%] taplet:w-[18%] laptop:w-[20%]">
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
