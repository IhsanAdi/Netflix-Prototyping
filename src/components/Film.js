import React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import LogoTitle from '../assets/avengers.png';
import UserProfile from './UserProfile';
// import Hero from './Hero';
import HeroButton from './HeroButton';
import '../App.css';
import TitleList from './TitleList';


class Film extends Component{
    constructor(props){
        super(props);

        this.state = {searchTerm: '', searchUrl: ''}

        this.handleChange = this.handleChange.bind(this);
        this.hanleSearchKey = this.handleSearchKey.bind(this);
    }

    handleChange(e){
        this.setState({
            searchTerm: e.target.value  //could access input
        });
    }

 
    handleSearchKey(e){  //guna engga nih
        let apiKey = '87dfa1c669eea853da609d4968d294be';
        if(e.key === 'Enter' && this.state.searchTerm !== ''){
            let searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + apiKey;
            this.setState({searchUrl: searchUrl});
        }
    }



render(){
    return(
        <div>
            <header className="Header">
                <Logo/>
                <Navigation />
                <div id="search" className="Search">
                    <input onSearchKey={this.handleSearchKey} onChange={this.handleChange} type="search" placeholder="search for a title" />
                </div> 
                <UserProfile />
            </header>

            {/* Space for hero */}
            <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images8.alphacoders.com/100/thumb-1920-1003220.png)'}}>
                <div className="content">
                <img className="logo" src={LogoTitle} alt="Avengers Endgame Background"/>
                <h2></h2>
                <p>Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.</p>
            
            <div className="button-wrapper">
                <HeroButton primary={true} text="Watch Now"/>
                <HeroButton primary={true} text="+ My List"/>  {/*primary true or false dirubah sesuai on click */}
            </div>
            </div>
            <div className="overlay"></div>
            <div className="container"></div>
            </div>

            {/* <TitleList title="New Release" url={this.state.searchUrl}/> */}
            <TitleList title="Continue Watching for Adi" url='discover/movie?sort_by=popularity.desc&page=3'/>
            <TitleList title="Action" url='genre/28/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Adventure" url='genre/12/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Animation" url='genre/16/movies?sort_by=popularity.desc&page=2'/>
            <TitleList title="Comedy" url='genre/35/movies?sort_by=popularity.desc&page=10'/>
            <TitleList title="Crime" url='genre/80/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Documentary" url='genre/99/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Drama" url='genre/18/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Family" url='genre/10751/movies?sort_by=popularity.desc&page=70'/>
            <TitleList title="Fantasy" url='genre/14/movies?sort_by=popularity.desc&page=35'/>
            <TitleList title="History" url='genre/36/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Music" url='genre/10402/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Mystery" url='genre/9648/movies?sort_by=popularity.desc&page=41'/>
            <TitleList title="Romance" url='genre/10749/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Science Fiction" url='genre/878/movies?sort_by=popularity.desc&page=99'/>
            <TitleList title="TV Movies" url='genre/10770/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Thriller" url='genre/53/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="War" url='genre/10752/movies?sort_by=popularity.desc&page=1'/>
            <TitleList title="Western" url='genre/37/movies?sort_by=popularity.desc&page=1'/>
            </div>


    )
    }
}
console.log(TitleList);

export default Film;