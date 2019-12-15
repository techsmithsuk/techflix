package uk.co.techswitch.services;

import uk.co.techswitch.models.FilmModel;
import uk.co.techswitch.repos.FilmsRepo;

import java.util.List;
import java.util.stream.Collectors;

public class FilmsService {
    private static final int FILMS_PER_PAGE = 20;

    private final FilmsRepo filmsRepo;

    public FilmsService(FilmsRepo filmsRepo) {
        this.filmsRepo = filmsRepo;
    }

    public List<FilmModel> getFilms(int page) {
        int offset = FILMS_PER_PAGE * (page - 1);
        return filmsRepo
                .getAllFilms(FILMS_PER_PAGE, offset)
                .stream()
                .map(FilmModel::new)
                .collect(Collectors.toList());
    }
}
