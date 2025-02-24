<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Session;

class DashboardController extends Controller
{
    public function index()
    {
        $userId = Auth::id();
        $sessions = Session::where('user_id', $userId)->get();

        return Inertia::render('Dashboard/Index', [
            'sessions' => $sessions
        ]);
    }
}