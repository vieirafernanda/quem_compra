<?php

namespace Domains\Account\Http\Controllers;

use App\Jobs\SendVerificationEmail;
use App\User;
use Domains\Account\Http\Requests\RegisterUserRequest;
use Domains\Account\Support\Repositories\AccountRepository;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RedirectsUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class RegisterController
 * @package Domains\Account\Http\Controllers
 */
class RegisterController extends Controller
{
    use RedirectsUsers;

    /**
     * @var string
     */
    protected $redirectTo = '/conta';

    /**
     * RegisterController constructor.
     * @param AccountRepository $accountRepository
     */
    public function __construct(AccountRepository $accountRepository)
    {
        parent::__construct($accountRepository);

        $this->middleware('guest');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showRegistrationForm()
    {
        return view('account::register');
    }

    /**
     * @param RegisterUserRequest $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function register(RegisterUserRequest $request)
    {
        event(new Registered($user = $this->create($request->all())));
        dispatch(new SendVerificationEmail($user));

        $this->guard()->login($user);

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }

    /**
     * @param array $data
     * @return \Illuminate\Database\Eloquent\Model
     */
    protected function create(array $data)
    {
        return $this->accountRepository->createAccount($data);
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard();
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  mixed $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        if (request()->ajax()) {
            return response($user);
        }

        return redirect($this->redirectPath());
    }
}