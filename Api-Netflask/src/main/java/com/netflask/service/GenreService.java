package com.netflask.service;


import com.netflask.model.Genre;
import com.netflask.repository.GenreRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;



    public Iterable<Genre> getGenres() {
        return genreRepository.findAll();
    }


    public Optional<Genre> getGenre(final Long id) {
        return genreRepository.findById(id);
    }

}
