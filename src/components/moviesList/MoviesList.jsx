import React from 'react'
import "./MoviesList.css"
import moviesData from "../../data/movies.json"
import { Link } from 'react-router-dom'

const MoviesList = () => {
    return (<>
        <h3 className="currentlyPlayingMovies">Currently playing</h3>
        <div className="moviesList">
            {moviesData.movies.map((movie, index) => {
                return (
                    <Link to={`movie/${index}`}>
                        <img src={movie.img.thumbnail} alt={movie.title} key={index} className="smallThumbnail"></img>
                    </Link>
                )
            })
            }
        </div>
    </>
    )
}

export default MoviesList