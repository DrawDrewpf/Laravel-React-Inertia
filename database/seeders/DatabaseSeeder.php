<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Project;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::factory()->create([
            'name' => 'Luis Villanueva',
            'email' => 'tysonpopluis@gmail.com',
            'password' => bcrypt('HateHate123!'),
            'email_verified_at' => time()
        ]);

        Project::factory()->count(30)->hasTasks(30)->create();
    }
}
