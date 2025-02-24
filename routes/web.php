<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckRole;
use Inertia\Inertia;

use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/billing', function () {
        return Inertia::render('Dashboard/Billing');
    })->name('dashboard.billing');

    Route::get('/tickets', function () {
        return Inertia::render('Dashboard/Tickets');
    })->name('dashboard.tickets');

    Route::get('/news', function () {
        return Inertia::render('Dashboard/News');
    })->name('dashboard.news');

    Route::get('/services', function () {
        return Inertia::render('Dashboard/Services');
    })->name('dashboard.services');

    Route::get('/store', function () {
        return Inertia::render('Dashboard/Store');
    })->name('dashboard.store');

    Route::get('/cart', function () {
        return Inertia::render('Dashboard/Cart');
    })->name('dashboard.cart');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Incluye las rutas de administrador y aplica el middleware de rol
Route::middleware(['auth', CheckRole::class])->prefix('admin')->group(function () {
    require __DIR__.'/admin.php';
});

require __DIR__.'/auth.php';
