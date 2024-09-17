<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LayananController extends Controller
{
    public function index($slug)
    {
        $category = Category::with('products')->where('slug', $slug)->firstOrFail();
        // $accounts = Account::where('user_id', auth()->id())->get();
        $title = 'Top up Murah - ' . $category->nama_kategori;
        // dd($category);
        return Inertia::render('Order', [
            "title" => $title,
            "category" => $category,
        ]);
    }
}
