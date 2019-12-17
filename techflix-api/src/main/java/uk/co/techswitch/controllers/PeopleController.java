package uk.co.techswitch.controllers;

import uk.co.techswitch.models.PersonDetailsModel;
import uk.co.techswitch.models.PersonModel;
import uk.co.techswitch.models.SearchModel;
import uk.co.techswitch.services.PeopleService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/people")
@Produces(MediaType.APPLICATION_JSON)
public class PeopleController {
    private final PeopleService peopleService;

    public PeopleController(PeopleService peopleService) {
        this.peopleService = peopleService;
    }

    @GET
    @Path("")
    public List<PersonModel> getPeople(SearchModel searchModel) {
        return peopleService.getPeople(searchModel);
    }

    @GET
    @Path("/{id}")
    public PersonDetailsModel getPerson(@PathParam("id") String id) {
        return peopleService.getPerson(id);
    }
}
