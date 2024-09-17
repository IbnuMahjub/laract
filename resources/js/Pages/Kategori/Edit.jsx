import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ auth, kategori }) {
  const { data, setData, put, errors } = useForm({
    nama_kategori: kategori.nama_kategori,
    slug: kategori.slug,
    deskripsi: kategori.deskripsi,
    image: kategori.image,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('kategori.update', kategori.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Kategori</h2>}
    >
      <Head title="Edit Kategori" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700">Nama Kategori</label>
                  <input
                    type="text"
                    value={data.nama_kategori}
                    onChange={(e) => setData('nama_kategori', e.target.value)}
                    className="form-input mt-1 block w-full"
                    required
                  />
                  {errors.nama_kategori && <div className="text-red-500">{errors.nama_kategori}</div>}
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Slug</label>
                  <input
                    type="text"
                    value={data.slug}
                    onChange={(e) => setData('slug', e.target.value)}
                    className="form-input mt-1 block w-full"
                    required
                  />
                  {errors.slug && <div className="text-red-500">{errors.slug}</div>}
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Deskripsi</label>
                  <textarea
                    value={data.deskripsi}
                    onChange={(e) => setData('deskripsi', e.target.value)}
                    className="form-textarea mt-1 block w-full"
                  />
                  {errors.deskripsi && <div className="text-red-500">{errors.deskripsi}</div>}
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Image</label>
                  <input
                    type="text"
                    value={data.image}
                    onChange={(e) => setData('image', e.target.value)}
                    className="form-input mt-1 block w-full"
                  />
                  {errors.image && <div className="text-red-500">{errors.image}</div>}
                </div>

                <div className="mt-4">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
