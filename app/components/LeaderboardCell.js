import React, { useState, component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';


export default function LeaderboardCell() {
    return(<SafeAreaView style={styles.container}> 
    <Text style={styles.name}>{"Pepito"}</Text>
    <Text style={styles.position}>{"15"}</Text>
    <View style={styles.divider}/>
    </SafeAreaView>);
}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        marginTop: Constants.statusBarHeight
      },
      name: {
          fontSize: 10
          
      },

      position: {
        fontSize: 15
      },

      divider:{
        backgroundColor: 'black',
        height: 1
    }
});