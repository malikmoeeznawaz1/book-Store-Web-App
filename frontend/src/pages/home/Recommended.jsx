import React, { useEffect } from 'react'
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';


const Recommended = () => {
  const [books, setBooks] = useState([]);
  
    useEffect(()=>{
      fetch("books.json")
        .then(res => res.json())
        .then((data) => setBooks(data))
    },[])

  return (
    <div className='py-12'>
      <h2 className='text-xl font-semibold mb-3'>Recommended for you</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={300}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
      
        className="mySwiper"
      >
        {
          books.length > 0 && books.slice(7,15).map((book, index)=> ( 
            <SwiperSlide key={index} Navigation={true}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        }
        
      </Swiper>
    </div>
    
  )
}

export default Recommended