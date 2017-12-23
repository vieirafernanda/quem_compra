<?php

namespace Domains\Account\Http\Controllers;

use App\Http\Controllers\Auth\LoginController as BaseLogin;
use Illuminate\Http\Request;

class LoginController extends BaseLogin
{
    protected $redirectTo = '/conta';

    public function showLoginForm()
    {
        return view('account::login');
    }

    protected function credentials(Request $request)
    {
        $field = filter_var($request->get($this->username()), FILTER_VALIDATE_EMAIL)
            ? $this->username()
            : 'username';

        return [
            $field => $request->get($this->username()),
            'password' => $request->get('password')
        ];
    }

    protected function authenticated(Request $request, $user)
    {
        if ($user->name == null ||
            $user->username == null) {
            return redirect(route('Account::complete'));
        }

        return redirect()->intended($this->redirectPath());
    }
}