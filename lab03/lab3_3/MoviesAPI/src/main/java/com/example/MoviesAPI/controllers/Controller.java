package com.example.MoviesAPI.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.MoviesAPI.models.Movie;
import com.example.MoviesAPI.models.Quote;
import com.example.MoviesAPI.services.MovieService;
import com.example.MoviesAPI.services.QuoteService;

@RestController
@RequestMapping("api/v1")
public class Controller {

    private final QuoteService quoteService;
    private final MovieService movieService;

    @Autowired
    public Controller(QuoteService quoteService, MovieService movieService) {
        this.quoteService = quoteService;
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    public List<Movie> getMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/movies/{id}")
    public Movie getMovie(@PathVariable(value = "id") Long movieId) {
        return movieService.getMovieById(movieId);
    }

    @GetMapping("/quote")
    public Quote getRandomQuote(@RequestParam(value = "movie", required = false) Long movieId) {
        if (movieId != null) {
            return quoteService.getQuoteByMovie(movieId);
        }
        return quoteService.getRandomQuote();
    }

    @GetMapping("/quotes")
    public List<Quote> getQuotesByMovie(@RequestParam(value = "movie", defaultValue = "") long movieId) {
        return quoteService.getAllQuotesbyMovie(movieId);
    }

    @GetMapping("/quotes/{id}")
    public Quote getQuote(@PathVariable(value = "id") Long quoteId) {
        return quoteService.getQuote(quoteId);
    }

    @PostMapping("/movies")
    public Movie postMovie(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    @PostMapping("/quote")
    public Quote postQuote(@RequestBody Quote quote) {
        return quoteService.addQuote(quote);
    }
}
