import 'react-native-gesture-handler';
import React, { Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Constants from '../../Constantes';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Login extends Component {
  
  constructor(props){
      super(props);
  }
  render(){
 
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Log-In</Text>
        <TextInput style={styles.textinput} placeholder="Ingresa tu email"
        underlineColor={'transparent'} placeholderTextColor= "white" />
        <TextInput style={styles.textinput} placeholder="Ingresa tu contraseña"
        underlineColor={'transparent'} placeholderTextColor= "white" />
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logearse</Text>
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
  }

});
