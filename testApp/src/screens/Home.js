import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native'

import LoginArea from '../components/SignUp/loginArea'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.header}/>
                <View>
                    <Text style={styles.logo}>Any Image</Text>
                    <Text style={styles.description}>This app includes your soul's picture</Text>
                </View>
                <LoginArea navigate={this.props.navigation.navigate}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingVertical: 80,
        alignItems: 'center'
    },
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 300,
        backgroundColor: '#1572de',
        borderBottomRightRadius: 250
    },
    logo: {
        fontSize: 30,
        textAlign: 'center',
        color: '#f2f2f2',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 12,
        textAlign: 'center',
        color: '#f2f2f2'
    }

})
