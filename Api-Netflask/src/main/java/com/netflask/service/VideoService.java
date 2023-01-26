package com.netflask.service;


import com.netflask.model.Video;
import com.netflask.repository.VideoRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;


@Data
@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;


    public Iterable<Video> getVideos() {
        return videoRepository.findAll();
    }

    public Video saveVideo(Video video) {
        return videoRepository.save(video);
    }

    public void deleteVideo(final Long id) {
        videoRepository.deleteById(id);
    }

    public Optional<Video> getVideo(final Long id) {
        return videoRepository.findById(id);
    }



}
