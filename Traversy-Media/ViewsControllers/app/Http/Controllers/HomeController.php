<?php

namespace App\Http\Controllers;

class HomeController extends Controller {
    public function index() {

        $jobs = [
            'Web Developer',
            'Database Admin',
            'Software Engineer',
            'Systems Analyst',
        ];
        return view('jobs.index', compact('jobs'));
    }
}
