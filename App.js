import * as React from 'react';
import { useFonts } from 'expo-font';
import Navigator from './routes/homeStack'

export default function App(){
  const [fontsLoaded] = useFonts({
    'audi-regular': require('./assets/fonts/AudiType-Normal_4.03.otf'),
    'audi-bold': require('./assets/fonts/AudiType-Bold_4.03.otf'),
    'audi-regular-extended': require('./assets/fonts/AudiType-ExtendedNormal_4.03.otf'), 
    'audi-bold-extended': require('./assets/fonts/AudiType-ExtendedBold_4.03.otf')
  });
  
  if(!fontsLoaded){
    return null;
  } else {
    return (
      <Navigator/>
    );
  }
}

  
