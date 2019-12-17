package uk.co.techswitch.metadata.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PersonMetadata {
    private String birthday;
    private String knownForDepartment;
    private String deathDay;
    private List<String> alsoKnownAs;
    private String biography;
    private String placeOfBirth;
    private String imdbId;

    public PersonMetadata(String birthday, String knownForDepartment, String deathDay, List<String> alsoKnownAs, String biography, String placeOfBirth, String imdbId) {
        this.birthday = birthday;
        this.knownForDepartment = knownForDepartment;
        this.deathDay = deathDay;
        this.alsoKnownAs = alsoKnownAs;
        this.biography = biography;
        this.placeOfBirth = placeOfBirth;
        this.imdbId = imdbId;
    }

    public String getBirthday() {
        return birthday;
    }

    public String getKnownForDepartment() {
        return knownForDepartment;
    }

    public String getDeathDay() {
        return deathDay;
    }

    public List<String> getAlsoKnownAs() {
        return alsoKnownAs;
    }

    public String getBiography() {
        return biography;
    }

    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    public String getImdbId() {
        return imdbId;
    }
}
