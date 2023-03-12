import React, {useState, useEffect} from "react";
import { Button, Text, View, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { globalStyles } from '../globalStyles';
import { db } from './Database';

export default function favorite({navigation}){
    const [favs, setFavs] = useState([]);
    const [userID, setUserID] = useState(null);
    const [name, setName] = useState(navigation.getParam('userName'));
    
    useEffect(() => {
    
      db.transaction(tx => {
        console.log("User id at " + [name] + " before Value")
        tx.executeSql('SELECT * FROM favorites WHERE name = ?', [name],
          (txObj, resultSet) => setFavs(resultSet.rows._array),
          (txObj, error) => console.log(error + "error 2"),
        );
      });
      
    
    }, [db, userID]); // include userID in the dependency array
    

      const showFavs = () => {
        return favs.map((fav, index) => {
          return (
            <View key={index} style={globalStyles.containerInfoCar}>
              <Text style={{color: 'white'}}>{fav.model}</Text>
              <Button title='Delete' />
            </View>
          );
        });
      };

    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.logoContainer}>
                <Image
                    style={globalStyles.logoImg}
                    source={{
                    uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
                }} />
            </View>
            <Text style={globalStyles.TextMenu}></Text>
            <View style={globalStyles.menuHome}>   
            <TouchableOpacity>
                <ImageBackground
                style={globalStyles.logoImgMenu}
                source={{
                uri: 'https://uhdwallpapers.org/uploads/converted/21/02/10/audi-e-tron-gt-2021-1920x1080_947678-mm-90.webp',
                }}>
                </ImageBackground>  
            </TouchableOpacity>
            <Text style={{color : "white", fontFamily : "audi-bold-extended", marginBottom : 7}}> You currently have {favs.length} favorited models</Text>
              <View style={globalStyles.containerInfoCar}>
                {favs.map((fav, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('searchedModel', { name : fav.model })} style={globalStyles.containerInfoCar}>
                      <Text style={globalStyles.TextMenuCar}>{fav.model}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
        </View>
    )
}