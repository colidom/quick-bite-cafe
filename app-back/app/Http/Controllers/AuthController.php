<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // Validar el registro
        $data = $request->validate();
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();
    }

    public function logout(Request $request)
    {
    }
}
