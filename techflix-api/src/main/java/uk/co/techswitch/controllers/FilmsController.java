package uk.co.techswitch.controllers;

import uk.co.techswitch.models.FilmDetailsModel;
import uk.co.techswitch.models.FilmModel;
import uk.co.techswitch.models.SearchModel;
import uk.co.techswitch.services.FilmsService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/films")
@Produces(MediaType.APPLICATION_JSON)
public class FilmsController {
    private final FilmsService filmsService;

    public FilmsController(FilmsService filmsService) {
        this.filmsService = filmsService;
    }

    @GET
    @Path("")
    public List<FilmModel> getFilms(SearchModel searchModel) {
        return filmsService.getFilms(searchModel == null ? new SearchModel() : searchModel);
    }

    @GET
    @Path("/{id}")
    public FilmDetailsModel getFilm(@PathParam("id") String id) {
        return filmsService.getFilm(id);
    }
}
