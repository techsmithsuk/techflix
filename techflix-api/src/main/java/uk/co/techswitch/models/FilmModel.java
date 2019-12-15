package uk.co.techswitch.models;

import uk.co.techswitch.domain.Film;

import java.time.LocalDate;

public class FilmModel {
    private Film film;

    public FilmModel(Film film) {
        this.film = film;
    }

    public int getId() {
        return film.getId();
    }

    public String getTitle() {
        return film.getTitle();
    }

    public String getSummary() {
        return film.getSummary();
    }


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
