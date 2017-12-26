<?php

namespace Domains\Account\Http\Controllers;

use App\User;
use Domains\Account\Http\Requests\CompleteAccountRequest;
use Illuminate\Foundation\Auth\RedirectsUsers;

class CompleteController extends Controller
{
    use RedirectsUsers;

    public function showCompleteForm()
    {
        return view('account::complete');
    }

    public function complete(CompleteAccountRequest $request)
    {
        $this->accountRepository->complete($request->all());
    }

    public function verify($token)
    {
        $user = User::where('email_token', $token)->first();
        if ($user->confirmed) {
            return redirect('Account::index');
        }

        $this->accountRepository->confirm($user);

        return redirect(route('Account::index'))
            ->with([
                'flash' => [
                    'level' => 'green',
                    'message' => 'Email confirmado'
                ]
            ]);
    }
}