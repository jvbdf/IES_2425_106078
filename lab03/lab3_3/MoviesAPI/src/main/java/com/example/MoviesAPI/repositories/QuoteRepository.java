package com.example.MoviesAPI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MoviesAPI.models.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Long> {
}
