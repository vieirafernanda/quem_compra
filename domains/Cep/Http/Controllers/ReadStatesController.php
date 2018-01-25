<?php

namespace Domains\Cep\Http\Controllers;

use App\Http\Controllers\Controller;
use Domains\Cep\Support\Repositories\StateRepository;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ReadStatesController extends Controller
{
    protected $stateRepository;

    public function __construct(StateRepository $stateRepository)
    {
        $this->stateRepository = $stateRepository;
    }

    public function index()
    {
        $states = $this->stateRepository->get();

        return response($states);
    }
}
