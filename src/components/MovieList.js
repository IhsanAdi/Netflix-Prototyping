import React from 'react';
import Movie from './Movie';
import '../App.css';

const MovieList = (props) => {
    const readMovieList = props.movies ? props.movies.map((movie, i) => 
        <Movie key={movie.id} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} title={movie.title} overview={movie.overview} image={movie.poster_path}/> /* date={movie.release_date} */
    ) :
    null
    
    
    
    console.log(props.movies);
    return(
    <div className="container">
        {/* <div className=""> */}
            {/* <div className=""> */}
            
            
            {props.movies ? 
            readMovieList: 
                <div></div>
            }
        
        

            {/* </div> */}
        {/* </div> */}
    </div>
    )
}


export default MovieList;