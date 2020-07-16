import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Touchable, TouchableOpacity } from 'react-native';
import Constants from '../../Constantes';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DificultadService from '../services/DificultadService';
import Game from './Game';
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

  }

  aceptarDificultad(value){
    this.props.navigation.navigate('Game', {tiros : this.tirosDificultad(value) });
  }

  tirosDificultad(value) {
    let tiros = 0;
    switch (value) {
      case "facil":
        tiros = 6;
        break;
      case "medio":
        tiros = 5;
        break;
      case "dificil":
        tiros = 4;
        break;    
    }
    return tiros;
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.aceptarDificultad("facil")} >
          <Text style={styles.buttonText}>Facil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.aceptarDificultad("medio")}>
          <Text style={styles.buttonText}>Intermedio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.aceptarDificultad("dificil")}>
          <Text style={styles.buttonText}>Dificil</Text>
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
