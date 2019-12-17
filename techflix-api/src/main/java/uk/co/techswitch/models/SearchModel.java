package uk.co.techswitch.models;

public class SearchModel {
    private String searchTerm;
    private Integer page = 0;
    private Integer resultsPerPage = 20;

    public SearchModel() { }

    public SearchModel(String searchTerm, Integer page, Integer resultsPerPage) {
        this.searchTerm = searchTerm;
        this.page = page;
        this.resultsPerPage = resultsPerPage;
    }

    public String getSearchTerm() {
        return searchTerm;
    }

    public Integer getPage() {
        return page;
    }

    public Integer getResultsPerPage() {
        return resultsPerPage;
    }
}
