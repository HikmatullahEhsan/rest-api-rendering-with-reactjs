import React from 'react';
import logo from './logo.png';
class Home extends React.Component {
    render(){
        return(
            <div>
                <h2 align="center">Welcome to Smarkets</h2>
                <center>
                <img src={logo} />
                </center>
            </div>
        );
    }
}

export default Home;