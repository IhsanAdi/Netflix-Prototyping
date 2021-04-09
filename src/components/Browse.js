import React, { Component } from 'react';
import Navigation from './Navigation';
import '../App.css';
import Logo from './Logo';
import MovieList from './MovieList';
import UserProfile from './UserProfile';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';


class Browse extends Component{
    constructor(props){
        super(props);

        this.state = {movies: [], searchTerm: '', searchUrl: '', totalResults: 0, currentPage: 1, currentMovie: null}

        // this.handleChange = this.handleChange.bind(this);
        // this.handleKeyUp = this.handleKeyUp.bind(this);

        this.apiKey = process.env.REACT_APP_API
    }

    //--the original one--
    // handleKeyUp(e){
    //     const apiKey = '87dfa1c669eea853da609d4968d294be';
    //     if(e.key === 'Enter' && this.state.searchTerm !== ''){
    //         const searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + apiKey; //nih 
    //         this.setState({searchUrl:searchUrl});
    //     }
    // }

    logData = () => {
        console.log(process.env.REACT_APP_API);
    }
    

    handleKeyUp = (e) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ movies: data.results, totalResults: data.total_results}); //gapake titik, error solved  //searching from array to seperate
        })
        e.preventDefault();
    }

    nextPage = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`)
        .then(data => data.json())
        .then(data => {
            this.setState({ movies: data.results, totalResults: data.total_results, currentPage: pageNumber})
        })
    }

    handleChange = (e) => { //handleChange(e){}
        
        this.setState({searchTerm: e.target.value});
    }

    viewMovieInfo = (id) => {
        let filteredMovie;
        this.state.movies.forEach((movie, i) => {
            if(movie.id == id){
                filteredMovie = movie
            }
        })
        this.setState({ currentMovie: filteredMovie})
    }

    closeMovieInfo = () => {
        this.setState({ currentMovie: null})
    }

    render(){
        let numberPages = Math.floor(this.state.totalResults / 20);
        // console.log(this.state.movies);
        return(
            <div>
                
                <header className="Header">
                    <Logo />
                    <Navigation />
                    
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp}  onChange={this.handleChange} type="search" placeholder="search for a title"/> 
                        {/* <MovieList movies={this.state.movies}/> */}
                    </div>
                    <UserProfile/>
                </header>
                {this.state.currentMovie == null ? 
                        <MovieList movies={this.state.movies}/>
                    
                
                : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} />}
                {/* <MovieList movies={this.state.movies}/> */}
                {/*  value={this.searchTerm}*/}
                {/* <Hero /> */}
                {/* <TitleList title="Search Results" url={this.state.searchUrl} /> */}
                {/* <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1'/> 
                <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1'/>
                <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/> 
                <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1'/> 
                <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1'/>   */}
                {/* Pass props to component which is string. string is the movie db api */}
                {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.currentPage}/> : ''}
            </div>
        )
    }
}

export default Browse;