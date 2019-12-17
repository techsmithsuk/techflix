package uk.co.techswitch.models;

import uk.co.techswitch.library.models.FilmWithCredits;
import uk.co.techswitch.library.models.ROLE;
import uk.co.techswitch.metadata.models.FilmMetadata;
import uk.co.techswitch.ratings.models.FilmRating;
import uk.co.techswitch.ratings.models.Review;

import java.util.List;
import java.util.stream.Collectors;

public class FilmDetailsModel {
    private final FilmWithCredits film;
    private final FilmMetadata metadata;
    private final FilmRating rating;

    public FilmDetailsModel(FilmWithCredits film, FilmMetadata metadata, FilmRating rating) {
        this.film = film;
        this.metadata = metadata;
        this.rating = rating;
    }

    public String getId() {
        return film.getId();
    }

    public String getTitle() {
        return film.getTitle();
    }

    public String getBannerImage() {
        return film.getBannerImage();
    }

    public String getPosterImage() {
        return film.getPosterImage();
    }

    public String getVideo() {
        return film.getVideo();
    }

    public Long getTmdbId() {
        return film.getTmdbId();
    }

    public List<PersonModel> getCast() {
        return film.getCredits().getOrDefault(ROLE.ACTOR, List.of())
                .stream()
                .map(PersonModel::new)
                .collect(Collectors.toList());
    }

    public List<PersonModel> getDirectors() {
        return film.getCredits().getOrDefault(ROLE.DIRECTOR, List.of())
                .stream()
                .map(PersonModel::new)
                .collect(Collectors.toList());
    }

    public String getImdbId() {
        return metadata.getImdbId();
    }

    public String getOverview() {
        return metadata.getOverview();
    }

    public String getReleaseDate() {
        return metadata.getReleaseDate();
    }

    public Long getBudget() {
        return metadata.getBudget();
    }

    public Long getRevenue() {
        return metadata.getRevenue();
    }

    public Long getRuntime() {
        return metadata.getRuntime();
    }

    public String getTagline() {
        return metadata.getTagline();
    }

    public Double getRating() {
        return rating.getRating();
    }

    public Integer getNumberOfRatings() {
        return rating.getNumberOfRatings();
    }

    public List<Review> getReviews() {
        return rating.getReviews();
    }
}
