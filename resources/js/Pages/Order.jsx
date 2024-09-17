import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar'; // Sesuaikan dengan lokasi Navbar Anda

const Order = ({ title, category }) => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Head title={title} />
      <Navbar /> {/* Jika Anda menggunakan Navbar */}
      <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>{category.nama_kategori}</h1>
        <p className='mb-4'>{category.description}</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {category.products.map((product) => (
            <div key={product.id} className='card bg-base-100 shadow-xl'>
              <img
                src={category.image ? `/storage/${category.image}` : 'default-product-image.jpg'}
                alt={product.status}
                className='w-full h-48 object-cover rounded-t-xl'
              />
              <div className='card-body p-4'>
                <h2 className='card-title text-lg font-semibold'>{product.name}</h2>
                <p className='text-sm text-gray-600'>{product.description}</p>
                <p className='text-lg font-bold'>{product.harga} IDR</p>
                {/* Tambahkan tombol atau link untuk membeli jika diperlukan */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
