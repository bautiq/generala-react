import 'react-native-gesture-handler';
import React, { Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Touchable, TouchableOpacity } from 'react-native';
import UserService from './app/services/UserService';


export default class Login extends Component {
  
  constructor(props){
      super(props);
      this.handleChange= this.handleChange.bind(this);
  }

  handleChange(event = {}) {
    const name = event.target && event.target.name;
    const value = event.target && event.target.value;
  
    this.setState([name] : value);
  }

  render(){
 
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Logeate</Text>
        <TextInput style={styles.textinput} placeholder="Ingresa tu email"
        underlineColor={'transparent'} name="email"
        onChangeText={this.handleChange}
        value={this.state.email} />
        <TextInput style={styles.textinput} placeholder="Ingresa tu contraseña"
        underlineColor={'transparent'} name="pass"
        onChangeText={this.handleChange}
        value={this.state.pass}/>
        
        <TouchableOpacity style={styles.button}>
          <Button title='Login'  onPress={() =>
          new UserService().login( function (response, error){
            if (!!response && !!response.data.usuario) {
              // TODO: mandar al inicio de juego y pasarle el usuario
              //this.props.navigation.navigate('Register')
            } else if (!!error){
              //TODO: ver de mostrar error.message
            } else {
              this.props.navigation.navigate('Register')
            }
          },{"pass": this.state.pass, "email": this.state.email})}/>
        </TouchableOpacity>
        
        <Button title='Registrate' onPress={() => this.props.navigation.navigate('Register')} />
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',

  },
  header:{
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textinput:{
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
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
  }

});
