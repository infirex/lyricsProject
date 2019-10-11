import React from 'react'

import { 
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";

import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

import Home from './screens/Home'
import Test from './screens/Test'

const AppContainer = createSwitchNavigator({
    Home:{
        screen:Home,
    },
    Lyrics:{
        screen:Test
    }
})



export default createAppContainer(AppContainer)
