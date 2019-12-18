package uk.co.techswitch.ratings.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FilmRating {
    private Double rating;
    private Integer ratingsCount;
    private List<Review> reviews;

    public FilmRating() { }

    public FilmRating(Double rating, Integer ratingsCount, List<Review> reviews) {
        this.rating = rating;
        this.ratingsCount = ratingsCount;
        this.reviews = reviews;
    }

    public Double getRating() {
        return rating;
    }

    public Integer getRatingsCount() {
        return ratingsCount;
    }

    public List<Review> getReviews() {
        return reviews;
    }
}
