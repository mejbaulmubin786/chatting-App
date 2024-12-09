<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller {
    public function index(Product $product) {
        return response()->json($product->reviews, 200);
    }

    public function store(Request $request, Product $product) {
        $validated = $request->validate([
            'reviewer_name' => 'required|string|max:255',
            'review' => 'required|string',
            'rating' => 'required|integer|between:1,5',
        ]);

        $review = $product->reviews()->create($validated);

        return response()->json($review, 201);
    }

    public function show(Product $product, Review $review) {
        return response()->json($review, 200);
    }

    public function update(Request $request, Product $product, Review $review) {
        $validated = $request->validate([
            'reviewer_name' => 'required|string|max:255',
            'review' => 'required|string',
            'rating' => 'required|integer|between:1,5',
        ]);

        $review->update($validated);

        return response()->json($review, 200);
    }

    public function destroy(Product $product, Review $review) {
        $review->delete();

        return response()->json(['message' => 'Review deleted successfully'], 200);
    }
}
