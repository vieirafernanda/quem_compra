<?php

namespace Domains\Account\Entities;

use App\User;
use Illuminate\Database\Eloquent\Model;

class UserPhone extends Model
{
    protected $fillable = [
        'user_id',
        'number'
    ];

    protected $primaryKey = 'user_id';

    public $timestamps = false;

    public $incrementing = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
