<?php

namespace Domains\Account\Support\Repositories;

use App\User;
use Domains\Model\Repositories\BaseRepository;

class AccountRepository extends BaseRepository
{

    /**
     * @return string
     */
    public function getModel(): string
    {
        return User::class;
    }

    public function getDefaults(): array
    {
        return [
            'confirmed' => false
        ];
    }

    public function createAccount(array $data)
    {
        $data['password'] = bcrypt($data['password']);
        return $this->create($data);
    }
}