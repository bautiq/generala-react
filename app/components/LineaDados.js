import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dado from './Dado';
import Constants from './../../Constantes';


export default class LineaDado extends Component {
    constructor(props) {
        super(props);
        this.num = "12345";
        this.lineDado = this.num.repeat(1).split("");
        this.state = {
            width: null,
            height: null
        }
        this.dados = this.props.dados;          
        // this.dadoHeight = this.props.height / Constantes.DADOS;
       
    }
    onLayout = (e) => {
        this.setState({
            width: e.width,
            height: e.height,
        })
    }
    
    renderLine = () => {
        let lineaWidth = this.state.width / Constants.DADOS;
        
        return (
            <Dado width={lineaWidth} height={this.state.height} />
        )
    }

    render() {
        return (
            <View style={styles.linea} >
                {this.state.width && this.state.height && this.renderLine()}
                <View style={styles.dados}>
                    {this.dados.map((el, idx) => {
                        return el;
                    })}                    
                </View>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    linea: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    dados: {
        flexDirection: "row",
        justifyContent: "center"
    }
})