package uk.co.techswitch.library.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PersonWithRoles extends Person {
    private Map<ROLE, List<Film>> roles;

    public PersonWithRoles() { }

    public PersonWithRoles(String id,
                           String name,
                           String bannerImage,
                           String posterImage,
                           Long imdbLink,
                           Map<ROLE, List<Film>> roles) {
        super(id, name, bannerImage, posterImage, imdbLink);
        this.roles = roles;
    }

    public Map<ROLE, List<Film>> getRoles() {
        return roles;
    }
}
