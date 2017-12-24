<?php

use \Illuminate\Support\Facades\Route;

Route::get('auth.js', 'AssetController@auth')->name('auth');