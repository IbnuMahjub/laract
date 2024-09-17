import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, products }) {
  const formatRupiah = (amount) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
    return formatter.format(amount);
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Product
          </h2>
          <Link
            href={route("product.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Data Product" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              {/* <pre>{JSON.stringify(products, undefined, 2)}</pre> */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-white border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-2">No</th>
                    <th className="px-3 py-2">Nama Product</th>
                    <th className="px-3 py-2">Kode Layanan</th>
                    <th className="px-3 py-2">Harga</th>
                    <th className="px-3 py-2">Gambar</th>
                    <th className="px-3 py-2">Aksi</th>
                  </tr>
                  {/* <tr className="text-nowrap">
                    <th className="px-3 py-2"></th>
                    <th className="px-3 py-2"><TextInput
                      defaultValue={queryParams.nama_product}
                      type="text"
                      className="w-full"
                      onBlur={(e) =>
                        searchFieldChanged("nama_product", e.target.value)
                      }
                      onKeyPress={(e) => onKeyPress("nama_product", e)}
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
                  </tr> */}
                </thead>
                <tbody>
                  {products.data.map(p => (
                    <tr className="bg-white border-b dark:border-gray-700" key={p.id}>
                      <td className="px-3 py-2">{p.id}</td>
                      <td className="px-3 py-2">{p.nama_product}</td>
                      <td className="px-3 py-2">{p.code}</td>
                      <td className="px-3 py-2">{formatRupiah(p.harga)}</td>
                      <td className="px-3 py-2">
                        {/* <img src={category.image} style={{ width: 60 }} /> */}
                        <img src={`/storage/${p.image_path}`} style={{ width: 60 }} alt="Category" />

                      </td>
                      <td className="px-3 py-2 text-nowrap">
                        <Link
                          href={route("product.edit", p.id)}
                          // href={route("#")}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={(e) => deleteProduct(p)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
