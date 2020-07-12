import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import DadoImg from '../../assets/dados.js'
import Constantes from '../../Constantes.js';
import Axios from 'axios';


export default class Dado extends Component {
    constructor(props) {
        super(props)
        this.state={
            data:[]
        }
    }
    traerDados() {

        getDataApi()
    }
    async getDataApi() {
        let resp = await Axios.get('https://facebook.github.io/react-native/movies.json');
        console.log(resp.data);
        this.setState({ data: resp.data.movies });
    }
    getDado = () => {
        
        switch (this.props.dados) {
            case 1:
                return DadoImg.uno;
                break;
            case 2:
                return DadoImg.dos;
                break;
            case 3:
                return DadoImg.tres;
                break;
            case 4:
                return DadoImg.cuatro;
                break;
            case 5:
                return DadoImg.cinco;
                break;
            case 6:
                return DadoImg.seis;
                break;
            default:
                return null;
        }
    }
    render() {
        let dadito = this.getDado();
        return (
            <View style={styles.dados}>
                {this.state.data.map((item) =>
                console.log("caca"))}
                <Image style={{ width: 60, height: 60 }} resizeMode="contain" source={dadito} />
            </View>

        )
    }

}
const styles = StyleSheet.create({
    dados: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center"
    },
})