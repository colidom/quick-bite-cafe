<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Definimos la constante para el valor de paginación
    const PAGINATION_VALUE = 10;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ProductCollection(Product::where('available', 1)->orderBy('id', 'DESC')->paginate(self::PAGINATION_VALUE));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
