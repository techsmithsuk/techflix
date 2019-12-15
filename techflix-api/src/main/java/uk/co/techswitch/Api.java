package uk.co.techswitch;

import com.fasterxml.jackson.datatype.jsr310.JSR310Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.setup.Environment;
import org.glassfish.jersey.client.JerseyClient;
import org.glassfish.jersey.client.JerseyClientBuilder;
import uk.co.techswitch.controllers.FilmsController;
import uk.co.techswitch.controllers.PeopleController;
import uk.co.techswitch.repos.LibraryApiClient;
import uk.co.techswitch.services.FilmsService;
import uk.co.techswitch.services.PeopleService;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;

public class Api extends Application<Configuration> {

    public static void main(String[] args) throws Exception {
        new Api().run(args);
    }

    @Override
    public void run(Configuration configuration, Environment environment) throws Exception {
        environment.getObjectMapper().registerModule(new JavaTimeModule());

        // Repos
        Client client = JerseyClientBuilder.newBuilder().build();
        LibraryApiClient libraryApiClient = new LibraryApiClient(client);

        // Services
        FilmsService filmsService = new FilmsService(libraryApiClient);
        PeopleService peopleService = new PeopleService(libraryApiClient);

        // Controllers
        FilmsController filmsController = new FilmsController(filmsService);
        PeopleController peopleController = new PeopleController(peopleService);


        environment.jersey().register(filmsController);
        environment.jersey().register(peopleController);
    }
}
