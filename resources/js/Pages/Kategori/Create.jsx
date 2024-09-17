import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
  const { data, setData, post, processing, errors } = useForm({
    image: '',
    nama_kategori: '',
    description: '',
    status: '',
  });

  // State untuk menyimpan URL preview gambar
  const [preview, setPreview] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nama_kategori', data.nama_kategori);
    formData.append('description', data.description);
    formData.append('status', data.status);
    if (data.image) {
      formData.append('image', data.image);
    }

    post(route('kategori.store'), { data: formData, headers: { 'Content-Type': 'multipart/form-data' } });
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
                <InputLabel htmlFor="nama_kategori" value="Nama Kategori" />
                <TextInput
                  id="nama_kategori"
                  type="text"
                  name="nama_kategori"
                  value={data.nama_kategori}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('nama_kategori', e.target.value)} />
                <InputError message={errors.nama_kategori} className="mt-2" />
              </div>
              <div className='mt-4'>
                <InputLabel htmlFor="description" value="Deskripsi" />
                <TextAreaInput
                  id="description"
                  name="description"
                  value={data.description}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('description', e.target.value)} />
                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className='mt-4'>
                <InputLabel htmlFor="status" value="Status" />
                <SelectInput
                  id="status"
                  name="status"
                  value={data.status}
                  className="mt-1 block w-full"
                  onChange={(e) => setData('status', e.target.value)}>
                  <option value="">Pilih Status</option>
                  <option value="gaming">Gaming</option>
                  <option value="not_validasi">Not Validasi</option>
                  <option value="entertain">Entertain</option>
                </SelectInput>
                <InputError message={errors.status} className="mt-2" />
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
  );
}
