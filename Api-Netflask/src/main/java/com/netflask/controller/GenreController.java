package com.netflask.controller;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.netflask.model.Genre;
import com.netflask.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class GenreController {


    @Autowired
    private GenreService genreService;


    @CrossOrigin(origins = "*")
    @GetMapping("/genres")
    public ResponseEntity<Iterable<Genre>> getGenres() {

        try {

            Iterable<Genre> allGenres = genreService.getGenres();

            return new ResponseEntity<>(allGenres, HttpStatus.OK);


        }catch (Exception e) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }



  @CrossOrigin(origins = "*")
  @GetMapping("genre/{id}")
  public ResponseEntity<Optional<Genre>> getGenre(@PathVariable("id") final Long id ) {

        try {

                Optional<Genre> myGenre = genreService.getGenre(id);

                if(myGenre.isPresent()){

                    return new ResponseEntity<>(myGenre, HttpStatus.OK);

                }

                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);


        } catch (Exception e) {


            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);


        }



  }


}
