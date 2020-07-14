import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Constants from '../../Constantes';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DificultadService from '../services/DificultadService';
/*
Example use in view:
import RankingService from './app/services/RankingService';

new RankingService().getRanking( function (response){ 
    console.log(response);
  });
*/
export default class Dificultad extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dificultad: "",
    };

  }

  aceptarDificultad(){
    new DificultadService().postDificultad(function (response, error) {
      console.log(response);
      if(response){
      // this.props.navigation.navigate('Game');
      }
      // () => , 
    }, this.state.dificultad)
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.state.dificultad = "facil"} >
          <Text style={styles.buttonText}>Facil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.state.dificultad = "medio"}>
          <Text style={styles.buttonText}>Intermedio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ () => this.state.dificultad = "dificil"}>
          <Text style={styles.buttonText}>Dificil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.aceptarDificultad() , () => this.props.navigation.navigate('Game')}>
          <Text style={styles.buttonText}>Aceptar</Text>
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
  button: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 80,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
