import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from './../../Constantes'
import LineaDado from '../components/LineaDados';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Dado from '../components/Dado'



export default class Game extends Component {
    constructor(props){
        super(props);
        this.lineadado = null;
        this.dados = [
            <Dado ref={d0 => this.d0 = d0} dados={parseInt(Math.random()*6 )+1} key={0} index={0}/>,
            <Dado ref={d1 => this.d1 = d1} dados={parseInt(Math.random()*6 )+1} key={1} index={1}/>,
            <Dado ref={d2 => this.d2 = d2} dados={parseInt(Math.random()*6 )+1} key={2} index={2}/>,
            <Dado ref={d3 => this.d3 = d3} dados={parseInt(Math.random()*6 )+1} key={3} index={3}/>,
            <Dado ref={d4 => this.d4 = d4} dados={parseInt(Math.random()*6 )+1} key={4} index={4}/>
        ]        
        this.state = {
            btnGirarTitle: "Girar",
            btnTitle: "Finalizar tiro"
        }
        this.giros = 2;
    }
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Ranking')}><Text>Ranking</Text></TouchableOpacity>
                </View>
            <View style={styles.dadosContainer} >
                <LineaDado dados={this.dados}/>
            </View>
            <Text style={styles.resultado}>{this.state.juego}</Text>
            <View style={styles.botonContainer}>
                <Button title={this.state.btnGirarTitle} onPress={() => this.girar()} />
                <Button title={this.state.btnTitle} onPress={() => this.finalizarTiro()} />
            </View>
            </View>
        );
    }
    girar() {        
        if (this.giros > 0){
            this.all = [this.d0, this.d1, this.d2, this.d3, this.d4];           
            this.all.map((el, idx) => {
                if (!el.state.selected){
                   el.girarDado();                      
                }                     
            })            
            this.giros--;
            if(this.giros == 1)
                this.setState({btnGirarTitle: "Ultimo giro"}) 
            else if (this.giros == 0){
                this.setState({btnGirarTitle: "No tienes mas giros"})
            }
        }        
    }
    finalizarTiro() {
        if (this.state.btnTitle == 'Finalizar tiro'){
            this.setState({juego: this.calcularJuego(), btnTitle: 'Nuevo tiro'})
            // pegarle a la api con el resultado
        }
        else
            window.location.reload(false);
        
    }
    calcularJuego() {
        this.juego = '';
        this.cincoParaEscalera = 0;
        this.dosDelFull = false;
        this.tresDelFull = false;
        this.index = 0;
        this.apariciones = [this.aparicionNumero(1),this.aparicionNumero(2),this.aparicionNumero(3),this.aparicionNumero(4),this.aparicionNumero(5),this.aparicionNumero(6)];
        while (this.juego == '') {
            this.element = this.apariciones[this.index];
            if ( this.element == 1) {
                this.cincoParaEscalera++;
                if (this.cincoParaEscalera == 5)
                    this.juego = 'escalera';
            }                
            else if (this.element == 2) {
                this.dosDelFull = true;
                if (this.tresDelFull)
                    this.juego = 'full';
            }                
            else if (this.element == 3) {
                this.tresDelFull = true;
                if (this.dosDelFull)
                    this.juego = 'full';
            }                
            else if (this.element == 4)
                this.juego = 'poker';
            else if (this.element == 5)
                this.juego = 'generala';
            if (this.index == this.apariciones.length)
                this.juego ='nada';
            else
                this.index++;
        }
        return this.juego;
    }
    aparicionNumero(numero) {
        this.result = 0;
        this.all = [this.d0, this.d1, this.d2, this.d3, this.d4];
        this.all.forEach(element => {
            if (element.state.value == numero){
                this.result++;
            }                                
        });
        return this.result;
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
       
    },
    resultado: {
        backgroundColor: 'yellow',
        textAlign: 'center'
    }
  });