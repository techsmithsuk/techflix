package uk.co.techswitch.models;

import uk.co.techswitch.library.models.PersonWithRoles;
import uk.co.techswitch.library.models.ROLE;

import java.util.List;
import java.util.stream.Collectors;

public class PersonDetailsModel {
    private final PersonWithRoles person;

    public PersonDetailsModel(PersonWithRoles person) {
        this.person = person;
    }

    public String getId() {
        return person.getId();
    }

    public String getName() {
        return person.getName();
    }

    public String getPosterImage() {
        return person.getPosterImage();
    }

    public String getBannerImage() {
        return person.getBannerImage();
    }

    public Long getTmdbId() {
        return person.getTmdbId();
    }

    public List<FilmModel> getActorIn() {
        return person.getRoles().getOrDefault(ROLE.ACTOR, List.of())
                .stream()
                .map(FilmModel::new)
                .collect(Collectors.toList());
    }

    public List<FilmModel> getDirected() {
        return person.getRoles().getOrDefault(ROLE.DIRECTOR, List.of())
                .stream()
                .map(FilmModel::new)
                .collect(Collectors.toList());
    }
}
