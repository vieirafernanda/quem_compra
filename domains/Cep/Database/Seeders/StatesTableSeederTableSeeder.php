<?php

namespace Domains\Cep\Database\Seeders;

use Carbon\Carbon;
use Domains\Cep\Entities\State;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class StatesTableSeederTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $states = collect([
            [

                "initials" => "AC",
                "name" => "Acre"
            ],
            [

                "initials" => "AL",
                "name" => "Alagoas"
            ],
            [

                "initials" => "AM",
                "name" => "Amazonas"
            ],
            [

                "initials" => "AP",
                "name" => "Amapá"
            ],
            [

                "initials" => "BA",
                "name" => "Bahia"
            ],
            [

                "initials" => "CE",
                "name" => "Ceará"
            ],
            [

                "initials" => "DF",
                "name" => "Distrito Federal"
            ],
            [

                "initials" => "ES",
                "name" => "Espírito Santo"
            ],
            [

                "initials" => "GO",
                "name" => "Goiás"
            ],
            [

                "initials" => "MA",
                "name" => "Maranhão"
            ],
            [

                "initials" => "MG",
                "name" => "Minas Gerais"
            ],
            [

                "initials" => "MS",
                "name" => "Mato Grosso do Sul"
            ],
            [

                "initials" => "MT",
                "name" => "Mato Grosso"
            ],
            [

                "initials" => "PA",
                "name" => "Pará"
            ],
            [

                "initials" => "PB",
                "name" => "Paraíba"
            ],
            [

                "initials" => "PE",
                "name" => "Pernambuco"
            ],
            [

                "initials" => "PI",
                "name" => "Piauí"
            ],
            [

                "initials" => "PR",
                "name" => "Paraná"
            ],
            [

                "initials" => "RJ",
                "name" => "Rio de Janeiro"
            ],
            [

                "initials" => "RN",
                "name" => "Rio Grande do Norte"
            ],
            [

                "initials" => "RO",
                "name" => "Rondônia"
            ],
            [

                "initials" => "RR",
                "name" => "Roraima"
            ],
            [

                "initials" => "RS",
                "name" => "Rio Grande do Sul"
            ],
            [

                "initials" => "SC",
                "name" => "Santa Catarina"
            ],
            [

                "initials" => "SE",
                "name" => "Sergipe"
            ],
            [

                "initials" => "SP",
                "name" => "São Paulo"
            ],
            [

                "initials" => "TO",
                "name" => "Tocantins"
            ]
        ])
            ->map(function ($state) {
                $state['created_at'] = Carbon::now();
                $state['updated_at'] = Carbon::now();

                return $state;
            })->toArray();
        State::insert($states);
    }
}
