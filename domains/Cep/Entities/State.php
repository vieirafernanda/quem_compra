<?php

namespace Domains\Cep\Entities;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    protected $fillable = [];

    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
