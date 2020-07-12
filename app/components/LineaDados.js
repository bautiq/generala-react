import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dado from './Dado';
import Constants from './../../Constantes';


export default class LineaDado extends Component {
    constructor(props) {
        super(props);
        this.dados = "12345";
        this.lineDado = this.dados.repeat(1).split("");
        this.state = {
            width: null,
            height: null
        }
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
                    {this.lineDado.map((el, idx) => {
                        return <Dado dados={parseInt(Math.random()*6 )+1} key={idx} index={idx}/>
                    })}
                </View>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    linea: {
        flex: 1,
        backgroundColor: 'green',
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    dados: {
        flexDirection: "row",
        justifyContent: "center"
    }
})