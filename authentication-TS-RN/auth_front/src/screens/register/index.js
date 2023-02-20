import { StyleSheet, ScrollView,Image,Text, View } from 'react-native'
import React from 'react'
import Gap from '../../components/Gap'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../assets/logo.png'


const Register = ({navigation}) => {
  return (
    <ScrollView>
      <Image source={Logo} style={styles.image} />
      <Text style={styles.title}>Create Account </Text>
      <Input placeholder="Name" />
      <Gap height={23} />

      <Input placeholder="Email" />
      <Gap height={23} />
      <Input placeholder="Password" />
      <View style={styles.containerBottom}>
        <Gap height={30} />
        <Button title="SIGN UP" />
        <Text style={{ flexWrap:'nowrap'}}>Already  have an account? <Text style={{ color: '#E9AC12', fontWeight: 'bold' }} onPress={() => navigation.replace('Login')} > Login </Text></Text>
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        marginTop: 20,
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