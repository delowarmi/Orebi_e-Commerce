import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { Menu, X } from 'lucide-react'



const Navbar = () => {  
const [isOpen, setIsOpen] = useState(false);
  
const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
     
    <div className='py-[30px] mobile:py-[10px] android:py-[10px] taplet:py-[20px] sticky top-0 bg-white z-10'>
        <Container>
         <Flex className={'mobile:justify-between items-center'}>
        <div className="w-LogoW android:w-[18%] mobile:w-[20%]">
                <Link to='/'><img src={Logo} alt="" /></Link>

        </div>
        <div className='w-[15%]'>
              <span className='hidden mobile:block' onClick={toggleNavbar}>
                {isOpen ? <X/> : <Menu/>}
              </span>
              </div>
        <div className="w-[60%]">
                <ul>
                <Flex className={"gap-x-10 w-MenuW block android:w-[70%] pl-8 android:pl-0 sticky mobile:absolute mobile:hidden mobile:top-[45px] mobile:left-[50%] mobile:bg-white mobile:z-10 mobile:translate-x-[-50%] mobile:pl-0 mobile:text-center mobile:w-full"}>
                        <Link to='/'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold  '>Home</li></Link>
                        <Link to='/shop'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Shop</li></Link>
                        <Link to='/about'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>About</li></Link>
                        <Link to='/contact'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Contact</li></Link>
                        <Link to='/jurnal'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Jurnal</li></Link>    
                </Flex>
                </ul>
                {isOpen &&(
                        <Flex className={"w-MenuW hidden android:w-[70%] pl-8 android:pl-0 sticky mobile:absolute mobile:block mobile:top-[45px] mobile:left-[50%] mobile:bg-white mobile:z-10 mobile:translate-x-[-50%] mobile:pl-0 mobile:text-center mobile:transition-all mobile:ease-in mobile:duration-500 mobile:w-full"}>
                        <Link to='/'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold  '>Home</li></Link>
                        <Link to='/shop'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Shop</li></Link>
                        <Link to='/about'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>About</li></Link>
                        <Link to='/contact'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Contact</li></Link>
                        <Link to='/jurnal'><li className='font-dm text-navColor hover:text-navHColor hover:font-bold'>Jurnal</li></Link>    
                        </Flex>
                )}
        </div>
        </Flex>
        </Container>
    </div>
   
  )
}


export default Navbar
