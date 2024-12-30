import React from 'react'
import Heading from '../components/Heading'

const Footertexts = ({Fa,Pa,Ta,Ba,Ca,Da,La}) => {
  return (
    <>
    <Heading as={'h3'} text={Fa} className="font-dm font-bold text-[16px] text-navHColor pb-[15px]"/>
    <Heading as={'p'} text={Pa} className="font-dm text-[14px] text-InfoColor py-[5px]"/>
    <Heading as={'p'} text={Ta} className="font-dm text-[14px] text-InfoColor py-[5px]"/>
    <Heading as={'p'} text={Ba} className="font-dm text-[14px] text-InfoColor py-[5px]"/>
    <Heading as={'p'} text={Ca} className="font-dm text-[14px] text-InfoColor py-[5px]"/>
    <Heading as={'p'} text={Da} className="font-dm text-[14px] text-InfoColor py-[5px]"/>
    <Heading as={'p'} text={La} className="font-dm text-[12px] text-InfoColor py-[5px]"/>
   
    </>
  )
}

export default Footertexts
