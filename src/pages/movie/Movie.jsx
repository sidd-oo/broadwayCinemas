import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import "./Movie.css";
import movieData from "../../data/movies.json"
import { MovieRounded } from '@mui/icons-material';

const Movie = () => {
    const location = useLocation();
    const movieIndex = parseInt(location.pathname.split("/")[2]);
    const movie = movieData.movies[movieIndex];

    return (
        <>
            <Navbar />
            <div className="movie">
                <div className="leftContainer">
                    <img src={movie.img.thumbnail} className="thumbnail-image" alt={movie.title} />
                </div>
                <div className="rightContainer">
                    <div className="rightContainer-top">
                        <Link to="/" className="link">
                            <div className="backLink">
                                Back to All Movies
                            </div>
                        </Link>
                    </div>
                    <div className="rightContainer-bottom">
                        <h1 className='title'>{movie.title.toUpperCase()}</h1>
                        <div className="right-mid">
                            <h2>&#8226;{movie.durationMins}</h2>

                            {movie.genres.map((genre, i) => {
                                return <>
                                {i === 0 ?
                                    (<h3 className="genre" key={i}>&#8226;{genre}</h3>) : (<h3 className="genre" key={i}>{genre}</h3>)
                                } 
                                </>
                            })}
                            <h2>&#8226;{movie.ageCertificate}</h2>
                        </div>
                        <h3 className="about-the-movie">About the movie</h3>
                        <h2 className="desc">{movie.description}</h2>
                        <Link to="/bookTicket">
                            <button className="bookBtn">Book Now!</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Movie