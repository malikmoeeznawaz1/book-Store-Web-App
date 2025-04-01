import React, { useEffect, useState } from 'react'

const TopSellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch("books.json")
      .then(res => res.json())
      .then((data) => setBooks(data))
  },[])

  return (
    <div>Top Sellers</div>
  )
}

export default TopSellers