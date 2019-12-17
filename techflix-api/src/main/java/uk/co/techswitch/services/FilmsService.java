package uk.co.techswitch.services;

import uk.co.techswitch.library.models.FilmWithCredits;
import uk.co.techswitch.models.FilmDetailsModel;
import uk.co.techswitch.models.FilmModel;
import uk.co.techswitch.models.SearchModel;
import uk.co.techswitch.library.LibraryApiClient;

import java.util.List;
import java.util.stream.Collectors;

public class FilmsService {
    private final LibraryApiClient libraryApiClient;

    public FilmsService(LibraryApiClient libraryApiClient) {
        this.libraryApiClient = libraryApiClient;
    }

    public List<FilmModel> getFilms(SearchModel searchModel) {
        return libraryApiClient
                .getAllFilms(searchModel)
                .stream()
                .map(FilmModel::new)
                .collect(Collectors.toList());
    }

    public FilmDetailsModel getFilm(String id) {
        FilmWithCredits film = libraryApiClient.getFilm(id);
        return new FilmDetailsModel(film);
    }
}
