import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

function Create({ auth, categories }) {
  const { data, setData, post, errors, reset } = useForm({
    image: '',
    nama_product: '',
    code: '',
    harga: '',
    status: '',
  });

  const [preview, setPreview] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nama_product', data.nama_product);
    formData.append('code', data.code);
    formData.append('harga', data.harga);
    formData.append('status', data.status);
    if (data.image) {
      formData.append('image', data.image);
    }

    post(route("product.store"));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData('image', file);

    // Buat URL object untuk preview gambar
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    } else {
      setPreview('');
    }
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Kategori</h2>}
    >
      <Head title="Tambah Kategori" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white sm:rounded-lg">
              {/* Preview gambar */}
              {preview && (
                <div className="mb-4">
                  <img src={preview} alt="Image Preview" className="w-42 h-42 object-cover" />
                </div>
              )}
              <div>
                <InputLabel htmlFor="kategori_image" value="Gambar Kategori" />
                <TextInput
                  id="kategori_image"
                  type="file"
                  name="image"
                  className="mt-1 block w-full"
                  onChange={handleImageChange} />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className='mt-4'>
                <InputLabel htmlFor="nama_product" value="Nama Product" />
                <TextInput
                  id="nama_product"
                  type="text"
                  name="nama_product"
                  value={data.nama_product}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('nama_product', e.target.value)} />
                <InputError message={errors.nama_product} className="mt-2" />
              </div>
              <div className='mt-4'>
                <InputLabel htmlFor="nama_product" value="Kode Product" />
                <TextInput
                  id="code"
                  type="text"
                  name="code"
                  value={data.code}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('code', e.target.value)} />
                <InputError message={errors.code} className="mt-2" />
              </div>
              <div className='mt-4'>
                <InputLabel htmlFor="code" value="Harga" />
                <TextInput
                  id="harga"
                  name="harga"
                  type="number"
                  value={data.harga}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('harga', e.target.value)} />
                <InputError message={errors.harga} className="mt-2" />
              </div>
              <div className='mt-4'>
                <InputLabel htmlFor="category_id" value="Kategori" />
                <SelectInput
                  id="category_id"
                  name="category_id"
                  value={data.category_id}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('category_id', e.target.value)}>
                  <option value="">Pilih Kategori</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.nama_kategori}
                    </option>
                  ))}
                </SelectInput>
                <InputError message={errors.category_id} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("kategori.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Batal
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Create