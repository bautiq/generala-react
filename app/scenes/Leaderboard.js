import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import LeaderboardCell from '../components/LeaderboardCell';


export default function Leaderboard() {
    return(<SafeAreaView style={styles.container}> 
    <Text style={styles.title}/>
    <ScrollView style={styles.scrollView}>

    <LeaderboardCell/>
    <LeaderboardCell/>
    <LeaderboardCell/>
    </ScrollView>

    <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Jugar denuevo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir a inicio</Text>
      </TouchableOpacity>
    </SafeAreaView>);
}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
        marginTop: Constants.statusBarHeight
      },
      scrollView: {
        marginHorizontal: 16,
      },
      title: {
          fontSize: 20
      },
      button:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30
      }
});