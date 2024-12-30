import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Footertexts from '../components/Footertexts'
import { FaFacebookF ,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import Image from '../components/Image'
import Logo from '../assets/Logo.png'



const Footer = () => {
  return (
    <div className='bg-subnavColor pt-12'>
      <Container>
        <Flex >
          <div className="w-[15%]">
          <Footertexts Fa={'MENU'}
           Pa={'Home'}
           Ta={'Shop'}
           Da={'About'}
           Ca={'Contact'}
           Ba={'Journal'}/>
          <Flex className={'gap-x-6 pt-16' }>
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
          </Flex>
            
          </div>
          <div className="w-[15%]">
            <Footertexts Fa={'SHOP'}
                         Pa={'Category 1'}
                         Ta={'Category 2'}
                         Ba={'Category 3'}
                         Da={'Category 4'}
                         Ca={'Category 5'}
            />
          </div>
          <div className="w-[15%]">
          <Footertexts Fa={'HELP'}
                         Pa={'Privacy Policy'}
                         Ta={'Terms & Conditions'}
                         Ba={'Special E-shop'}
                         Da={'Shipping'}
                         Ca={'Secure Payments'}
            />
          </div>
          <div className="w-[20%]">
          <Footertexts Fa={"(052) 611-5711 company@domain.com"}
          
                         Pa={'575 Crescent Ave. Quakertown, PA 18951'}
                         
            />
          </div>
          <div className="w-[35%] pl-[125px]">
            <Image ImgSrc={Logo} className={'w-[80px] pb-48'}/>
          <Footertexts 
                         La={'2020 Orebi Minimal eCommerce Figma Template by Adveits'}
            />
          </div>
        </Flex>
      </Container>
      
    </div>
  )
}
export default Footer
