import React, { Component } from 'react';
import axios from 'axios';
import './FullAd.css';

class FullAd extends Component {

  state = {
    loadedAd: null
  }
  componentDidUpdate (){
    if(this.props.id){
      if(!this.state.loadedAd ) {
        axios.get('http://localhost:8080/solidarity/rest')
        .then( response=>{this.setState({loadedAd: response.data});
        console.log(response.data);
        });
      }
{/*|| (this.state.loadedAd && this.state.loadedAd.userid !== this.props.id) */}
    }
  }

  deleteAdHandler = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
    .then(response =>{
      console.log(response);
    });
  }
    render () {
        let ad = <p style={{textAlign: 'center'}}>Please select a Post and it will be displayed here</p>;
          if(this.props.id){
            ad=<p style={{textAlign: 'center'}}>Loading post...</p>;
          }

          if(this.state.loadedAd){
        ad = (
            <div className="FullAd">
                <h1>dokimi</h1>
                <h1>{this.state.loadedAd.userid}</h1>
                <p>{this.state.loadedAd.username}</p>
                <div className="Edit">
                    <button onClick={this.deleteAdHandler} className="Delete">Delete</button>
                </div>
            </div>

        );
      }
      console.log(ad);
        return ad;
    }
}

export default FullAd;
