package uk.co.techswitch.models;

import uk.co.techswitch.library.models.Person;

public class PersonModel {
    private Person person;

    public PersonModel(Person person) {
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
}
