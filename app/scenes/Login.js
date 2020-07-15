import 'react-native-gesture-handler';
import React, { Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Touchable, TouchableOpacity } from 'react-native';
import UserService from '../services/UserService';
import Constants from '../../Constantes';

export default class Login extends Component {
  
  constructor(props){
      super(props);

      this.state ={
        pass : '',
        email : '',
        fetching: false
      }
      this.userService = new UserService();
      this.performLogin = this.performLogin.bind(this);
  }

  performLogin = () => {
    
    this.setState({'fetching': true});
    
    this.userService.login( function (response, error){
      
      this.setState({'fetching': false});
      if (!!response && !!response.data.usuario) {
        
         this.props.navigation.navigate('Dificultad')
        // TODO: guardar en local storage el user
        
      } else if (!!error){
        console.log(error)
        //TODO: ver de mostrar error
      }
    }.bind(this) ,{"pass": this.state.pass, "mail": this.state.email})
  }

  render(){
   
  return (
    <View style={styles.container}>
       <ActivityIndicator size="large" style={styles.spinner} animating={this.state.fetching}/>
        <Text style={styles.header}>Inicie sesion para jugar</Text>
        <TextInput style={styles.textinput} placeholder="Ingresa tu email"
        underlineColor={'transparent'}
        onChangeText={(text) => this.state.email = text}
        placeholderTextColor = "white" />
        <TextInput style={styles.textinput} placeholder = "Ingresa tu contraseña"
        underlineColor={'transparent'}
        onChangeText = {(text) => this.state.pass = text}
         placeholderTextColor = "white"/>
        
        <TouchableOpacity style={styles.button} onPress={
          this.performLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Registrate</Text>
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
  header:{
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    paddingLeft: 20,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
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
}

});
