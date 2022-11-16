<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function home()
    {
        return view('guest.welcome');
    }

    public function about()
    {
        return view('guest.about');
    }

    public function services()
    {
        return view('guest.services');
    }

    public function team()
    {
        return view('guest.team');
    }

    public function plans()
    {
        return view('guest.plans');
    }

    public function faq()
    {
        return view('guest.faq');
    }

    public function blog()
    {
        return view('guest.blog');
    }
    
    public function contact()
    {
        return view('guest.contact');
    }
}
