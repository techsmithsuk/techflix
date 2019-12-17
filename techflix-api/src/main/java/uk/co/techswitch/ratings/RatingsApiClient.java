package uk.co.techswitch.ratings;

import uk.co.techswitch.ratings.models.FilmRating;

import javax.ws.rs.client.Client;
import javax.ws.rs.core.MediaType;

public class RatingsApiClient {
    private final Client client;
    private final String baseUrl;

    public RatingsApiClient(Client client, String baseUrl) {
        this.client = client;
        this.baseUrl = baseUrl;
    }

    public FilmRating getFilmRating(Long tmdbId) {
        return client.target(baseUrl + "/film/" + tmdbId)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(FilmRating.class);
    }
}
