package uk.co.techswitch.models;

import uk.co.techswitch.library.models.PersonWithRoles;
import uk.co.techswitch.library.models.ROLE;
import uk.co.techswitch.metadata.models.PersonMetadata;

import java.util.List;
import java.util.stream.Collectors;

public class PersonDetailsModel {
    private final PersonWithRoles person;
    private final PersonMetadata metadata;

    public PersonDetailsModel(PersonWithRoles person, PersonMetadata metadata) {
        this.person = person;
        this.metadata = metadata;
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

    public String getBirthday() {
        return metadata.getBirthday();
    }

    public String getKnownForDepartment() {
        return metadata.getKnownForDepartment();
    }

    public String getDeathDay() {
        return metadata.getDeathDay();
    }

    public List<String> getAlsoKnownAs() {
        return metadata.getAlsoKnownAs();
    }

    public String getBiography() {
        return metadata.getBiography();
    }

    public String getPlaceOfBirth() {
        return metadata.getPlaceOfBirth();
    }

    public String getImdbId() {
        return metadata.getImdbId();
    }
}
