import { useState } from 'react';
import { Text, TextInput, View, Image, Pressable, Alert } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { globalStyles } from '../globalStyles';
import * as SQLite from 'expo-sqlite';
import Database from '../database';

export default function ConnexionPage({ navigation }) {

  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setisLoggedin] = useState(false)

  db.transaction(tx => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS names (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)')
  });

  const goHome = () => {
    navigation.navigate('Home')
  }

  const handleSignIn = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (tx, results) => {
          if (results.rows.length > 0) {
            // User exists, log them in and navigate to home screen
            goHome();
          } else {
            Alert.alert('Incorrect email or password');
          }
        }
      );
    });
  }
  const handleSignUp = (email, password) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM users WHERE email = ?', [email],
        (txObj, resultSet) => {
          // Check if user with given email already exists in database
          if (resultSet.rows.length > 0) {
            console.log('User with email already exists');
          } else {
            // If user with email doesn't exist, insert new user into database
            tx.executeSql('INSERT INTO users (email, password) VALUES (?, ?)', [email, password],
              (txObj, resultSet) => {
                console.log('User signed up successfully');
              },
              (txObj, error) => console.log(error)
            );
          }
        },
        (txObj, error) => console.log(error)
      );
    });
  };
  

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
          <KeyboardAvoidingView behavior="padding">
          <View style={globalStyles.containerForm}>
            <Text style={globalStyles.Text}>Your username or e-mail adress :</Text>
            <TextInput style={globalStyles.input} placeholder="Username or e-mail adress" onChangeText={text => setEmail(text)} />

            <Text style={globalStyles.Text}>Your password :</Text>
            <TextInput style={globalStyles.input} placeholder="Password" onChangeText={text => setPassword(text)} />

            <Text style={globalStyles.Test}>Already have an account ?</Text>
            <Pressable onPress={handleSignIn}>
              <Text style={globalStyles.TestUnderline}>Sign in here</Text>
            </Pressable>
            <View style={{alignItems: "center"}}>
            <Pressable style={globalStyles.Button}onPress={handleSignUp}>
              <Text style={globalStyles.TestUnderline}>
                Sign up</Text>
            </Pressable>
            </View>
            <Pressable onPress={goHome}>
              <Text style={globalStyles.TextMenu}>Browse without an account</Text>
            </Pressable>
          </View>
          </KeyboardAvoidingView>
        
      </View>
    );
  }