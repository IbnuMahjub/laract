import Card from '@/Components/Homepage/Card';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer'; // Import komponen Footer
import { Head } from '@inertiajs/react';
import React from 'react';

function Homepage(props) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Head title={props.title} />
      <Navbar user={props.auth.user} />
      <main className='flex-grow bg-slate-50 p-4'>
        <div className='flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch  gap-4'>
          {props.categories.map((category) => (
            <Card key={category.id} category={category} />
          ))}
        </div>
        {/* Tambahan paginator jika diperlukan */}
        <div className='flex justify-center items-center mt-4'>
          {/* <Paginator meta={props.news.meta} /> */}
        </div>
      </main>
      <Footer /> {/* Menambahkan Footer di bagian bawah */}
    </div>
  );
}

export default Homepage;
