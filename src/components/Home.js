import React, { Component } from 'react';
import '../App.css';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
import Hero from './Hero';
import TitleList from './TitleList';
import Logo from './Logo';
import MovieList from './MovieList';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {movies: [], searchTerm: '', searchUrl: ''}

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

    

    handleKeyUp = (e) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ movies: data.results}); //gapake titik, error solved  //searching from array to seperate
        })
        e.preventDefault();
    }

    handleChange = (e) => { //handleChange(e){}
        
        this.setState({searchTerm: e.target.value});
    }

    render(){
        // console.log(this.state.movies);
        return(
            <div>
                <header className="Header">
                    <Logo />
                    <Navigation />
                    {/* <form action="" onKeyUp={this.handleKeyUp}> */}
                    <div id="search" className="Search">
                        <input onKeyUp={this.handleKeyUp}  onChange={this.handleChange} type="search" placeholder="search for a title"/> {/*  value={this.searchTerm}*/}
                    </div>
                    {/* </form> */}
                    <UserProfile/>
                </header>
                {/* <MovieList movies={this.state.movies}/> */}
                <Hero />
                <MovieList movies={this.state.movies}/>
                {/* <TitleList title="Search Results" url={this.state.searchUrl} /> */}
                <TitleList title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1'/> 
                <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1'/>
                <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/> 
                <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1'/> 
                <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1'/>  
                {/* Pass props to component which is string. string is the movie db api */}
            </div>
        )
    }
}

export default Home;
