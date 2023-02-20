// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import Router from './router'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'





function App() {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
}

export default App;