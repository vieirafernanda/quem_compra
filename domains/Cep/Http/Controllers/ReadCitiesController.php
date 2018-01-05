<?php

namespace Domains\Cep\Http\Controllers;

use App\Http\Controllers\Controller;
use Domains\Cep\Support\Repositories\CityRepository;
use Domains\Cep\Support\Repositories\StateRepository;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ReadCitiesController extends Controller
{
    protected $cityRepository;

    public function __construct(CityRepository $cityRepository)
    {
        $this->cityRepository = $cityRepository;
    }

    public function index($stateId)
    {
        $cities = $this->cityRepository->where('state_id', $stateId)->get();

        return response($cities);
    }
}
