<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        // Revisar el password
        if (!Auth::attempt([$data])) {
            return response([
                'errors' => '¡El email o la contraseña son incorrectos!'
            ], 422);
        };
    }

    public function logout(Request $request)
    {
    }
}
