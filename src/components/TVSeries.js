import React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import UserProfile from './UserProfile';
// import Hero from './Hero';
import HeroButton from './HeroButton';
import '../App.css';

import TitleList from './TitleList';

class TVSeries extends Component{
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

 
    handleSearchKey(e){
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
            <div id="hero" className="Hero" style={{backgroundImage: 'url(https://images3.alphacoders.com/882/thumb-1920-882548.jpg)'}}>
                <div className="content">
                <img className="logo" src="http://www.returndates.com/backgrounds/strangerthings.logo.png" alt="Stranger Things Background"/>
                <h2>Season 4 is now available</h2>
                <p>A love letter to the supernatural classics of the 80's, Stranger Things is the story of a young boy who vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl. </p>
            
            <div className="button-wrapper">
                <HeroButton primary={true} text="Watch Now"/>
                <HeroButton primary={true} text="+ My List"/>  {/*primary true or false dirubah sesuai on click */}
            </div>
            </div>
            <div className="overlay"></div>
            <div className="container"></div>
            </div>

            {/* <TitleList title="New Release" url={this.state.searchUrl}/> */}
            <TitleList title="Continue Watching for Adi" url='discover/tv?sort_by=popularity.desc&page=1'/>
            
            {/* <TitleList title="Trending Now" url={this.state.searchUrl}/> */}
            {/* discover/tv?sort_by=popularity.desc&page=1 */}
            {/* <TitleList title="Action & Adventure" url='genre/tv/16?sort_by=popularity.desc&page=1'/> */}
            {/* <TitleList title="Animation" url='genre/16/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Comedy" url='genre/35/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Crime" url='genre/80/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Documentary" url='genre/99/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Drama" url='genre/18/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Family" url='genre/10751/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Kids" url='genre/10762/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Mystery" url='genre/9648/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="News" url='genre/10763/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Reality" url='genre/10764/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Sci-Fi & Fantasy" url='genre/10765/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Soap" url='genre/10766/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Talk" url='genre/10767/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="War & Politics" url='genre/10768/tv?sort_by=popularity.desc&page=1'/>
            <TitleList title="Western" url='genre/37/tv?sort_by=popularity.desc&page=1'/> */}
            </div>


    )
    }
}

export default TVSeries;




