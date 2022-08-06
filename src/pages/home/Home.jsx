import React from 'react'
import MovieCarousel from '../../components/movieCarousel/MovieCarousel'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"

const Home = () => {
  return (<>
    <Navbar />
    <div className="movieCarouselContainer">
      <MovieCarousel />
    </div>
  </>
  )
}

export default Home