package uk.co.techswitch.repos;

import uk.co.techswitch.domain.Film;

import java.time.LocalDate;
import java.util.List;

public class FilmsRepo {
    private final List<Film> films = List.of(
        new Film(
                1,
                "Star Wars: The Rise of Skywalker",
                "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.",
                 LocalDate.of(2019, 12, 19),
                "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg",
                "https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
                "https://youtu.be/8Qn_spdM5Zg"
        )
    );

    public List<Film> getAllFilms(int limit, int offset) {
        return films;
    }
}
