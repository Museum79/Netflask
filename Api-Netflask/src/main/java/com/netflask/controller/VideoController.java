package com.netflask.controller;


import com.netflask.model.Genre;
import com.netflask.model.Video;
import com.netflask.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
public class VideoController {


    @Autowired
    private VideoService videoService;


    @CrossOrigin(origins = "*")
    @PostMapping("/video")
    public ResponseEntity<Video>  createVideo(@RequestBody Video video) {

        try {

            Video savedVideo = videoService.saveVideo(video);
            return new ResponseEntity<>(savedVideo, HttpStatus.CREATED);
        } catch (Exception e) {

        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

    @CrossOrigin(origins = "*")
    @GetMapping("/video/{id}")
    public ResponseEntity<Optional<Video>> getVideo(@PathVariable("id")final Long id) {

        try {
            Optional<Video> video = videoService.getVideo(id);

            if (video.isPresent()) {
                return new ResponseEntity<>(video, HttpStatus.OK);
            }
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);


        } catch (Exception e) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @CrossOrigin(origins = "*")
    @GetMapping("/videos")
    public ResponseEntity<Iterable<Video>> getVideos() {

            try {

               Iterable <Video> allVideos = videoService.getVideos();

                return new ResponseEntity<>(allVideos, HttpStatus.OK);

            } catch (Exception e) {

                return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }


    @CrossOrigin(origins = "*")
    @DeleteMapping("/video/{id}")
    public ResponseEntity<Optional<Video>> deleteVideo(@PathVariable("id") final Long id) {

        try{

            Optional<Video> video = videoService.getVideo(id);

            if(video.isPresent()) {
                videoService.deleteVideo(id);
                return new ResponseEntity<>(video, HttpStatus.CREATED);
            }

            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);

        } catch (Exception e) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }




    @CrossOrigin(origins = "*")
    @PutMapping("/video/{id}")
    public ResponseEntity<Optional<Video>> updateVideo(@PathVariable("id") final Long id, @RequestBody Video video) {
        try {
            Optional<Video> updatedVideo = videoService.getVideo(id);

            if(updatedVideo.isPresent()) {
                Video currentVideo = updatedVideo.get();

                String title = video.getTitle();
                if(title != null){
                    currentVideo.setTitle(title);
                }

                String date = video.getDate();
                if(date != null){
                    currentVideo.setDate(date);
                }

                String description = video.getDescription();
                if(description != null) {
                    currentVideo.setDescription(description);
                }

                String picture = video.getPicture();
                if(picture != null){
                    currentVideo.setPicture(picture);
                }

                String videeo = video.getVideo();
                if(videeo != null) {
                    currentVideo.setVideo(videeo);
                }

                String category = video.getCategory();
                if(category != null) {
                    currentVideo.setCategory(category);
                }

                List<Genre> genres = video.getGenres();
                if(genres != null) {
                    currentVideo.setGenres(genres);
                }

                videoService.saveVideo(currentVideo);

                return new ResponseEntity<>(updatedVideo, HttpStatus.CREATED);

            }

            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);

        } catch (Exception e) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}


