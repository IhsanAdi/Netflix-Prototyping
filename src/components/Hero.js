import React, { Component } from 'react';
import '../App.css';
import HeroButton from './HeroButton';

class Hero extends Component {
    render(){
        return(
            <div  id="hero" className="Hero" style={{backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)'}}>
                <div className="content">
                    {/* GAMBAR YG BENER DI DIV APA IMG DAH */}
                    <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background"/>
                    <h2>Season 2 now available</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
                    <div className="button-wrapper">
                        <HeroButton primary={true} text="Watch Now"/>
                        <HeroButton primary={false} text="+ My List"/>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        )
    }
}

export default Hero;
