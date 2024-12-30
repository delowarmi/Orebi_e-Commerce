import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'

const Login = () => {
  return (
    <div className='py-[80px] bg-white'>
      <Container>
          <div className='border-b pb-20 bottom-BorderInfoColor'>
          <Heading as={'h3'} text={'Login'} className='font-dm font-bold text-[40px]'/>
          <Heading as={'p'} text={'Home > Login'} className='font-dm font-regular text-[16px] text-InfoColor pb-[100px]' />
          <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the.'} className='font-dm font-regular text-[16px] text-InfoColor pr-[700px] '/>
          </div>
          <div className='border-b pb-20 bottom-BorderInfoColor py-[100px]'>
          <Heading as={'h3'} text={'Returning Customer'} className='font-dm font-bold text-[40px]'/> 
          <Flex className={'gap-x-6 border-b pb-3 bottom-BorderInfoColor'}>
                <div className='pt-[50px]'>
                <label for="uname"><b className='pl-3'>Email address</b></label> <br/>
                <input type="text" className='border border-InfoColor className = p-3 bg-white rounded-lg w-[300px]' placeholder="Email address" name="uname"required></input>
                </div>
                <div className='pt-[50px]'>
                <label for="uname"><b className='pl-3'>Password</b ></label> <br/>
                <input type="password" className='border border-InfoColor className = p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Password" name="uname" required></input>
                </div>
          </Flex>
           <button className='border border-navColor py-[10px] px-[60px] mt-[40px]'>Login</button>
          </div>
          <Heading as={'h3'} text={'New Customer'} className='font-dm font-bold text-[40px] pt-[50px]'/>
          <Heading as={'h3'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the.'} className='font-dm font-regular text-[16px] pt-[30px] pr-[700px] text-InfoColor'/>
          <button className='border border-navColor py-[10px] px-[60px] mt-[40px] bg-black text-white'>Continue</button>
      </Container>
    </div>
  )
}

export default Login
