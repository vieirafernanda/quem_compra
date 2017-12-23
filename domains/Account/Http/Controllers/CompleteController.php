<?php

namespace Domains\Account\Http\Controllers;

use Illuminate\Foundation\Auth\RedirectsUsers;

class CompleteController extends Controller
{
    use RedirectsUsers;

    public function showCompleteForm()
    {
        return view('account::complete');
    }

}