package uk.co.techswitch.repos;

import uk.co.techswitch.domain.Film;
import uk.co.techswitch.domain.FilmDetails;
import uk.co.techswitch.domain.Person;
import uk.co.techswitch.domain.PersonDetails;

import javax.ws.rs.client.Client;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import java.util.List;

public class LibraryApiClient {
    private final Client client;

    public LibraryApiClient(Client client) {
        this.client = client;
    }

    public List<Film> test(String url) {
        return client.target(url)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(new GenericType<>() {});
    }

    public List<Film> getAllFilms(int limit, int offset) {
        return client
                .target("http://library/films")
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(new GenericType<>() {});
    }

    public List<Person> getAllPeople(int limit, int offset) {
        return client
                .target("http://library/people")
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(new GenericType<>() {});
    }

    public FilmDetails getFilm(String id) {
        return client
                .target("http://library/films/" + id)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(FilmDetails.class);
    }

    public PersonDetails getPerson(String id) {
        return client
                .target("http://library/people/" + id)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(PersonDetails.class);
    }
}
