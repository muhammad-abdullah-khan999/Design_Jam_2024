'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Grid Layout for Desktop and Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {currentProducts.map((product, index) => (
          <div
            key={product._id}
            className={`flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:scale-105 ${index > 0 ? 'sm:mt-6' : ''}`}
          >
            <div className="w-[305px] h-[370px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                width={305}
                height={370}
                className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:opacity-90"
              />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold">{product.name}</h4>
            <p className="text-xl font-semibold text-gray-700">£{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-x-4 mt-8">
  {/* Previous Button */}
  <button
    className={`btn btn-primary ${currentPage === 1 ? 'btn-disabled' : ''}`}
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  {/* Page Info */}
  <span className="text-lg font-medium">
    Page {currentPage} of {totalPages}
  </span>

  {/* Next Button */}
  <button
    className={`btn btn-primary ${currentPage === totalPages ? 'btn-disabled' : ''}`}
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>

    </div>
  );
}
