package uk.co.techswitch.domain;

public class Person {
    private String id;
    private String name;
    private String bannerImage;
    private String posterImage;
    private String imdbLink;

    public Person() { }

    public Person(String id, String name, String bannerImage, String posterImage, String imdbLink) {
        this.id = id;
        this.name = name;
        this.bannerImage = bannerImage;
        this.posterImage = posterImage;
        this.imdbLink = imdbLink;
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

    public String getImdbLink() {
        return imdbLink;
    }
}
