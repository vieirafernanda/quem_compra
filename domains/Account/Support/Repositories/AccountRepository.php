<?php

namespace Domains\Account\Support\Repositories;

use App\User;
use Domains\Model\Repositories\BaseRepository;
use Ramsey\Uuid\Uuid;

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

    public function confirm(User $user)
    {
        return $user->update([
            'confirmed' => true
        ]);
    }

    public function createAccount(array $data)
    {
        $data['password'] = bcrypt($data['password']);
        $data['email_token'] = Uuid::uuid4();
        return $this->create($data);
    }

    public function complete(array $data)
    {

    }
}