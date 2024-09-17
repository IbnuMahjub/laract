import Pagination from '@/Components/Pagination';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CATEGORY_STATUS_TEXT_MAP, CATEGORY_STATUS_CLASS_MAP } from '@/constans.jsx';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, categories, queryParams = null, success }) {

  queryParams = queryParams || {};
  const searchFieldChanged = (nama_kategori, value) => {
    if (value) {
      queryParams[nama_kategori] = value;
    } else {
      delete queryParams[nama_kategori];
    }

    router.get(route("kategori.index"), queryParams);
  }

  const onKeyPress = (nama_kategori, e) => {
    if (e.key !== 'Enter') return;
    searchFieldChanged(nama_kategori, e.target.value);
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Kategori
          </h2>
          <Link
            href={route("kategori.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Data Kategori" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {success && (
            <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              {success}
            </div>
          )}
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              {/* <pre>{JSON.stringify(categories, undefined, 2)}</pre> */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-white border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">No</th>
                    <th className="px-3 py-2">Nama Kategori</th>
                    <th className="px-3 py-2">Slug</th>
                    <th className="px-3 py-2">Deskripsi</th>
                    <th className="px-3 py-2">status</th>
                    <th className="px-3 py-2">Gambar Kategori</th>
                    <th className="px-3 py-2 text-center">Aksi</th>
                  </tr>
                  <tr className="text-nowrap">
                    <th className="px-3 py-2"></th>
                    <th className="px-3 py-2"><TextInput
                      defaultValue={queryParams.nama_kategori}
                      type="text"
                      className="w-full"
                      onBlur={(e) =>
                        searchFieldChanged("nama_kategori", e.target.value)
                      }
                      onKeyPress={(e) => onKeyPress("nama_kategori", e)}
                    />
                    </th>
                    <th className="px-3 py-2"></th>
                    <th className="px-3 py-2">

                    </th>
                    <th className="px-3 py-2">
                      <SelectInput
                        className="w-full"
                        defaultValue={queryParams.status}
                        onChange={(e) =>
                          searchFieldChanged("status", e.target.value)
                        }
                      >
                        <option value="">Select Status</option>
                        <option value="gaming">Gaming</option>
                        <option value="not_validasi">Not Validasi</option>
                        <option value="entertaint">Entertain</option>
                      </SelectInput>
                    </th>
                    <th className="px-3 py-2"></th>
                    <th className="px-3 py-2 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {categories.data.map(category => (
                    <tr className="bg-white border-b dark:border-gray-700" key={category.id}>
                      <td className="px-3 py-2">{category.id}</td>
                      <td className="px-3 py-2">{category.nama_kategori}</td>
                      <td className="px-3 py-2">{category.slug}</td>
                      <td className="px-3 py-2">{category.description}</td>
                      {/* <td className="px-3 py-2">{category.status}</td> */}
                      <td className="px-3 py-2 text-nowrap">
                        <span className={
                          "px-2 py-1 rounded text-white " +
                          CATEGORY_STATUS_CLASS_MAP[category.status]
                        }>
                          {CATEGORY_STATUS_TEXT_MAP[category.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        {/* <img src={category.image} style={{ width: 60 }} /> */}
                        <img src={`/storage/${category.image}`} style={{ width: 60 }} alt="Category" />

                      </td>
                      <td className="px-3 py-2 text-nowrap">
                        <Link
                          href={route("kategori.edit", category.id)}
                          // href={route("#")}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={(e) => deleteCategory(category)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={categories.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
