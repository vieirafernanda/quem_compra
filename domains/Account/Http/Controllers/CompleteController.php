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
//        $user = auth()->user();
//
//        $user->state_id = $user->cep->state_id;
//        $user->city_id = $user->cep->city_id;
//        $user->neighborhood = $user->cep->neighborhood;
//        $user->phone = $user->phone->number;
//
//        unset($user->cep);
//        unset($user->phone);

        return view('account::complete');
    }

    public function complete(CompleteAccountRequest $request)
    {
        $this->accountRepository->complete($request->all());

        return redirect(route('Account::index'));
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