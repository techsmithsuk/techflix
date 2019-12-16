package uk.co.techswitch.models;

import org.joda.time.Period;
import uk.co.techswitch.domain.PersonDetails;

import java.util.List;
import java.util.stream.Collectors;

public class PersonDetailsModel extends PersonModel {
    private final List<FilmModel> films;

    public PersonDetailsModel(PersonDetails person) {
        super(person);
        this.films = person.getFilms().stream().map(FilmModel::new).collect(Collectors.toList());
    }

    public List<FilmModel> getFilms() {
        return films;
    }
}
