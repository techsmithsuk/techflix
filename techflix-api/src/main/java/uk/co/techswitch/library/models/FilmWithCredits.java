package uk.co.techswitch.library.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FilmWithCredits extends Film {
    private Map<ROLE, List<Person>> credits;

    public FilmWithCredits() { }

    public FilmWithCredits(String id,
                           String title,
                           String bannerImage,
                           String posterImage,
                           String video,
                           Long tmdbId,
                           Map<ROLE, List<Person>> credits) {
        super(id, title, bannerImage, posterImage, video, tmdbId);
        this.credits = credits;
    }

    public Map<ROLE, List<Person>> getCredits() {
        return credits;
    }
}
