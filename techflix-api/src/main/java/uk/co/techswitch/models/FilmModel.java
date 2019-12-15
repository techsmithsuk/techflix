package uk.co.techswitch.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import uk.co.techswitch.domain.Film;

import java.time.LocalDate;

public class FilmModel {
    private Film film;

    public FilmModel(Film film) {
        this.film = film;
    }

    public String getId() {
        return film.getId();
    }

    public String getTitle() {
        return film.getTitle();
    }

    public String getSummary() {
        return film.getSummary();
    }

    @JsonFormat(pattern = "dd-MM-yyyy")
    public LocalDate getReleaseDate() {
        return film.getReleaseDate();
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
}
