package uk.co.techswitch.library.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Person {
    private String id;
    private String name;
    private String bannerImage;
    private String posterImage;
    private Long tmdbId;

    public Person() { }

    public Person(String id, String name, String bannerImage, String posterImage, Long tmdbId) {
        this.id = id;
        this.name = name;
        this.bannerImage = bannerImage;
        this.posterImage = posterImage;
        this.tmdbId = tmdbId;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBannerImage() {
        return bannerImage;
    }

    public String getPosterImage() {
        return posterImage;
    }

    public Long getTmdbId() {
        return tmdbId;
    }
}
