<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;


Route::get('/', function () {
    return Inertia::render('admin/Admin');
})->name('admin');

// Define otras rutas de administrador aquí