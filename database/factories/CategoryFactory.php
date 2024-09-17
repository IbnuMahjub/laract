<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama_kategori' => $this->faker->word,
            'slug' => $this->faker->unique()->slug,
            'description' => $this->faker->paragraph,
            'status' => $this->faker->randomElement(['gaming', 'not_validasi', 'entertaint']),
            'image_path' => $this->faker->optional()->imageUrl,
        ];
    }
}
