import React, { Component } from 'react';

class UserProfile extends Component {
    render(){
        return(
            <div className="UserProfile">
                <div className="User">
                    <div className="name">Ihsan Adi</div>
                    <div className="image"><img src="https://i.imgur.com/kDLvuKf.png" alt="profile" width="40" style={{margin: "0 10px"}}/></div>
                </div>
            </div>
        )
    }
}

export default UserProfile;
