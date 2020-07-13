import React, { useState, Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, requireNativeComponent } from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';

export default class RankingCell extends Component {

  render() {
    return(<View> 
      <View style={styles.container}> 
      <Text style={styles.position}>{this.props.rankItem.posicion}</Text>
      <Text style={styles.name}>{this.props.rankItem.usuario}</Text>
      <Text style={styles.score}>{this.props.rankItem.score}</Text>
      </View>
      <View style={styles.divider}/>
      </View>);
  }

  constructor(props) {
    super(props);
  
  }

}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        alignItems: 'stretch',
    
      },
      name: {
          fontSize: 20,
          alignSelf: 'center',
          margin: 10
      },

      position: {
        fontSize: 20,
        alignSelf: 'flex-start',
        margin: 10
      },

      score: {
        fontSize: 20,
        alignSelf: 'flex-end',
        margin: 10
      },

      divider:{
        backgroundColor: 'black',
        height: 1
    }
});