import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React ,{Component} from 'react'
import styles from './styles.module.css';
import stylesGoogle from './google-maps-react.2.0.1.css';
import axios from 'axios'

export class MapContainer extends Component {

constructor(props){
  super(props)

  this.fillContactsData = this.fillContactsData.bind(this);

  axios.create({
    baseURL:'http://localhost:4000/api', 
    headers: {'Authorization': `Bearer ${this.props.token}`}
  }
  ).get('/contact').then(
    this.fillContactsData
  );
  this.state = {
    contacts : [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
}

 onMarkerClick = (props, marker) =>{
   console.log(props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  onContactClick =  (props, marker) =>{
    console.log(props);
    console.log(marker);
  }

  fillContactsData(response){
    if(!response.data)
      return;

    this.setState({contacts:response.data});
  }

  render() {
    return (
      <div className="_2w1mY" teste="t">
        <div className="_3vnKD">
          <div className="_2w8At">
            <ul>
                {this.state.contacts && this.state.contacts.map((item) =>  
                <a key={item.id} href='#' onClick={this.onContactClick}>
                  <li>
                    {item.name}
                  </li>
                </a>)}
              </ul>
          </div>
          <div className="_288CW">
            <Map google={this.props.google} zoom={14}  
            initialCenter={this.state.selectedPlace && this.state.selectedPlace.position ? {
                lat:this.state.selectedPlace.position.lat,
                lng: this.state.selectedPlace.position.lng}
                :{lat:-23.547659,
                lng: -46.614935}} 
                onClick={this.onMapClicked}>
                  {this.state.contacts && this.state.contacts.map((item) =>
                  <Marker name={item.name} id={item.id} key={item.id} position={{lat: item.latitude, lng: item.longitude}} onClick={this.onMarkerClick}/>)}
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                    <div>
                      <h1>{this.state.selectedPlace.id} - {this.state.selectedPlace.name}</h1>
                      <h1>Latitude: {this.state.selectedPlace.position && this.state.selectedPlace.position.lat}</h1>
                      <h1>Longitude: {this.state.selectedPlace.position && this.state.selectedPlace.position.lng}</h1>
                    </div>
                  </InfoWindow>
              </Map>
          </div>
        </div>
      </div>
   );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD9oJodFWgltH8F7Df5WYdrpIpgFyc0Egk'),
  libraries: ['places', 'visualization'],
})(MapContainer)