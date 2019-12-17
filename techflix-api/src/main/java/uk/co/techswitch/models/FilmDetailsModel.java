package uk.co.techswitch.models;

import uk.co.techswitch.library.models.FilmWithCredits;
import uk.co.techswitch.library.models.ROLE;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FilmDetailsModel {
    private final FilmWithCredits film;

    public FilmDetailsModel(FilmWithCredits film) {
        this.film = film;
    }

    public String getId() {
        return film.getId();
    }

    public String getTitle() {
        return film.getTitle();
    }

    public String getBannerImage() {
        return film.getBannerImage();
    }

    public String getPosterImage() {
        return film.getPosterImage();
    }

    public String getVideo() {
        return film.getVideo();
    }

    public Long getTmdbId() {
        return film.getTmdbId();
    }

    public List<PersonModel> getCast() {
        return film.getCredits().getOrDefault(ROLE.ACTOR, List.of())
                .stream()
                .map(PersonModel::new)
                .collect(Collectors.toList());
    }

    public List<PersonModel> getDirectors() {
        return film.getCredits().getOrDefault(ROLE.DIRECTOR, List.of())
                .stream()
                .map(PersonModel::new)
                .collect(Collectors.toList());
    }
}
