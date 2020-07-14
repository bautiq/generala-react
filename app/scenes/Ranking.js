import React, { useState, Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import RankingCell from '../components/RankingCell';

export default class Ranking extends Component {

  render() {
    return (<SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Ranking</Text>


        <RankingCell props={null} />

      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Jugar denuevo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Setup')}>
        <Text style={styles.buttonText}>Ir a inicio</Text>
      </TouchableOpacity>
    </SafeAreaView>);
  }
}



const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "black",
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
    justifyContent: "center",
  },
  scrollView: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    alignItems: 'center'
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#59cbbd',
    marginBottom: 30
  },

  divider: {
    backgroundColor: 'black',
    height: 1
  }
});

/* TODO ver como hacer para reiniciar con la misma dificultad */

// TODO: por cada obj de leaderboard, inicializar (el obj tiene que estar igualmente definido que en be)