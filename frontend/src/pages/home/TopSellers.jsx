import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = ["Choose a genre", "Fiction", "Horror", "Adventure", "Business"]

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(["Choose a genre"]);

  useEffect(()=>{
    fetch("books.json")
      .then(res => res.json())
      .then((data) => setBooks(data))
  },[])

  const filteredBooks = selectedCategory == "Choose a genre"? books: books.filter((book) => book.category === selectedCategory.toLowerCase());
  console.log(filteredBooks);
  

  return (
    <div className='py-4'>
      <h2 className='text-xl font-semibold mb-3'> Top Sellers</h2>
      
      {/* category filter */}
      <div>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}
         name="category" id="category" className=' bg-gray-100 p-2 text-sm focus:outline-none border border-gray-100 rounded-md'>
          {categories.map((category, index) => (
            <option key={index} value={category} >{category}</option>
          ))}
        </select>
      </div>

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
          filteredBooks.length > 0 && filteredBooks.map((book, index)=> ( 
            <SwiperSlide key={index} Navigation={true}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        }
        
      </Swiper>

    </div>
  )
}

export default TopSellers