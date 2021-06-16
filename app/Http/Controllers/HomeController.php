<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Poling;
class HomeController extends Controller
{
    public function index()
    {
        $poling = Poling::with('candidate')->get();
        return view('index', compact('poling'));
    }

    public function test()
    {
        return view('index');
    }
}
