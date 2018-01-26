<?php

namespace Domains\Cep\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class CepDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $this->call(StatesTableSeederTableSeeder::class);
        $this->call(CitiesTableSeederTableSeeder::class);
    }
}
