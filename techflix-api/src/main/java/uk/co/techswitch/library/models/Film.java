package uk.co.techswitch.library.models;

public class Film {
    private String id;
    private String title;
    private String bannerImage;
    private String posterImage;
    private String video;
    private Long tmdbId;

    public Film() { }

    public Film(String id,
                String title,
                String bannerImage,
                String posterImage,
                String video,
                Long tmdbId) {
        this.id = id;
        this.title = title;
        this.bannerImage = bannerImage;
        this.posterImage = posterImage;
        this.video = video;
        this.tmdbId = tmdbId;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getBannerImage() {
        return bannerImage;
    }

    public String getPosterImage() {
        return posterImage;
    }

    public String getVideo() {
        return video;
    }

    public Long getTmdbId() {
        return tmdbId;
    }
}
