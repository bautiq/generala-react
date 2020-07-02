import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dado from './../components/Dado'
import Constants from './../../Constantes'
import LineaDado from '../components/LineaDados';

export default class Game extends Component {
    constructor(props){
        super(props);
        this.lineadado = null;
    }
    render(){

    
    return (
     <View style={styles.container}>
         {/* <View style={styles.topContainer} /> */}
       <View style={styles.dadosContainer} >
           <LineaDado/>
       </View>
       <View style={styles.botonContainer}>
           <Button title="Girar" onPress={() => {}} />
       </View>
      </View>
   );
 }
}

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "black",

    },
    // topContainer:{
    //     height: "15%",
    //     // height: 120,
    //     width: Constants.MAX_WIDTH,
    //     backgroundColor: 'red'
    // },
    dadosContainer: {
        // height: 60,
        height: Constants.MAX_HEIGHT-60,
        width: Constants.MAX_WIDTH,
        backgroundColor: 'green',
        justifyContent: "center",
        
    },
    botonContainer: {
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH,
        backgroundColor: 'blue',
       
    }
  });