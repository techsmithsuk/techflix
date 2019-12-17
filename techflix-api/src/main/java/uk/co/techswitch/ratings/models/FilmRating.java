package uk.co.techswitch.ratings.models;

import java.util.List;

public class FilmRating {
    private Double rating;
    private Integer numberOfRatings;
    private List<Review> reviews;

    public FilmRating(Double rating, Integer numberOfRatings, List<Review> reviews) {
        this.rating = rating;
        this.numberOfRatings = numberOfRatings;
        this.reviews = reviews;
    }

    public Double getRating() {
        return rating;
    }

    public Integer getNumberOfRatings() {
        return numberOfRatings;
    }

    public List<Review> getReviews() {
        return reviews;
    }
}
