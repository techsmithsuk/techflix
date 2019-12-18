package uk.co.techswitch.metadata;

import uk.co.techswitch.metadata.models.FilmMetadata;
import uk.co.techswitch.metadata.models.PersonMetadata;

import javax.ws.rs.client.Client;
import javax.ws.rs.core.MediaType;

public class MetadataApiClient {
    private final Client client;
    private final String baseUrl;

    public MetadataApiClient(Client client, String baseUrl) {
        this.client = client;
        this.baseUrl = baseUrl;
    }

    public FilmMetadata getFilmMetadata(Long tmdbId) {
        return client.target(baseUrl + "/films/" + tmdbId)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(FilmMetadata.class);
    }

    public PersonMetadata getPersonMetadata(Long tmdbId) {
        return client.target(baseUrl + "/people/" + tmdbId)
                .request(MediaType.APPLICATION_JSON_TYPE)
                .get(PersonMetadata.class);
    }
}
