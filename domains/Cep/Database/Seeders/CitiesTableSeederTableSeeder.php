<?php

namespace Domains\Cep\Database\Seeders;

use Carbon\Carbon;
use Domains\Cep\Entities\City;
use Domains\Cep\Entities\State;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class CitiesTableSeederTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = collect(json_decode(file_get_contents(__DIR__ . '/cities.json'), true))
            ->map(function ($city) {
                $city['created_at'] = Carbon::now();
                $city['updated_at'] = Carbon::now();

                return $city;
            });

        $states = State::get(['id', 'initials']);

        $cities = $cities
            ->map(function($city) use ($states) {
               $city['state_id'] = $states->where('initials', $city['state'])->first()['id'];
               unset($city['state']);
               return $city;
            });

        $cities->chunk(100)
            ->each(function($chunk) {
               City::insert($chunk->toArray());
            });
    }
}
