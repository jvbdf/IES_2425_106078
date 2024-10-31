package com.example.MoviesAPI.services;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MoviesAPI.models.Quote;
import com.example.MoviesAPI.repositories.QuoteRepository;

@Service
public class QuoteServiceImpl implements QuoteService {

    private final QuoteRepository quoteRepository;

    @Autowired
    public QuoteServiceImpl(QuoteRepository quoteRepository) {
        this.quoteRepository = quoteRepository;
    }

    @Override
    public List<Quote> getAllQuotesbyMovie(long movieId) {
        List<Quote> quotes = quoteRepository.findAll();
        quotes.removeIf(quote -> quote.getMovie().getId() != movieId);
        return quotes;
    }

    @Override
    public Quote getRandomQuote() {
        Random rand = new Random();
        List<Quote> quotes = quoteRepository.findAll();
        return quotes.get(rand.nextInt(quotes.size()));
    }

    @Override
    public Quote getQuoteByMovie(Long movieId) {
        Random rand = new Random();
        List<Quote> quotes = this.getAllQuotesbyMovie(movieId);
    return quotes.get(rand.nextInt(quotes.size()));
    }

    @Override
    public Quote getQuote(Long quoteId) {
        return quoteRepository.findById(quoteId).orElse(null);
    }

    @Override
    public Quote addQuote(Quote quote) {
        return quoteRepository.save(quote);
    }

}
