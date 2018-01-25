<?php

namespace Domains\Cep\Support\Repositories;


use Domains\Cep\Entities\City;
use Domains\Model\Repositories\BaseRepository;

class CityRepository extends BaseRepository
{

    /**
     * @return string
     */
    public function getModel(): string
    {
        return City::class;
    }

    public function getDefaults(): array
    {
        return [];
    }
}