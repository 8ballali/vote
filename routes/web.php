<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index');
Route::get('/registrasi', function () {
    return view('registrasi');
});
Route::get('/syarat', function () {
    return view('syarat');
});
Route::get('/visi1/{id}', function () {
    return view('visi1');
});
Route::post('voting', 'HomeController@test');
// Route::get('contoh', 'HomeController@test');
