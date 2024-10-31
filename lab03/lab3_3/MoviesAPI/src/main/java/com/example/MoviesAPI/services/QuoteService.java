package com.example.MoviesAPI.services;

import java.util.List;

import com.example.MoviesAPI.models.Quote;

public interface QuoteService {
    
    public List<Quote> getAllQuotesbyMovie(long movieId);
    public Quote getRandomQuote();
    public Quote getQuoteByMovie(Long movieId);
    public Quote getQuote(Long quoteId);
    public Quote addQuote(Quote quote);
}
