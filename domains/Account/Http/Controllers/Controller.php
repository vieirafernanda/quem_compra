<?php

namespace Domains\Account\Http\Controllers;

use App\Http\Controllers\Controller as BaseController;
use Domains\Account\Support\Repositories\AccountRepository;

class Controller extends BaseController
{
    protected $accountRepository;

    public function __construct(AccountRepository $accountRepository)
    {
        $this->accountRepository = $accountRepository;
    }
}