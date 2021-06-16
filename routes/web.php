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

Route::get('/', function () {
    return view('index');
});
Route::get('/registrasi', function () {
    return view('registrasi');
});
Route::get('/syarat', function () {
    return view('syarat');
});
Route::get('/visi1', function () {
    return view('visi1');
});
Route::get('/visi2', function () {
    return view('visi2');
});
Route::get('/visi3', function () {
    return view('visi3');
});
