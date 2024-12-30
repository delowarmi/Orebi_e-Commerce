import React from 'react'
import Flex from '../components/Flex';
import { HiMenuAlt2 } from "react-icons/hi";
import Heading from '../components/Heading';
import { useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

const Category = () => {

const [hidden, setHidden] = useState(false);
  return (
    <div className='w-full relative'>
        <OutsideClickHandler onOutsideClick ={() => { setHidden(false); }} >
                <Flex className={'items-center'}>
                <HiMenuAlt2 className='cursor-pointer' onClick={() => setHidden(!hidden)} />
                <div onClick={() => setHidden(!hidden)}>
                <Heading as={'h3'} text={'Shop by Category'} className='font-dms text-[16px] pl-2 text-navHColor file:      cursor-pointer relative'/>
                </div>
                {hidden && (
                  <div className='bg-white p-4 w-[230px] absolute left-[0px] top-[30px] rounded-md'>
                      <ul className='font-dms text-[16px] text-TextColor'>
                        <li>
                           <Heading as={'p'} text={'Category 1'}className='border-b pb-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 2'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 3'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 4'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                           <Heading as={'p'} text={'Category 5'}className='border-b py-5 bottom-BorderInfoColor font-dm text-navColor'/>
                        </li>
                      </ul>  
                  </div>
                 )}
                </Flex>
        </OutsideClickHandler>
    </div>
  )
}
export default Category
