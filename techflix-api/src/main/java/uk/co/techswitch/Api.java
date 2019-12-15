package uk.co.techswitch;

import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.setup.Environment;
import uk.co.techswitch.controllers.FilmsController;
import uk.co.techswitch.repos.FilmsRepo;
import uk.co.techswitch.services.FilmsService;

public class Api extends Application<Configuration> {

    public static void main(String[] args) throws Exception {
        new Api().run(args);
    }

    @Override
    public void run(Configuration configuration, Environment environment) throws Exception {
        // Repos
        FilmsRepo filmsRepo = new FilmsRepo();

        // Services
        FilmsService filmsService = new FilmsService(filmsRepo);

        // Controllers
        FilmsController filmsController = new FilmsController(filmsService);


        environment.jersey().register(filmsController);
    }
}
