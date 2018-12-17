import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header ,Segment } from 'semantic-ui-react';
import './HeaderMain.css';
import HeaderBackground from './banner-1571858_1920.jpg';

class HeaderMain extends Component {

  state = {
    loggedIn: null
  }



    render () {
      const divStyle = {
        margin: '8px',
        border: '2px solid blue',
        textAlign: 'right',
         backgroundColor: '#D3D3D3',
         float: 'right'
       };
       const backgroundStyle ={
         width: "100%",
         height: "150px",
         backgroundImage: "url(" + HeaderBackground + ")"
       };
        let header1 =
        <div className="HeaderMain">
          <Header as='h3' block>
          <Link to={"/login"} style={divStyle}>Log In</Link>
          <Link to={"/NewAd"} style={divStyle}>Register</Link>
          </Header>
        </div>;

        let header =
        <Segment style={backgroundStyle}>
  <Header as='h3' textAlign='right'>
    <Link to={"/login"} style={divStyle}>Log In</Link>
  </Header>
  <Header as='h3' textAlign='left'>
    <Link to={"/NewAd"} style={divStyle}>Register</Link>
  </Header>
  <Header as='h1' style={{textAlign: 'center'}}>
    Solidarity
  </Header>
  <Header as='h3' style={{textAlign: 'center'}}>
    Platform for donating to the world
  </Header>
</Segment>;

          if(this.state.loggedIn){
            header=<p style={{textAlign: 'center'}}>Loading post...</p>;
          }

          if(this.state.loadedAd){

      }

        return header;
    }
}

export default HeaderMain;
