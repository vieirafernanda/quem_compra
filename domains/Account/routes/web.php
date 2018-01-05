<?php

use \Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'conta';
})->name('index')->middleware(['auth', 'account.complete']);

Route::get('login', 'LoginController@showLoginForm')->name('login');
Route::post('login', 'LoginController@login');

Route::post('logout', 'LoginController@logout')->name('logout');

Route::get('registre-se', 'RegisterController@showRegistrationForm')->name('register');
Route::post('registre-se', 'RegisterController@register');

Route::get('facebook', 'FacebookController@redirect')->name('facebook');
Route::get('facebook/callback', 'FacebookController@callback')->name('facebook.callback');

Route::get('completar', 'CompleteController@showCompleteForm')->name('complete')->middleware(['auth', 'account.incomplete']);
Route::get('verificar/{token}', 'CompleteController@verify')->name('verify')->middleware('auth');

