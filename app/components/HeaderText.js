import { StyleSheet, Text, View } from 'react-native';
import React, { Component} from 'react';


export default class HeaderText extends Component {

    constructor(props){
        super(props)
        this.state = {text: this.props.text}
    }
    render() {
        return(<View>
            <Text style={styles.header}>{this.state.text}</Text>
        </View>);
    }
}


const styles = StyleSheet.create({
    header:{
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        paddingLeft: 20,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
      }
})