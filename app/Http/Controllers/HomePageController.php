<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class HomePageController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Homepage', [
            'title' => "Top Up Diamond Murah",
            'description' => "Beli diamon murah hanya di mrxnunu",
            'categories' => $categories,
            // 'canLogin' => Route::has('login'),
            // 'canRegister' => Route::has('register'),
        ]);
    }
}
