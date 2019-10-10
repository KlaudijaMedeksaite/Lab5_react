import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component
{
    render()
    {
        return this.props.myMovies.map((movie)=>{
                return <MovieItem key={movie.imdbID} movie={movie}></MovieItem>
            });
        
    }
}

export default Movies;