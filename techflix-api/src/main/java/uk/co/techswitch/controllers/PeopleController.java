package uk.co.techswitch.controllers;

import uk.co.techswitch.models.PersonModel;
import uk.co.techswitch.services.PeopleService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Optional;

@Path("/people")
@Produces(MediaType.APPLICATION_JSON)
public class PeopleController {
    private final PeopleService peopleService;

    public PeopleController(PeopleService peopleService) {
        this.peopleService = peopleService;
    }

    @GET
    public List<PersonModel> getPeople(@QueryParam("page") Optional<Integer> page) {
        return peopleService.getPeople(page.orElse(0));
    }
}
