import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
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
        INSCRIPTION</Text>
      <Text style={{ color: 'white', textAlign: 'center', marginBottom: 50, marginLeft: 20, marginRight: 20,}}>
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
