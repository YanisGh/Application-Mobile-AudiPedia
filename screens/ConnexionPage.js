import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
// import { useFonts } from 'expo-font';
// import { useState } from 'react';
// import { AppLoading } from 'expo';

export default function ConnexionPage() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={{
              uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
            }} />
        </View>
        <Text style={{ fontSize: 40, color: 'white', textAlign: 'center', marginTop: 100, marginBottom: 50}}>
          Create your account</Text>
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 50, marginLeft: 20, marginRight: 20}}>
          Create an account to save your favorite models and more</Text>
        <View style={styles.containerForm}>
          <Text style={styles.Text}>Your username or e-mail adress :</Text>
          <TextInput style={styles.input} placeholder="Username or e-mail adress" />
          <Text style={styles.Text}>Your password :</Text>
          <TextInput style={styles.input} placeholder="Password" />
          <Text style={styles.Test}>Already have an account ?</Text>
          <Text style={styles.TestUnderline}>Sign in</Text>
          <Button title="Sign up" />
          <Button title="Continue without an account" />
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    
  },
  containerForm:{
    width: 300,
  },
  input:{
    backgroundColor:'white',
    color: 'black',
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
  },
  Text:{
    color: 'white',
    marginTop: 5,
  },
  Test:{
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  TestUnderline:{
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  logoContainer:{
    marginTop: 45,
  },
  logoImg:{
    width: 100,
    height: 35,
    resizeMode: 'stretch',
  }
});