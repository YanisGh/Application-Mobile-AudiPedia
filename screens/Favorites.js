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
        tx.executeSql('SELECT * FROM favorites WHERE name = ?', [name],
          (txObj, resultSet) => setFavs(resultSet.rows._array),
          (txObj, error) => console.log(error + "error 2"),
        );
      });
      
    
    }, [db, userID]); // include userID in the dependency array

    const deleteModel = (model) => {
      db.transaction(tx => {
        tx.executeSql('DELETE FROM favorites WHERE model = ? and name = ?', [model, name],
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingFavs = [...favs].filter(favs => favs.model !== model);
            setFavs(existingFavs);
            Alert.alert("Model Deleted")
          }
        },
        (txObj, error) => console.log(error)
        );
      });
    }

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
            <View style={globalStyles.containerFavCar}>
            {favs.map((fav, index) => {
              return (
                <TouchableOpacity key={index} onPress={() =>navigation.navigate("searchedModel", { facet : fav.model })} style={globalStyles.containerInfoCar}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={globalStyles.TextMenuCar}>{fav.model}</Text>
                    <TouchableOpacity onPress={() => deleteModel(fav.model)}>
                      <Image
                        source={require('../images/icons/erase-large-2x.png')}
                        style={{ width: 20, height: 20, Textalign: "right", marginRight : 15, tintColor : "white"}}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
              })}
            </View>


            </View>
            {console.log(name)}
            
        </View>
        
    )
}