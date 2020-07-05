import React, { useState, Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, requireNativeComponent } from 'react-native';
import Constants from 'expo-constants';
import { render } from 'react-dom';

export default class LeaderboardCell extends Component {

  render() {
    return(<SafeAreaView> 
      <View style={styles.container}> 
      <Text style={styles.position}>{"15"}</Text>
      <Text style={styles.name}>{"Pepito"}</Text>
      <Text style={styles.points}>{"1500"}</Text>
      </View>
      <View style={styles.divider}/>
      </SafeAreaView>
      );
  }

  constructor(props) {
    super(props);
  
  }

}





const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row'
      },
      name: {
          fontSize: 10,
          alignSelf: 'center'
      },

      position: {
        fontSize: 15
      },

      points: {
        alignSelf: 'right'
      },

      divider:{
        backgroundColor: 'black',
        height: 1
    }
});