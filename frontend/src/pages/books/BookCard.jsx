import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";

const BookCard = ({ book }) => {
  return (
    <div className="rounded-md transition-shadow duration-300 p-4">
      {/* Flex container */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-6">
        
        {/* Image Section */}
        <div className="w-48 sm:w-56 flex-shrink-0 border rounded-md flex justify-center">
          <Link to={`/books/${book._id}`}>
            <div className="w-full aspect-[3/4]">
              <img
                src={getImgUrl(book?.coverImage)}
                alt="Book Cover"
                className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
              />
            </div>
          </Link>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link to={`/books/${book._id}`}>
            <h3 className="text-md font-semibold hover:text-blue-600 mb-3">
              {book?.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book?.description.length > 50
              ? `${book?.description.slice(0, 50)}...`
              : book?.description}
          </p>
          <p className="font-medium mb-5">
            ${book?.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${book?.oldPrice}
            </span>
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1">
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;