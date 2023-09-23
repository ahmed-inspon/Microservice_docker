<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactsController;


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
Route::get('/get_all_contacts',[ContactsController::class,'index']);
Route::post('/add_contact',[ContactsController::class,'store']);

Route::get('/', function () {
    return response('<h1>This is  a Contacts Microservice</h1>',200)->header('Content-Type', 'text/html');
});

