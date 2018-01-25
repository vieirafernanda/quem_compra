<?php

namespace Domains\Account\Entities;

use App\User;
use Domains\Cep\Entities\City;
use Domains\Cep\Entities\State;
use Illuminate\Database\Eloquent\Model;

class UserCep extends Model
{
    protected $fillable = [
        'user_id',
        'state_id',
        'city_id',
        'neighborhood'
    ];

    protected $primaryKey = 'user_id';

    public $incrementing = false;

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
