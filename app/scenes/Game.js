import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from './../../Constantes'
import LineaDado from '../components/LineaDados';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';



export default class Game extends Component {
    constructor(props){
        super(props);
        this.lineadado = null;
    }
    render(){

    
    return (
     <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}><Text>Ranking</Text></TouchableOpacity>
        </View>
       <View style={styles.dadosContainer} >
           <LineaDado/>
       </View>
       <View style={styles.botonContainer}>
           <Button title="Girar" onPress={() => {this.props.navigation.navigate('Register')}} />
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
    header:{
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'red',
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    },
    dadosContainer: {
        // height: 60,
        flex: 4,
        height: Constants.MAX_HEIGHT-60,
        width: Constants.MAX_WIDTH,
        backgroundColor: 'green',
        justifyContent: "center",
    },
    botonContainer: {
        flex: 1,
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH,
        backgroundColor: 'blue',
       
    }
  });