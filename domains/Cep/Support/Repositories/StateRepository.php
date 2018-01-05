<?php

namespace Domains\Cep\Support\Repositories;

use Domains\Cep\Entities\State;
use Domains\Model\Repositories\BaseRepository;

class StateRepository extends BaseRepository
{

    /**
     * @return string
     */
    public function getModel(): string
    {
        return State::class;
    }

    public function getDefaults(): array
    {
        return [];
    }
}