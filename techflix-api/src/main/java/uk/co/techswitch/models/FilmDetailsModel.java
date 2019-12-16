package uk.co.techswitch.models;

import uk.co.techswitch.domain.FilmDetails;

import java.util.List;
import java.util.stream.Collectors;

public class FilmDetailsModel extends FilmModel {
    private final List<PersonModel> cast;

    public FilmDetailsModel(FilmDetails film) {
        super(film);
        cast = film.getCast().stream().map(PersonModel::new).collect(Collectors.toList());
    }

    public List<PersonModel> getCast() {
        return cast;
    }
}
