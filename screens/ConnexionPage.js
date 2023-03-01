import { Button, StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import { globalStyles } from '../globalStyles';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { AppLoading } from 'expo';



export default function ConnexionPage({ navigation }) {

  const goHome = () => {
    navigation.navigate('Home')
  }

    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.logoContainer}>
          <Image
            style={globalStyles.logoImg}
            source={{
              uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
            }} />
        </View>
        <Text style={{ fontSize: 35, color: 'white', textAlign: 'center', marginTop: 100, marginBottom: 50, fontFamily: "audi-regular-extended"}}>
          Create your account</Text>
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 50, marginLeft: 20, marginRight: 20, fontFamily: "audi-regular"}}>
          Create an account to save your favorite models and more.</Text>
        <View style={globalStyles.containerForm}>
          <Text style={globalStyles.Text}>Your username or e-mail adress :</Text>
          <TextInput style={globalStyles.input} placeholder="Username or e-mail adress" />
          <Text style={globalStyles.Text}>Your password :</Text>
          <TextInput style={globalStyles.input} placeholder="Password" />
          <Text style={globalStyles.Test}>Already have an account ?</Text>
          <Pressable onPress={goHome}>
            <Text style={globalStyles.TestUnderline}>Sign in here</Text>
          </Pressable>
          <View style={{alignItems: "center"}}>
          <Pressable style={globalStyles.Button}onPress={goHome}>
            <Text style={globalStyles.TestUnderline}>
              Sign up</Text>
          </Pressable>
          </View>
          <Pressable onPress={goHome}>
            <Text style={globalStyles.TextMenu}>Browse without an account</Text>
          </Pressable>
        </View>
      </View>
    );
  }