<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // Validar el registro
        $data = $request->validated();
    }

    public function login(Request $request)
    {
    }

    public function logout(Request $request)
    {
    }
}
