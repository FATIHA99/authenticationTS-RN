import { StyleSheet, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import Gap from '../../components/Gap'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../assets/logo.png'


const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = () => {
    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          // Do something with the successful login response (e.g. save the token)
        }
      })
      .catch((error) => {
        setError('An error occurred while logging in');
      });
  };


  return (
    <View>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Welcome back </Text>
      <Input
        placeholder="username"
        name='username' 
        value={username}
        onChangeText={setUsername}
        />
      <Gap height={23} />
      <Input
        placeholder="Password"
        name='password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.containerBottom}>
        <Text style={{ alignSelf: 'flex-end', fontSize: 15, }}> Forgot your password</Text>
        <Gap height={20} />

        {error && <Text>{error}</Text>}
        <Button title="LOGIN" 
        // onPress={() => navigation.replace('delivery')}
        onPress={handleLogin} 
         />
        <Text style={{ alignSelf: 'center', padding: 10 }} onPress={() => navigation.replace('register')}>Don't have an account?
         <Text style={{ color: '#E9AC12', fontWeight: 'bold' }}> Sign up</Text></Text>
      </View>
    </View>
  )
}

export default Login





const styles = StyleSheet.create({

  image: {
    alignSelf: 'center',
    marginTop: 40,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 28,
    color: "#E9AC12",
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20,
  },
  containerBottom: {
    alignSelf: 'center'
  }
})