import React, { Component } from 'react';
import '../App.css';
// import Link 

const Movie = (props) => {
    // let formatDate = props.date.split("-").reverse().join("/");
    return(
        
        <div className="card">
            {/* <div className="">
                <div className=""> */}
                    {/* Add logic, some movie db api might not have image display */}
                    {
                        props.image == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%",
                        height: 360}}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap" style={{ width: "100%",
                        height: 360}} />
                    }
                    <h1 style={{color: 'red'}}>{props.title}</h1>
                {/* </div> */}
                <div className="getMovieClicked">
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
             {/* </div> */}
        </div>
    )
}


export default Movie;