import React from 'react'
import {products} from '@/app/data/products'


function Products({filteredProducts}:any) {
  return (
  <>
  <h1 className='text-3xl font-extrabold ml-6 mb-12'>Available Products</h1>
<div id="products" className="grid grid-cols-2 px-6 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((item: any, index: any) => (
      <div
        key={index}
        className="flex flex-col items-left rounded relative"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }}
      >
        <img className="rounded" src="/marketplace.jpg" alt="" />

        {/* Text at top-left */}
        <div className="absolute top-2 left-2 text-white font-bold bg-black bg-opacity-50 p-1 rounded">
          Used
        </div>

        <h1 className="text-lg font-semibold pl-2 mt-2">{item?.name}</h1>
        <p className="text-gray-600 pl-2">N {item?.price}</p>
        <button className="mt-2 px-4 py-2 bg-[#ff7f00] text-white rounded">Purchase</button>
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-center mt-4 col-span-full">No products found</p>
  )}
</div>

  </>
  )
}

export default Products