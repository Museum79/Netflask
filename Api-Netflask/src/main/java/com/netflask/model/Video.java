package com.netflask.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "videos")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String date;

    private String description;

    private  String picture;

    private String video;

    private String category;


    @ManyToMany
    @JoinTable(name = "videos_genres",
            joinColumns = @JoinColumn(name = "video_id", referencedColumnName =
                    "id" ),
            inverseJoinColumns = @JoinColumn(name = "genre_id", referencedColumnName = "id"))
    @JsonBackReference
    private List<Genre> genres;



}
