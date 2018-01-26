<?php

namespace Domains\Asset\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class AssetController extends Controller
{
    public function auth()
    {
        return js_view('asset::auth-js');
    }
}
