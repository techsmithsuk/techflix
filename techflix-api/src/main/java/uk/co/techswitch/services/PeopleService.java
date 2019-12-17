package uk.co.techswitch.services;

import uk.co.techswitch.library.models.PersonWithRoles;
import uk.co.techswitch.metadata.MetadataApiClient;
import uk.co.techswitch.metadata.models.PersonMetadata;
import uk.co.techswitch.models.PersonDetailsModel;
import uk.co.techswitch.models.PersonModel;
import uk.co.techswitch.library.LibraryApiClient;
import uk.co.techswitch.models.SearchModel;

import java.util.List;
import java.util.stream.Collectors;

public class PeopleService {
    private final LibraryApiClient libraryApiClient;
    private final MetadataApiClient metadataApiClient;

    public PeopleService(LibraryApiClient libraryApiClient, MetadataApiClient metadataApiClient) {
        this.libraryApiClient = libraryApiClient;
        this.metadataApiClient = metadataApiClient;
    }

    public List<PersonModel> getPeople(SearchModel searchModel) {
        return libraryApiClient
                .getAllPeople(searchModel)
                .stream()
                .map(PersonModel::new)
                .collect(Collectors.toList());
    }

    public PersonDetailsModel getPerson(String id) {
        PersonWithRoles person = libraryApiClient.getPerson(id);
        PersonMetadata metadata = metadataApiClient.getPersonMetadata(person.getTmdbId());
        return new PersonDetailsModel(person, metadata);
    }
}
