import React , {Component} from 'react';
import MapContainer from './MapContainer';
import LoginContainer from './LoginContainer'
import styles from './App.css';
export default class App extends Component {
constructor(props){
  super(props)

  this.logon = this.logon.bind(this)

  this.state = {
    token : null
  }
}

logon(data){
  this.setState({token:data.accessToken})
}
  render() {
    if(this.state.token)
    return <MapContainer token={this.state.token} />
    else 
    return <LoginContainer onLogon={this.logon} />
  }
}