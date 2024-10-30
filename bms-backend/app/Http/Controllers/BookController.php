<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of all books.
     */
    public function index()
    {
        // Retrieve all books and return as JSON
        $books = Book::all();
        return response()->json($books);
    }

    /**
     * Display the specified book.
     */
    public function show($id)
    {
        // Find book by ID
        $book = Book::find($id);

        if ($book) {
            return response()->json($book);
        } else {
            return response()->json(['message' => 'Book not found'], 404);
        }
    }

    /**
     * Store a newly created book.
     */
    public function store(Request $request)
    {
        // Validate request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'published_year' => 'required|integer',
            'genre' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        // Create new book
        $book = Book::create($validatedData);

        return response()->json($book, 201); // 201 Created status code
    }

    /**
     * Update the specified book.
     */
    public function update(Request $request, $id)
    {
        // Find book by ID
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        // Validate request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'published_year' => 'required|integer',
            'genre' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        // Update book with validated data
        $book->update($validatedData);

        return response()->json($book); // Return updated book as JSON
    }

    /**
     * Remove the specified book.
     */
    public function destroy($id)
    {
        // Find book by ID
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        // Delete the book
        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }
}
