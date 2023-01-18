import React, { useState } from 'react';
import * as Font from 'expo-font';
import ConnexionPage from "./screens/ConnexionPage";
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
    'audi-regular': require('./assets/fonts/AudiType-Normal_4.03.otf'),
    'audi-bold': require('./assets/fonts/AudiType-Bold_4.03.otf'),
    'audi-regular-extended': require('./assets/fonts/AudiType-ExtendedNormal_4.03.otf'), 
    'audi-bold-extended': require('./assets/fonts/AudiType-ExtendedBold_4.03.otf')
  });

export default function App(){
  
  //const [fontsLoaded, setFontsLoaded] = useState(false);
  
  //if(fontsLoaded){
    return(
      <ConnexionPage />
    );
  // } else {
  //   return(
  //   <AppLoading
  //     startAsync={getFonts}
  //     onFinish={() => setFontsLoaded(true)}
  //   />
  //   )
    
  }
  
