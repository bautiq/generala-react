import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlightBase } from 'react-native';
import DadoImg from '../../assets/dados.js'
import Constantes from '../../Constantes.js';
import Axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Dado extends Component {    
    constructor(props) {
        super(props)
        this.state={
            id: this.props.index,
            selected: false,
            color: "red",
            value: this.props.dados,
            image: this.getDado(this.props.dados)
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
    getDado = (value) => {
        
        switch (value) {
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
        return (
            <View style={styles.dados}>
                <TouchableOpacity onPress={() => this.selectDado()}>
                    <Image style={{ width: 60, height: 60, backgroundColor: this.state.color }} resizeMode="contain" source={this.state.image} />
                </TouchableOpacity>                
            </View>
        )
    }
    selectDado = () => {
        if (!this.state.selected) {
            this.setState({selected: true, color: "green"});
        }     
        else {
            this.setState({selected: false, color: "red"});
        }                        
    }
    girarDado() {
        this.setState({image: this.getDado(parseInt(Math.random()*6 )+1)})        
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