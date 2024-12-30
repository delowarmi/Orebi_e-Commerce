import React from 'react'
import Image from '../components/Image'
import ErrorAni from '../assets/error.gif'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Link to={'/'}>
    <Flex className={'justify-center py-16'}> 
        <Image ImgSrc={ErrorAni}/>
    </Flex>
    </Link>
  )
}

export default Error
