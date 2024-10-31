package com.example.MoviesAPI.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MoviesAPI.models.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
