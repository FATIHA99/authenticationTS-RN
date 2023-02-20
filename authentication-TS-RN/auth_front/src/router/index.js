import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/register'
import Delivery from '../screens/admin/delivery'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

const Router = () => {
    return (

            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
                <Stack.Screen name='delivery' component={Delivery} options={{ headerShown: false }} />
            </Stack.Navigator>


    )
}

export default Router

const styles = StyleSheet.create({})