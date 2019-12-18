const fetch = require("node-fetch");

const apiKey = process.env.TMDB_API_KEY;

async function getFilmMetadata(tmdbId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&language=en-US`);
    return await response.json();
}

async function getPersonMetadata(tmdbId) {
    const response = await fetch(`https://api.themoviedb.org/3/people/${tmdbId}?api_key=${apiKey}&language=en-US`);
    return await response.json();
}

module.exports = {
    'getFilmMetadata': getFilmMetadata,
    'getPersonMetadata': getPersonMetadata,
};