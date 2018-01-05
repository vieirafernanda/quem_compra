<?php

namespace Domains\Account\Support\Repositories;

use App\User;
use Domains\Model\Repositories\BaseRepository;
use Ramsey\Uuid\Uuid;

class AccountRepository extends BaseRepository
{
    private $user;

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
        $data = collect($data);
        $this->user = auth()->user();

        $this->makeCep($data->only(['state_id', 'city_id', 'neighborhood']));
        $this->makeDetails($data->only(['cpf', 'username']));
        $this->makePhone($data->only(['phone']));
    }

    private function makeCep($data)
    {
        if ($this->user->cep == null) {
            return $this
                ->user
                ->cep()
                ->create($data->toArray());
        }
        return $this
            ->user
            ->cep()
            ->update($data->toArray());
    }

    private function makeDetails($data)
    {
        $this
            ->user
            ->update($data->toArray());
    }

    private function makePhone($data)
    {
        if ($this->user->phone == null) {
            return $this->user->phone()
                ->create([
                    'number' => $data['phone']
                ]);
        }
        return $this->user->phone()
            ->update([
                'number' => $data['phone']
            ]);
    }
}