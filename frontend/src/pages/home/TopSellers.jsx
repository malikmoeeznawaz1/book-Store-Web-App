import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

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

      {
        filteredBooks.map((book, index)=> ( 
          <BookCard key={index} book={book} />
        ))
      }

    </div>
  )
}

export default TopSellers