import React, {ReactElement, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {VideoPlayer} from "./VideoPlayer/VideoPlayer";
import {VideoList} from "../VideoList/VideoList";
import {Video} from "../VideoCard/VideoCard";

const relatedVideos: Video[] = [
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
];

const recommendedForYou: Video[] = [
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
];

const watchAgain: Video[] = [
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
    { id: 1, title: "Star Wars: The Rise of Skywalker", image: "https://m.media-amazon.com/images/M/MV5BZmQ2YzJlZTUtZWYzMi00ZjJjLWJkMjEtYjU4NjRiNDU4ZTVmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg", src: "https://youtu.be/ssGXzh4MAYM" },
];

type FilmDetails = {
    title: string,
    video: string,
}

async function fetchFilmDetails(id?: string): Promise<FilmDetails|null> {
    if (!id) {
        return null;
    }
    const response = await fetch(`http://localhost:8080/films/${id}`);
    return await response.json();
}

export function PlayerPage(): ReactElement {
    const [filmDetails, setFilmDetails] = useState<FilmDetails|null>(null);
    const { filmId } = useParams();

    useEffect(() => {
        console.log('the id', filmId);
        fetchFilmDetails(filmId).then(setFilmDetails);
    }, [filmId]);

    if (!filmDetails) {
        return <div>Loading</div>;
    }

    return (
        <div>
            <VideoPlayer title={filmDetails.title} src={filmDetails.video}/>
            <VideoList sectionTitle={"Related Films"} videos={relatedVideos}/>
            <VideoList sectionTitle={"Recommended For You"} videos={recommendedForYou}/>
            <VideoList sectionTitle={"Watch Again"} videos={watchAgain}/>
        </div>
    );
}