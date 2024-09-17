<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama_product' => $this->faker->word,
            'code' => $this->faker->unique()->bothify('PROD-####'),
            'harga' => $this->faker->numberBetween(1000, 100000),
            'image_path' => $this->faker->imageUrl(),
            'category_id' => Category::factory(),
        ];
    }
}
