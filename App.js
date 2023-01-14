import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { AppLoading } from 'expo';

/*const getFonts = () => Font.loadAsync({
    'audi-regular': require('./assets/fonts/AudiType-Normal_4.03.otf'),
    'audi-bold': require('./assets/fonts/AudiType-Bold_4.03.otf')
  });
  */


export default function App() {
  //const [fontsLoaded, setFontsLoaded] = useState(false);
  let [fontsLoaded] = useFonts({
    'audi-regular': require('./assets/fonts/AudiType-Normal_4.03.otf'),
    'audi-bold': require('./assets/fonts/AudiType-Bold_4.03.otf'),
    'audi-regular-extended': require('./assets/fonts/AudiType-ExtendedNormal_4.03.otf'), 
    'audi-bold-extended': require('./assets/fonts/AudiType-ExtendedBold_4.03.otf')
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImg}
            source={{
              uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
            }} />
        </View>
        <Text style={{ fontSize: 40, color: 'white', textAlign: 'center', marginTop: 100, marginBottom: 50, fontFamily: 'audi-regular-extended'}}>
          INSCRIPTION</Text>
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 50, marginLeft: 20, marginRight: 20, fontFamily: 'audi-regular'}}>
          Créez un compte pour sauvegarder vos recherches et mettre en favoris vos coups de coeur</Text>
        <View style={styles.containerForm}>
          <Text style={styles.Text}>Votre nom d'utilisateur :</Text>
          <TextInput style={styles.input} placeholder="Nom d'utilisateur" />
          <Text style={styles.Text}>Votre mot de passe :</Text>
          <TextInput style={styles.input} placeholder="Mot de passe" />
          <Text style={styles.Test}>Vous avez déjà un compte ?</Text>
          <Text style={styles.TestUnderline}>Connectez-vous ici</Text>
          <Button title="S'inscrire" />
          <Button title="Continuer sans compte" />
        </View>
      </View>
    );
  }
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
    fontFamily: 'audi-bold-extended'
  },
  Text:{
    color: 'white',
    marginTop: 5,
    fontFamily: 'audi-regular',
  },
  Test:{
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'audi-regular'
  },
  TestUnderline:{
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'audi-regular'
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
