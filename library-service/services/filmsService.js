const starWars1 = {
    id: "1e342361-c438-468c-828d-eab01dbdcf8f",
    title: "Star Wars: Episode I - The Phantom Menace",
    bannerImage: "https://m.media-amazon.com/images/M/MV5BMTMxNjc0NTg5OV5BMl5BanBnXkFtZTcwMzgyMzA4NA@@._V1_.jpg",
    posterImage: "https://m.media-amazon.com/images/M/MV5BNjE1NmJhMmUtMjA2Yy00YjFjLTg0NGUtZDkzN2ExMTU4OGNkXkEyXkFqcGdeQXVyNDUzNzIxMzk@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    video: "https://www.youtube.com/embed/bD7bpG-zDJQ",
    tmdbId: 1893,
};

const starWars9 = {
    id: "2ec3ce27-56e5-4576-b759-e1d8071216ae",
    title: "Star Wars: The Rise of Skywalker",
    bannerImage: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg",
    posterImage: "https://m.media-amazon.com/images/M/MV5BN2Q3OTk3ZWItN2RiOC00MTk5LThjYzMtMGUxZDE4YTBmMGU3XkEyXkFqcGdeQXVyMjM0NDg3NTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    video: "https://www.youtube.com/embed/8Qn_spdM5Zg",
    tmdbId: 181812,
};

const liamNeeson = {
    id: "3994453f-522d-4224-a52b-44bbf44f4df4",
    name: "Liam Neeson",
    bannerImage: "https://m.media-amazon.com/images/M/MV5BMTEwZjA4YzctYjljNC00OWVhLWEyYjAtZjYyN2NlZjRmYzAwXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
    posterImage: "https://m.media-amazon.com/images/M/MV5BMjA1MTQ3NzU1MV5BMl5BanBnXkFtZTgwMDE3Mjg0MzE@._V1_.jpg",
    tmdbId: 0,
};

const daiseyRidley = {
    id: "f16ee238-9920-4ff7-84f1-8bb9e5ebe884",
    name: "Daisey Ridley",
    bannerImage: "https://m.media-amazon.com/images/M/MV5BZjA0Y2RkYTEtNjc3Mi00ZWY2LTg0N2ItMmVjNGMzNTVlYzI4XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    posterImage: "https://m.media-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_SY1000_CR0,0,799,1000_AL_.jpg",
    tmdb: 0,
};

const castMap = {
    "1e342361-c438-468c-828d-eab01dbdcf8f": {
        ACTOR: [liamNeeson]
    },
    "2ec3ce27-56e5-4576-b759-e1d8071216ae": { 
        ACTOR: [daiseyRidley] 
    }
}

const filmMap = {
    "3994453f-522d-4224-a52b-44bbf44f4df4": {
        ACTOR: [starWars1]
    },
    "f16ee238-9920-4ff7-84f1-8bb9e5ebe884": {
        ACTOR: [starWars9]
    }
}

const allFilms = [
    starWars1, starWars9
];

const allPeople = [
    liamNeeson, daiseyRidley
];

function getAllFilms() {
    return allFilms;
}

function getAllPeople() {
    return allPeople;
}

function getFilm(id) {
    let film = allFilms.filter(film => film.id === id)[0];
    return { ...film, credits: castMap[id] }
}

function getPerson(id) {
    let person = allPeople.filter(person => person.id === id)[0];
    return { ...person, roles: filmMap[id] }
}

module.exports = {
    'getAllFilms': getAllFilms,
    'getAllPeople': getAllPeople,
    'getFilm': getFilm,
    'getPerson': getPerson,
};