<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kategori')->insert([
            'nama_kategori' => 'Mobile Legends',
            'slug' => 'mobile-legends',
            'deskripsi' => 'test dong',
        ]);

        // Kategori::factory(5)->create([
        //     'nama_kategori' => 'Mobile Legends',
        //     'slug' => 'mobile-legends',
        //     'deskripsi' => 'test dong',
        // ]);
    }
}
