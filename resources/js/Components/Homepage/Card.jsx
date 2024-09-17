import { Link } from '@inertiajs/react';
import React from 'react';

export default function Card({ category }) {
  return (
    <div className="card bg-base-100 w-full sm:w-60 md:w-80 lg:w-96 shadow-xl mb-4">
      <Link href={`/orders/${category.slug}`}>
        <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-xl">
          <img
            src={category.image ? `/storage/${category.image}` : 'default-image-url.jpg'}
            alt={category.nama_kategori}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      {/* <div className="card-body p-2 sm:p-4">
        <h2 className="card-title text-sm sm:text-base md:text-lg font-semibold">{category.nama_kategori}</h2>
        <p className="text-xs sm:text-sm text-gray-600">{category.description}</p>
      </div> */}
    </div>
  );
}
