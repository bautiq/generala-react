import 'react-native-gesture-handler';
import React, { Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Alert, TouchableOpacity } from 'react-native';
import UserService from '../services/UserService';
import deviceStorage from '../core/DeviceStorage';
import { emailValidator, passwordValidator } from '../core/DataInputValidator';
import AuthAlert from '../components/AuthAlert';
import HeaderText from '../components/HeaderText';
import Constants from '../../Constantes';

export default class Login extends Component {
  
  constructor(props){
      super(props);

      this.state ={
        pass : '',
        email : '',
        emailError: '',
        passError: '',
        fetching: false
      }
      this.userService = new UserService();
      this.performLogin = this.performLogin.bind(this);
      this.checkIfLogged = this.checkIfLogged.bind(this);
      this.validateEmail = this.validateEmail.bind(this);
      this.validatePassword = this.validatePassword.bind(this);

  }

  validateEmail = (email) => {
    this.setState({emailError: emailValidator(email)})
    this.setState({email: email})
  }

  validatePassword = (pass) => {
    this.setState({passError: passwordValidator(pass)})
    this.setState({pass: pass})
  }


  checkIfLogged = () => {
    deviceStorage.loadUser(function(error, user){
      if(!!user){
        this.props.navigation.navigate('Dificultad')
      }
    }.bind(this))
  }

  performLogin = () => {
    this.setState({'fetching': true});
    
    this.userService.login( function (response, error){
      
      this.setState({'fetching': false});
      if (!!response && !!response.data.usuario) {
        
         this.props.navigation.navigate('Dificultad');
         deviceStorage.saveUser(response.data.usuario);
        
      } else if (!!error){
        AuthAlert.showAlert(error);
     
      }
    }.bind(this) ,{"pass": this.state.pass, "mail": this.state.email})
  }

  render(){
   this.checkIfLogged()
  return (
    <View style={styles.container}>
       <ActivityIndicator size="large" style={styles.spinner} animating={this.state.fetching}/>
        <HeaderText text= "Inicie Sesion Para jugar"/>
        <TextInput style={[styles.textinput, this.state.emailError ? styles.invalid : null]} placeholder="Ingresa tu email"
        underlineColor={'transparent'}
        onChangeText={(text) => this.validateEmail(text)}
        placeholderTextColor = "white" autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        returnKeyType = "done"/>
        
        <TextInput style={[styles.textinput , this.state.passError ? styles.invalid : null]} placeholder = "Ingresa tu contraseña"
        underlineColor={'transparent'}
        onChangeText = {(text) => this.validatePassword(text)}
         placeholderTextColor = "white" secureTextEntry autoCapitalize="none"
         returnKeyType = "go"
         onSubmitEditing= {() => this.performLogin()}

         />
        
        <TouchableOpacity style={styles.button} disabled={this.state.fetching || !this.state.email || !this.state.pass} onPress={
          () => this.performLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} disabled={this.state.fetching} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.buttonText}>No tengo cuenta</Text>
        </TouchableOpacity>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: "black",
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
    justifyContent: "center",
  },
  textinput:{
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    paddingLeft: 20,
    color: 'white',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1
  },
  button:{
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold'
  },
  spinner:{
    flex: 1,
    alignSelf: 'center',
    position: 'absolute'
},
invalid: {
  borderBottomColor: 'red',
  borderBottomWidth: 1
},

});
