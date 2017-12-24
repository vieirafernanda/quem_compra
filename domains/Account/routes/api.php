<?php

use \Illuminate\Support\Facades\Route;

Route::post('complete', 'CompleteAccountController@complete')->name('complete');