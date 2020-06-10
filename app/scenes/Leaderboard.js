import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';


export default function Leaderboard() {
    return(<SafeAreaView style={styles.container}> 
    <Text style={styles.title}/>
    <ScrollView style={styles.scrollView}>

    <View style={styles.divider}/>
    </ScrollView>
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

      divider:{
        backgroundColor: 'black',
        height: 1
        }
});