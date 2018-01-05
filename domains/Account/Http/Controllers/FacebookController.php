<?php

namespace Domains\Account\Http\Controllers;

use App\Http\Controllers\Auth\LoginController as BaseLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Laravel\Socialite\Facades\Socialite;

class FacebookController extends BaseLogin
{
    public function redirect()
    {
        return Socialite::driver('facebook')
            ->scopes(['user_friends', 'email', 'public_profile'])
            ->redirect();
    }

    public function callback()
    {
        $user = Socialite::driver('facebook')->user();

        Session::flash('email', $user->email);
        Session::flash('name', $user->name);

        return redirect(route('Account::register'));
    }
}