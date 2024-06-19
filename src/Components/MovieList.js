import React from 'react'
const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
        {props.movies.map((movie, index) => (
            <div className='image-container d-flex justify-content-center my-3 col-xs-12 col-sm-6 col-md-4 col-lg-3 mx-md-4 mx-lg-0 overflow-hidden' key={index}>
                <img src={movie.Poster} alt='movie'></img>
                <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-content-center '>
                  <FavouriteComponent />
                </div>
            </div>
        ))} 
    </>
  )
}

export default MovieList
