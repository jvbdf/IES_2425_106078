package com.example.MoviesAPI.services;

import java.util.List;

import com.example.MoviesAPI.models.Movie;

public interface MovieService {

    public List<Movie> getAllMovies();
    public Movie getMovieById(Long id);
    public Movie addMovie(Movie movie);
    
}
