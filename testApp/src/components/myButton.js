import React, {Component} from 'react'
import {Text, StyleSheet, View, TouchableOpacity,ActivityIndicator} from 'react-native'

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity disabled={this.props.disabled} style={styles.button} onPress={this.props.onPress}>
                {this.props.isSubmit ? <ActivityIndicator color={'#fff'} size={'large'}/> : <Text style={styles.text}>{this.props.text}</Text>}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        width:'100%',
        height:50,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'#1572de',
        justifyContent:'center',
        elevation:8
    },
    text:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'#f2f2f2'
    }
})
