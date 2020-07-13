import React, { useState, Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import RankingCell from '../components/RankingCell';
import RankingService from '../services/RankingService';

export default class Ranking extends Component {

  state = {
    ranking: []
 }

 componentDidMount= () => {
  
    new RankingService().getRanking( function (response, error){ 
      this.setState({ranking: response.data}) 
    })
  
 }

  render(){
    
    return(<SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Ranking</Text>
      <ScrollView style={styles.scrollView}>
 
    {
        this.state.ranking.map((item) => (
          <RankingCell rankItem={item}/>
        ))
    }
     
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

const RankingReceived = () =>{

}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        marginTop: Constants.statusBarHeight
      },
      scrollView: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        marginBottom: 10
      },
      title: {
        margin: 10,
          fontSize: 20,
          alignSelf: 'center'
      },
      button:{
        marginHorizontal: 16,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#59cbbd',
        marginBottom: 30
      },

      divider:{
        backgroundColor: 'black',
        height: 1
    }
});

/* TODO ver como hacer para reiniciar con la misma dificultad */

// TODO: por cada obj de leaderboard, inicializar (el obj tiene que estar igualmente definido que en be)