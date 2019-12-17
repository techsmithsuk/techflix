package uk.co.techswitch.models;

import uk.co.techswitch.library.models.Film;


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

    public String getPosterImage() {
        return film.getPosterImage();
    }
}
