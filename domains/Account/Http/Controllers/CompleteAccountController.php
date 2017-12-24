<?php

namespace Domains\Account\Http\Controllers;

use Domains\Account\Http\Requests\CompleteAccountRequest;
use Domains\Account\Http\Requests\RegisterUserRequest;
use Domains\Account\Support\Repositories\AccountRepository;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class CompleteAccountController
 * @package Domains\Account\Http\Controllers
 */
class CompleteAccountController extends Controller
{
    public function complete(CompleteAccountRequest $request)
    {

    }
}