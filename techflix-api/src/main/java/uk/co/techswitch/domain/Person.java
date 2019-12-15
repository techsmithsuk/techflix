package uk.co.techswitch.domain;

public class Person {
    private String id;
    private String name;
    private String bannerImage;
    private String posterImage;

    public Person() { }

    public Person(String id, String name, String bannerImage, String posterImage) {
        this.id = id;
        this.name = name;
        this.bannerImage = bannerImage;
        this.posterImage = posterImage;
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
}
