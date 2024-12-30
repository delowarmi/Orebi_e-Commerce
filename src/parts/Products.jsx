import React from 'react'
import Product from '../parts/Product'
import product from '../assets/pro8.png'
import product1 from '../assets/pro9.png'
import product2 from '../assets/pro10.png'
import product3 from '../assets/pro11.png'
import product4 from '../assets/pro12.png'
import product5 from '../assets/pro7.png'
import Container from '../components/Container'
import PrevArrow from '../components/PrevArrow'
import NextArrow from '../components/NextArrow'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Heading from '../components/Heading'
import Badge from '../components/Badge'
const Products = () => {
        var settings = {
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow:<PrevArrow/>,
                nextArrow:<NextArrow/>,
              };  
  return (
        <div className='pb-[100px]'>
        
        <Container>
               <Heading as={'h3'} text={'New Arrivals'} className='font-dm font-bold text-[40px] pb-[30px]'/>
        <Slider {...settings}>
        
        <div className='w-[24%] relative group px-2'>
        <Product 
        imgSrc={product}
        badge={'New'}
        para={'Add to Wish List'}
        para2={'Compare'}
        para3={'Add to Cart'}
        para4={'Basic Crew Neck Tee'}
        para5={'$44.00'}
        para6={'Black'}
        />
        
        </div>
        <div className='w-[24%] relative group px-2'>
        <Product
        imgSrc={product1}
        badge={'10'}
        para={'Add to Wish List'}
        para2={'Compare'}
        para3={'Add to Cart'}
        para4={'Basic Crew Neck Tee'}
        para5={'$44.00'}
        para6={'Black'}
        />
        </div>
        <div className='w-[24%] relative group px-2'>
        <Product
        imgSrc={product2}
        badge={'New'}
        para={'Add to Wish List'}
        para2={'Compare'}
        para3={'Add to Cart'}
        para4={'Basic Crew Neck Tee'}
        para5={'$44.00'}
        para6={'Black'}
        />
        </div>
        <div className='w-[24%] relative group px-2'>
        <Product 
        imgSrc={product3}
        badge={'20%'}
        para={'Add to Wish List'}
        para2={'Compare'}
        para3={'Add to Cart'}
        para4={'Basic Crew Neck Tee'}
        para5={'$44.00'}
        para6={'Black'}
        />
        </div>
        <div className='w-[24%] relative group px-2'>
        <Product 
        imgSrc={product4}
        badge={'New'}
        para={'Add to Wish List'}
        para2={'Compare'}
        para3={'Add to Cart'}
        para4={'Basic Crew Neck Tee'}
        para5={'$44.00'}
        para6={'Black'}/>
        </div>
        <div className='w-[24%] relative group px-2'>
        <Product 
        imgSrc={product5}
        badge={'15%'}
        para={'Add to Wish List'}
        para2={'Compare'}
        para3={'Add to Cart'}
        para4={'Basic Crew Neck Tee'}
        para5={'$44.00'}
        para6={'Black'}
        />
        </div>
      </Slider>
      </Container>
      </div>
  )
}

export default Products


