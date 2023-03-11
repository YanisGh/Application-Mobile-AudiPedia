import { useState } from 'react';
import { Text, TextInput, View, Image, Pressable, Alert } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { globalStyles } from '../globalStyles';
import { db } from './Database';


export default function ConnexionPage({ navigation }) {

  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setisLoggedin] = useState(false);
  const data = {userName: name, isLoggedIn};

  const goHome = () => {
    navigation.navigate('Home', { userName: name, isLoggedIn });
  };
  

  const handleSignIn = () => {
    //Alert.alert('1');
    db.transaction((tx) => {
      //Alert.alert('2');
      tx.executeSql(
        'SELECT * FROM names WHERE name = ? AND password = ?',
        [name, password],
        //Alert.alert('4'),
        (tx, results) => {
          //Alert.alert('5')
          if (results.rows.length > 0) {
            setisLoggedin(true);
            goHome();
          } else {
            Alert.alert('Incorrect name or password');
          }
        },
        //Alert.alert('6')
      );
    });
  };
  
  const handleSignUp = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM names WHERE name = ?', [name],
        (txObj, resultSet) => {
          // Check if user with given name already exists in database
          if (resultSet.rows.length > 0) {
            Alert.alert("The account you're trying to create already exists.");
          } else {
            // If user with name doesn't exist, insert new user into database
            tx.executeSql('INSERT INTO names (name, password) VALUES (?, ?)', [name, password]
            );
            Alert.alert('Account created. You can now connect to it using the credentials you have provided');
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
            <TextInput style={globalStyles.input} placeholder="Username or e-mail adress" onChangeText={text => setname(text)} />

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