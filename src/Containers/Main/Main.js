import React, { Component } from 'react';

import Ad from '../../Components/Ad/Ad';
import NewAd from '../../Components/NewAd/NewAd';
import FullAd from '../../Components/FullAd/FullAd';
import './Main.css';
import axios from 'axios';
import LoginForm from '../../Containers/LoginForm/LoginForm'
import Header from '../../Components/Header/HeaderMain'

class Main extends Component {
  state = {
    ads:[],
    selectedAdId: null,
    error: false
  }

  componentDidMount (){
    axios.get('http://localhost:8080/solidarity/user/asdf')
    .then(response=>{
      console.log(response);
      const ads = response.data;
      this.setState({ads:ads});
    })
    .catch(error => {
      console.log(error);
      this.setState({error: true});
    });
  }

  adSelectedHandler = (id)=>{
    this.setState({selectedAdId:id});
  }

    render () {
      let ads = <p style={{textAlign:'center'}}>Something went wrong</p>;
        if(!this.state.error){
          ads = this.state.ads.map(
            ad=>{
              return <Ad key={ad.userid} id={ad.userid} title={ad.address} author={ad.telephone} clicked={() => this.adSelectedHandler(ad.userid)} />;
            }
          );
        }

        return (
            <div>
              <div>
                <Header />
              </div>

                <section className="Ads">
                    {ads}
                </section>
                <section>
                    <FullAd id={this.state.selectedAdId} />
                </section>
                <section>
                    <NewAd />
                </section>
            </div>
        );
    }
}

export default Main;
