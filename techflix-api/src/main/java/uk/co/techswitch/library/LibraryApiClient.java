package uk.co.techswitch.library;

import uk.co.techswitch.library.models.Film;
import uk.co.techswitch.library.models.FilmWithCredits;
import uk.co.techswitch.library.models.Person;
import uk.co.techswitch.library.models.PersonWithRoles;
import uk.co.techswitch.models.SearchModel;

import javax.ws.rs.client.Client;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import java.util.List;

public class LibraryApiClient {
    private final Client client;
    private final String baseUrl;

    public LibraryApiClient(Client client, String baseUrl) {
        this.client = client;
        this.baseUrl = baseUrl;
    }

    public List<Film> getAllFilms(SearchModel searchModel) {
        System.out.println(baseUrl);
        System.out.println(searchModel);
        return client
                .target(baseUrl + "/films")
                .queryParam("searchTerm", searchModel.getSearchTerm())
                .queryParam("page", searchModel.getPage())
                .queryParam("resultsPerPage", searchModel.getResultsPerPage())
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(new GenericType<>() {});
    }

    public List<Person> getAllPeople(SearchModel searchModel) {
        return client
                .target(baseUrl + "/people")
                .queryParam("searchTerm", searchModel.getSearchTerm())
                .queryParam("page", searchModel.getPage())
                .queryParam("resultsPerPage", searchModel.getResultsPerPage())
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(new GenericType<>() {});
    }

    public FilmWithCredits getFilm(String id) {
        return client
                .target(baseUrl + "/films/" + id)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(FilmWithCredits.class);
    }

    public PersonWithRoles getPerson(String id) {
        return client
                .target(baseUrl + "/people/" + id)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(PersonWithRoles.class);
    }
}
