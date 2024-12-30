import React from 'react'
import Flex from '../components/Flex';
import {FaUser } from "react-icons/fa";
import Heading from '../components/Heading';
import { useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom'
const User = () => {
const [hidden, setHidden] = useState(false);
  return (
      <div className=' relative'>
        <OutsideClickHandler onOutsideClick ={() => { setHidden(false); }} >
                <Flex className={'items-center'}>
                <FaUser className='cursor-pointer' onClick={() => setHidden(!hidden)} />
                <div onClick={() => setHidden(!hidden)}>
                </div>
                {hidden && (
                  <div className='bg-white pl-3 w-[100px] absolute left-[0px] top-[25px] rounded-md'>
                      <ul className='font-dm text-[24px] text-TextColor'>
                        <li>
                          <Link to='/login'> <Heading as={'p'} text={'Login'}className='border-b pb-2 bottom-BorderInfoColor font-dm font-bold text-navColor '/></Link>
                          <Link to='/signup'>  <Heading as={'p'} text={'Sign up'}className='border-b pb-2 bottom-BorderInfoColor font-dm font-bold text-navColor '/></Link>
                           
                        </li>
                      </ul>  
                  </div>
                 )}
                </Flex>
        </OutsideClickHandler>
    </div>
  )
}

export default User
