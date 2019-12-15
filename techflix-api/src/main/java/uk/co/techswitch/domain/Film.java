package uk.co.techswitch.domain;

import java.time.LocalDate;

public class Film {
    private String id;
    private String title;
    private String summary;
    private LocalDate releaseDate;
    private String bannerImage;
    private String posterImage;
    private String video;

    public Film(String id,
                String title,
                String summary,
                LocalDate releaseDate,
                String bannerImage,
                String posterImage,
                String video) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.releaseDate = releaseDate;
        this.bannerImage = bannerImage;
        this.posterImage = posterImage;
        this.video = video;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getSummary() {
        return summary;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
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
}
