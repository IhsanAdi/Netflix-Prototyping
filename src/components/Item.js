import React, { Component } from 'react';
import ListToggle from './ListToggle';

// Komponen di dalem gambar film saat di click
class Item extends Component {
    render(){
        return(
            <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>
                <div className="overlay">
                    <div className="title">{this.props.title}</div>
                    <div className="rating">{this.props.score}</div>
                    <div className="plot">{this.props.overview}</div>
                    <ListToggle/>
                </div>
            </div>
        )
    }
}

export default Item;
