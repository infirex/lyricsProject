import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Router from './src/Router'

export default class App extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Router/>
        )
    }
}

const styles = StyleSheet.create({})
