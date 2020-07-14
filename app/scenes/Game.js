import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Checkbox } from 'react-native';
import Constants from './../../Constantes'
import LineaDado from '../components/LineaDados';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Dado from '../components/Dado'
import { CheckBox } from 'react-native-elements'
import UserService from '../services/UserService';



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
        this.girosPermitidos = 2;        
        this.state = {
            btnGirarTitle: "Girar",
            btnGirarDisabled: false,
            btnTitle: "Finalizar tiro",
            juegos: {
                escalera: false,
                full: false,
                poker: false,
                generala: false
            },
            tiros: 4,
            // TODO: tiros: this.props.tiros,
            giros: this.girosPermitidos,
            puntaje: 0
        }
        this.userId = 1;
        // TODO: this.userId = this.props.userId;   
    }
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.dadosContainer} >
                    <LineaDado ref={dadosRef => this.dadosRef = dadosRef} dados={this.dados}/>
                </View>            
                <Text style={styles.resultado}>Tiros restantes: {this.state.tiros}</Text>
                <Text style={styles.resultado}>Puntos: {this.state.puntaje}</Text>
                <CheckBox title='Escalera(20)' checked={this.state.juegos.escalera} disabled="true" />
                <CheckBox title='Full(30)' checked={this.state.juegos.full} disabled="true" />
                <CheckBox title='Poker(40)' checked={this.state.juegos.poker} disabled="true" />
                <CheckBox title='Generala(50)' checked={this.state.juegos.generala} disabled="true" />
                <Text style={styles.resultado}>{this.state.juego}</Text>
                <View style={styles.botonContainer}>
                    <Button title={this.state.btnGirarTitle} disabled={this.state.btnGirarDisabled} onPress={() => this.girar()} />
                    <Button title={this.state.btnTitle} onPress={() => this.finalizarTiro()} />
                </View>
            </View>
        );
    }
    girar() {        
        if (this.state.giros > 0){
            this.all = [this.d0, this.d1, this.d2, this.d3, this.d4];           
            this.all.map((el, idx) => {
                if (!el.state.selected){
                   el.girarDado();                      
                }                     
            })            
            this.state.giros--;
            if(this.state.giros == 1)
                this.setState({btnGirarTitle: "Ultimo giro"}) 
            else if (this.state.giros == 0){
                this.setState({btnGirarTitle: "No tienes mas giros", btnGirarDisabled: true})
            }
        }        
    }
    finalizarTiro() {        
        if (this.state.btnTitle == 'Finalizar tiro'){
            this.title = '';
            if (this.state.tiros == 1) {
                this.title = 'No tienes más tiros, mira el ranking';
            }                
            else
                this.title = 'Nuevo tiro';     
            this.setState({juego: this.calcularJuego(), btnTitle: this.title, btnGirarDisabled: true, tiros: this.state.tiros-1});
        }
        else if (this.state.tiros > 0)  {
            this.all.map((el, idx) => {
                    el.girarDado();   
                    el.deseleccionar();
            })
            this.setState({juego: '', btnTitle: 'Finalizar tiro', btnGirarTitle: "Girar", btnGirarDisabled: false, giros: this.girosPermitidos})
        }
        else {        
            //TODO: que espere a que el update finalice para redirigir a la pantalla de Ranking.
            this.updateUserScore();
            this.props.navigation.navigate('Ranking');            
        }
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
                if (this.cincoParaEscalera == 5) {
                    this.juego = 'escalera';
                    this.state.juegos.escalera = true;
                    this.state.puntaje = this.state.puntaje + 20;
                }                    
            }                
            else if (this.element == 2) {
                this.dosDelFull = true;
                if (this.tresDelFull){
                    this.juego = 'full';
                    this.state.juegos.full = true;
                    this.state.puntaje = this.state.puntaje + 30;
                }                    
            }                
            else if (this.element == 3) {
                this.tresDelFull = true;
                if (this.dosDelFull) {
                    this.juego = 'full';
                    this.state.juegos.full = true;
                    this.state.puntaje = this.state.puntaje + 30;
                }                    
            }                
            else if (this.element == 4) {
                this.juego = 'poker';
                this.state.juegos.poker = true;
                this.state.puntaje = this.state.puntaje + 40;
            }                
            else if (this.element == 5) {
                this.juego = 'generala';
                this.state.juegos.generala = true;
                this.state.puntaje = this.state.puntaje + 50;
            }                
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
    updateUserScore = () => {
        new UserService().updateUserScore( (response, error) =>
            console.log(response), this.userId, this.state.puntaje
        )
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
        //height: Constants.MAX_HEIGHT-60,
        width: Constants.MAX_WIDTH,
        backgroundColor: 'green',
        justifyContent: "center",
    },
    botonContainer: {
        flex: 1,
        //height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH,
        backgroundColor: 'blue',
       
    },
    resultado: {
        backgroundColor: 'yellow',
        textAlign: 'center'
    }
  });