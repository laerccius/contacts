import React ,{Component} from 'react'
import axios from 'axios'
import styles from './App.css';

export class LoginContainer extends Component {

  constructor(props){
    super(props)
    this.login = this.login.bind(this);  
    this.handleChangeLogin = this.handleChangeLogin.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.state = {
      login:'admin_apiprodutos',
      password:'AdminAPIProdutos01!'
    };
  }

  validateLogin() {
    this.setState({
      validatedLogin: this.state.login,
      validatePassword: this.state.password
    })  
    return this.state.login && this.state.password;
  }

  login() {  
    console.log('teste'); 
    if(!this.validateLogin()){
      console.log(this.state); 
      return;     
    }
    
    
      axios.create({
          baseURL:'http://localhost:4000/api', 
        })
        .post('/login',this.state).then(
          (response) => {
              if(response.data && this.props.onLogon)
              {
                this.props.onLogon(response.data);
              }
          }
        );
  }

  handleChangeLogin(event){
    this.setState({login: event.target.value});
  }

  handleChangePassword(event){
    this.setState({password: event.target.value});
  }

  render() {    
    
    return (
    <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <label>Login</label>
            <input type="text" value={this.state.login} onChange={this.handleChangeLogin} />
            {this.state.validatedLogin?'':<span className="Required-Field">*</span>}
          </div>
          <div>
            <label>Senha</label>
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
            {this.state.validatePassword?'':<span className="Required-Field">*</span>}
          </div>
          <div>
            <input type="button" value="Login" onClick={this.login}/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default LoginContainer