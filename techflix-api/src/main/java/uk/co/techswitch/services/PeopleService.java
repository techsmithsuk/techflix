package uk.co.techswitch.services;

import uk.co.techswitch.models.PersonModel;
import uk.co.techswitch.repos.LibraryApiClient;

import java.util.List;
import java.util.stream.Collectors;

public class PeopleService {
    private static final int PEOPLE_PER_PAGE = 20;

    private final LibraryApiClient libraryApiClient;

    public PeopleService(LibraryApiClient libraryApiClient) {
        this.libraryApiClient = libraryApiClient;
    }

    public List<PersonModel> getPeople(int page) {
        int offset = PEOPLE_PER_PAGE * (page - 1);
        return libraryApiClient
                .getAllPeople(PEOPLE_PER_PAGE, offset)
                .stream()
                .map(PersonModel::new)
                .collect(Collectors.toList());
    }
}
