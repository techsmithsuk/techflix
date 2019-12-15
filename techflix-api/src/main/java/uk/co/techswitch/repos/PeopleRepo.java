package uk.co.techswitch.repos;

import uk.co.techswitch.domain.Person;

import java.util.List;

public class PeopleRepo {
    private final List<Person> people = List.of(
        new Person(
                "f16ee238-9920-4ff7-84f1-8bb9e5ebe884",
                "Daisey Ridley",
                "https://m.media-amazon.com/images/M/MV5BZjA0Y2RkYTEtNjc3Mi00ZWY2LTg0N2ItMmVjNGMzNTVlYzI4XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
                "https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"
        )
    );

    public List<Person> getAllPeople(int limit, int offset) {
        return people;
    }
}
