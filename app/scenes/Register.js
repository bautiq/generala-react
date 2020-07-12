import React, { Component }from 'react';
import { StyleSheet, Text, View, Button, TextInput, Touchable, TouchableOpacity } from 'react-native';

export default class Register extends Component {
  constructor(props){
      super(props);
      
  }
  render(){

 
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Registrate</Text>
        <TextInput style={styles.textinput} placeholder="Ingresa tu nombre"
        underlineColor={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Ingresa tu edad"
        underlineColor={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Ingresa tu email"
        underlineColor={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Ingresa tu contraseña"
        underlineColor={'transparent'} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
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
