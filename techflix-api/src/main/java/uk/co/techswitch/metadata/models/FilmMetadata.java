package uk.co.techswitch.metadata.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class FilmMetadata {
    private String imdbId;
    private String overview;
    private String releaseDate;
    private Long budget;
    private Long revenue;
    private Long runtime;
    private String tagline;

    public FilmMetadata() { }

    public FilmMetadata(String imdbId, String overview, String releaseDate, Long budget, Long revenue, Long runtime, String tagline) {
        this.imdbId = imdbId;
        this.overview = overview;
        this.releaseDate = releaseDate;
        this.budget = budget;
        this.revenue = revenue;
        this.runtime = runtime;
        this.tagline = tagline;
    }

    public String getImdbId() {
        return imdbId;
    }

    public String getOverview() {
        return overview;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public Long getBudget() {
        return budget;
    }

    public Long getRevenue() {
        return revenue;
    }

    public Long getRuntime() {
        return runtime;
    }

    public String getTagline() {
        return tagline;
    }
}
