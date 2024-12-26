import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { categories } from '@/app/data/categories'
function Category() {
  return (
    <div className='w-full flex justify-center'>
    <div className='flex flex-wrap justify-center gap-7 lg:gap-20 py-20 '>
       {categories.map((item, index) => (
          <div 
             className='lg:w-[200px] md:w-[200px]  w-[89%] h-[150px]  flex flex-col items-center gap-4 justify-center rounded-lg'
             style={{ backgroundColor: `${item?.color}`, boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }} 
             key={index}
          >
             {item?.icon}
             <h1 className='text-lg text-[#000]'>
                {item?.name}
             </h1>
          </div>
       ))}
    </div>
 </div>
 
 
  )
}

export default Category