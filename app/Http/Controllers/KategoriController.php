<?php

namespace App\Http\Controllers;

use App\Http\Resources\KategoriResource;
use App\Models\Category;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class KategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $kategori = Kategori::all();
        $query = Category::query();

        if (request("nama_kategori")) {
            $query->where("nama_kategori", "like", "%" . request("nama_kategori") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $categories = $query->paginate(10)->onEachSide(1);
        return Inertia::render('Kategori/Index', [
            "categories" => KategoriResource::collection($categories),
            "queryParams" => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Kategori/Create', [
            'title' => 'Tambah Kategori'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_kategori' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'required|string|in:gaming,not_validasi,entertain',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048', // Validasi untuk file gambar
        ]);

        // Handle image upload
        // $image = $data['image'] ?? null;
        // if ($image) {
        //     $data['image'] = $image->store('kategori-images/' . Str::random(), 'public');
        // }
        if ($request->hasFile('image')) {
            // Simpan file gambar dan ambil path-nya
            $imagePath = $request->file('image')->store('kategori-images', 'public');
            $validated['image'] = $imagePath;
        }
        // dd($validated);

        Category::create($validated);

        return Redirect::route('kategori.index')->with('success', 'Kategori berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kategori $kategori)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kategori $kategori)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kategori $kategori)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kategori $kategori)
    {
        //
    }
}
