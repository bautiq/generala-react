import React, { Component }from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Constants from '../../Constantes';
import UserService from '../services/UserService';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state ={
      pass : '',
      email : '',
      nombre: '',
      fetching: false
    }
    this.performRegister = this.performRegister.bind(this);
    this.userService = new UserService();
}

performRegister = () => {
    this.setState({'fetching': true});

    this.userService.register(function (response, error){

    this.setState({'fetching': false});

    if (!!response && !!response.data.usuario) {
      
       this.props.navigation.navigate('Dificultad')
      // TODO: guardar en local storage el user
      
    } else if (!!error){
      console.log(error)
      //TODO: ver de mostrar error
    }
  }.bind(this) ,{"pass": this.state.pass, "mail": this.state.email, "nombre": this.state.nombre})

}

  render(){ 
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.spinner} animating={this.state.fetching}/>
        <Text style={styles.header}>Registrate</Text>
        <TextInput style={styles.textinput} placeholder="Ingresa tu nombre"
        underlineColor={'transparent'} placeholderTextColor= "white" onChangeText={(text) => this.state.nombre = text} />
        <TextInput style={styles.textinput} placeholder="Ingresa tu email"
        underlineColor={'transparent'} placeholderTextColor= "white" onChangeText={(text) => this.state.email = text} />
        <TextInput style={styles.textinput} placeholder="Ingresa tu contraseña"
        underlineColor={'transparent'} placeholderTextColor= "white" onChangeText={(text) => this.state.pass = text} />
        <TouchableOpacity style={styles.button} onPress = { this.performRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
    justifyContent: "center",
  },
  header:{
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    paddingLeft: 20,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput:{
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    paddingLeft: 20,
    color: '#fff',
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
