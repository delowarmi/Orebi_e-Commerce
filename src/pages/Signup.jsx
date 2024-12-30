import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'

const Signup = () => {
  return (
        <div className='py-[80px] bg-white'>
        <Container>
            <div className='border-b pb-20 bottom-BorderInfoColor'>
            <Heading as={'h3'} text={'Sign up'} className='font-dm font-bold text-[40px] '/>
            <Heading as={'p'} text={'Home > Login'} className='font-dm font-regular text-[16px] text-InfoColor pb-[100px]' />
            <Heading as={'p'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the.'} className='font-dm font-regular text-[16px] text-InfoColor pr-[700px] '/>
            </div>
            <div>
            <Heading as={'h3'} text={'Your Personal Details'} className='font-dm font-bold text-[40px] border-b pb-3 bottom-BorderInfoColor'/> 
            <Flex className={'gap-x-6 border-b pb-3 bottom-BorderInfoColor'}>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>First Name</b></label> <br/>
                  <input type="text" className='border border-InfoColor  = p-3 bg-white rounded-lg w-[300px]' placeholder="Enter First Name" name="uname"required></input>
                  </div>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Last Name</b ></label> <br/>
                  <input type="text" className='border border-InfoColor  p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Last Name" name="uname" required></input>
                  </div>
            </Flex>
            <Flex className={'gap-x-6 border-b pb-3 bottom-BorderInfoColor'}>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Email address</b></label> <br/>
                  <input type="text" className='border border-InfoColor  p-3 bg-white rounded-lg w-[300px]' placeholder="Email address" name="uname"required></input>
                  </div>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Telephone</b ></label> <br/>
                  <input type="number" className='border border-InfoColor  p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Telephone" name="uname" required></input>
                  </div>
            </Flex>
        <div > 
               <Heading as={'h3'} text={'New Customer'} className='font-dm font-bold text-[40px] pt-[40px] border-b pb-3 bottom-BorderInfoColor'/>
               <Flex className={'gap-x-6 border-b pb-3 bottom-BorderInfoColor'}>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Address 1</b></label> <br/>
                  <input type="text" className='border border-InfoColor  p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Address" name="uname"required></input>
                  </div>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Address 2</b ></label> <br/>
                  <input type="text" className='border border-InfoColor p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Address2" name="uname" required></input>
                  </div>
            </Flex>
            <Flex className={'gap-x-6 border-b pb-3 bottom-BorderInfoColor'}>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>City</b></label> <br/>
                  <input type="text" className='border border-InfoColor  p-3 bg-white rounded-lg w-[300px]' placeholder="Enter City" name="uname"required></input>
                  </div>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Post Code</b ></label> <br/>
                  <input type="text" className='border border-InfoColor p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Post-Code" name="uname" required></input>
                  </div>
            </Flex>
            <Flex className={'gap-x-6 border-b pb-3 bottom-BorderInfoColor'}>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Country</b></label> <br/>
                  <input type="text" className='border border-InfoColor p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Country" name="uname"required></input>
                  </div>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Region/State</b ></label> <br/>
                  <input type="text" className='border border-InfoColor p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Region" name="uname" required></input>
                  </div>
            </Flex>
        </div>
        <div >
        <Heading as={'h3'} text={'Your Password'} className='font-dm font-bold text-[40px] pt-[40px] border-b pb-3 bottom-BorderInfoColor'/>  
        <Flex className={'gap-x-6 border-b pb-3 bottom-BorderInfoColor'}>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Password</b></label> <br/>
                  <input type="password" className='border border-InfoColor p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Password" name="uname"required></input>
                  </div>
                  <div className='pt-[50px]'>
                  <label for="uname"><b className='pl-3'>Repeat Password</b ></label> <br/>
                  <input type="password" className='border border-InfoColor p-3 bg-white rounded-lg w-[300px]' placeholder="Enter Re-Password" name="uname" required></input>
                  </div>
        </Flex>    
        </div>
             
        </div>
        <div className='pt-8'>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" ></input>
        <label for="vehicle1" className='font-dm font-regular text-[16px] text-InfoColor '> I have read and agree to the Privacy Policy</label> <br/>
        </div>
       <div className='pt-6'>
       <fieldset data-role="controlgroup">
        <Flex >
        <Heading as={'p'} text={'Subscribe Newsletter'} className='font-dm font-regular text-[16px] text-InfoColor pr-4'/>
        <label for="yes">Yes</label>
        <input type="radio" name="logic" id="yes" value="yes" checked></input>
        <label for="no" className='pl-4'>No</label>
        <input type="radio" name="logic" id="no" value="no"></input>
        </Flex>
       </fieldset>
       </div> 
        <button className='border border-navColor py-[10px] px-[60px] mt-[40px] bg-black text-white'>Log in</button>
        </Container>
      </div>
  )
}

export default Signup
