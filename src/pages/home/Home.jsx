import React from 'react'
import MovieCarousel from '../../components/movieCarousel/MovieCarousel'
import MoviesList from '../../components/moviesList/MoviesList'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"

const Home = () => {
  return (<>
    <Navbar />
    <div className="movieCarouselContainer">
      <MovieCarousel />
    </div>
    <MoviesList/>
  </>
  )
}

export default Home