<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GuestController;

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

Route::get('/', [GuestController::class, 'home'])->name('home');
Route::get('about', [GuestController::class, 'about'])->name('about');
Route::get('services', [GuestController::class, 'services'])->name('services');
Route::get('service/details', [GuestController::class, 'services'])->name('service-details');
Route::get('team', [GuestController::class, 'team'])->name('team');
Route::get('plans', [GuestController::class, 'plans'])->name('plans');
Route::get('faq', [GuestController::class, 'faq'])->name('faq');
Route::get('blog', [GuestController::class, 'blog'])->name('blog');
Route::get('blog-details', [GuestController::class, 'blogDetail'])->name('blog-details');
Route::get('contact', [GuestController::class, 'contact'])->name('contact');
