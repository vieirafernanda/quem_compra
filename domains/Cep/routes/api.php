<?php

use \Illuminate\Support\Facades\Route;

Route::get('states', 'ReadStatesController@index')->name('states');
Route::get('cities/{state}', 'ReadCitiesController@index')->name('cities');