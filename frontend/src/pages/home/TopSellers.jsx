import React, { useEffect, useState } from 'react'

const categories = ["Choose a genre", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch("books.json")
      .then(res => res.json())
      .then((data) => setBooks(data))
  },[])

  return (
    <div className='py-4'>
      <h2 className='text-xl font-semibold mb-3'> Top Sellers</h2>
      
      {/* category filter */}
      <div>
        <select name="category" id="category" className=' bg-gray-100 p-2 text-sm focus:outline-none border border-gray-100 rounded-md'>
          {categories.map((category, index) => (
            <option key={index} value={category} >{category}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default TopSellers