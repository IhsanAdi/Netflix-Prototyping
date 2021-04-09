import React, { Component } from 'react';
import '../App.css';


// Komponen di dalem gambar film saat di click
class ListToggle extends Component {
    // state = {
    //     toggled: false
    // }

    constructor(props){
        super(props);
        this.state = {toggled: false}
        // this.handleClick = this.handleClick.bind(this);
        
    }

    getInitialState(){
        return({toggled: false });
    }

    handleClick = (event) => {
        if (this.state.toggled === true){
            this.setState({ toggled: false });
        }else{
            this.setState({ toggled: true });
        }
        // return
        // console.log(this.state.toggled);
    }

    render(){
        return(
            <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
                <div>
                    {/* uncheck */}
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                </div>
            </div>
        )
    }
}

export default ListToggle;
