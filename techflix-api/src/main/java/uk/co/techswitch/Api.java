package uk.co.techswitch;

import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.setup.Environment;
import uk.co.techswitch.controllers.FilmsController;
import uk.co.techswitch.controllers.PeopleController;
import uk.co.techswitch.repos.FilmsRepo;
import uk.co.techswitch.repos.PeopleRepo;
import uk.co.techswitch.services.FilmsService;
import uk.co.techswitch.services.PeopleService;

public class Api extends Application<Configuration> {

    public static void main(String[] args) throws Exception {
        new Api().run(args);
    }

    @Override
    public void run(Configuration configuration, Environment environment) throws Exception {
        // Repos
        FilmsRepo filmsRepo = new FilmsRepo();
        PeopleRepo peopleRepo = new PeopleRepo();

        // Services
        FilmsService filmsService = new FilmsService(filmsRepo);
        PeopleService peopleService = new PeopleService(peopleRepo);

        // Controllers
        FilmsController filmsController = new FilmsController(filmsService);
        PeopleController peopleController = new PeopleController(peopleService);


        environment.jersey().register(filmsController);
        environment.jersey().register(peopleController);
    }
}
