import React, { useState, Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import RankingCell from '../components/RankingCell';
import RankingService from '../services/RankingService';

export default class Ranking extends Component {

  state = {
    ranking: [],
    fetching: false
 }
constructor(){
  super()
  this.rankingReceived = this.rankingReceived.bind(this)
}

 componentDidMount= () => {
   this.setState({'fetching': true});
    new RankingService().getRanking( (response, error) =>
    this.rankingReceived(response)
  )
 }

  rankingReceived = (response) => {
    this.setState({'fetching': false});
    if (!!response && response.data){
      this.setState({ranking: response.data}) 
    }
  }


  render(){
    let ranking = this.state.ranking.map((item) => {
      return <RankingCell rankItem={item}/>
    })
    return(<SafeAreaView style={styles.container}> 
      <ActivityIndicator size="large" style={styles.spinner} animating={this.state.fetching}/>
      <Text style={styles.title}>Ranking</Text>
      <ScrollView style={styles.scrollView}>
 
    {
        ranking
    }
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Dificultad')}> 
            <Text style={styles.buttonText}>Jugar denuevo</Text>
        </TouchableOpacity>
      </SafeAreaView>);
  }
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
    },
    spinner:{
      alignSelf: 'center',
      position: 'absolute'
  }
  
});
