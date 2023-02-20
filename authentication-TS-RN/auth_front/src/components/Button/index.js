import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress,title }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
    button:
    {
        padding: 18,
        backgroundColor: '#E9AC12',
        color: '#fff',
        width: 320,
        alignSelf: "center",
        borderRadius: 5,

    },
    title : {
        color :'#FFF',
        alignSelf : 'center',
        fontWeight:"bold"
    }


})