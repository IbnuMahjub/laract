<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Product::query();
        $products = $query->paginate(10)->onEachSide(1);
        return inertia('Product/Index', [
            'products' => ProductResource::collection($products),
            "queryParams" => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $categories = Category::all();
        $categories = Category::query()->orderBy('nama_kategori', 'asc')->get();
        return Inertia::render('Product/Create', [
            'title' => 'Tambah Product',
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $validated = $request->validated();
        // dd($validated);
        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('product-images', 'public');
        } else {
            $imagePath = null;
        }

        Product::create([
            'nama_product' => $validated['nama_product'],
            'code' => $validated['code'],
            'harga' => $validated['harga'],
            'image_path' => $imagePath,
            'category_id' => $validated['category_id'],
        ]);

        return redirect()->route('product.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
