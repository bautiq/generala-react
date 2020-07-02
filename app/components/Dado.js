import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DadoImg from '../../assets/dados.js'
import Constantes from '../../Constantes.js';

export default class Dado extends Component {
    constructor(props) {
        super(props)
    }

    getDado = () => {
        console.log(this.props.dados)
        switch (this.props.dados) {
            case "U":
                return DadoImg.uno;
                break;
            case "D":
                return DadoImg.dos;
                break;
            case "T":
                return DadoImg.tres;
                break;
            case "C":
                return DadoImg.cuatro;
                break;
            case "F":
                return DadoImg.cinco;
                break;
            case "S":
                return DadoImg.seis;
                break;
            default:
                return DadoImg.tres;
        }
    }
    render() {
        let dadito = this.getDado();
        return (
            <View style={styles.dados}>
                <Image style={{width: 50, height: 50}} resizeMode="contain" source={dadito} />
            </View>

        )
    }

}
const styles = StyleSheet.create({
    dados: {
        flex: 1,
       flexDirection: "row",
        backgroundColor: "white",
    },
})