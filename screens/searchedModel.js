import React, {useState, useEffect} from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, Alert, Pressable, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from '../globalStyles';
import { db } from './Database';

export default function searchedModel({ navigation }){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const userName = (navigation.getParam('userName'));
    const model = (navigation.getParam('facet'));
    const url ="https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&q=&facet=make&facet=model&facet=cylinders&facet=drive&facet=fueltype&facet=trany&facet=vclass&facet=year&refine.make=Audi&refine.model="+ model +""
    
    useEffect(() =>{
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setData(json.facet_groups);
            setLoading(false);
          })
          .catch((error) => console.error(error));
      }, []);

      const addToFav = () => {
        {userName == null ? Alert.alert("You have to be logged in in order to add favorites.") :
          db.transaction(tx => {
            tx.executeSql('INSERT INTO favorites (model, name) values (?,?)', [model, userName], 
            (txObj, error) => console.log(error),
            Alert.alert("Model favorited")
          );
        });
       }
      }

      return (
        <View style={globalStyles.container}>
          <View style={globalStyles.logoContainer}>
            <Image
              style={globalStyles.logoImg}
              source={{
                uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
              }}
            />
          </View>
          <View style={globalStyles.menuHome}>
            <ImageBackground
              style={globalStyles.logoImgMenu}
              source={{
                uri: 'https://media4.speedcafe.com/wp-content/uploads/2020/09/637241-scaled.jpg',
              }}
            >
            <TouchableWithoutFeedback onPress={addToFav}>
              <Image
                style={{ position: 'absolute', top: 5, right: 12, width: 30, height: 30, tintColor : "white" }}
                source={require('../images/icons/favorite-large-2x.png')}
              />
            </TouchableWithoutFeedback>
            </ImageBackground>
            {/* {console.log(model)}
            {console.log(userName)} */}
            <View style={{height : 600}}>
            {loading ? (
                <Text style={globalStyles.TextMenuImg}>Loading all data for the model...</Text>
                ) : data && data.length > 0 ? (
                  <ScrollView>
                  {
                      data.map((facetGroup, index) => (
                      <View style={globalStyles.containerInfoCar} key={facetGroup.name}>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          {facetGroup.name === 'vclass' ? (
                              <Image
                              source={require('../images/icons/class.png')}
                              style={globalStyles.iconFacet}
                              />
                          ) : facetGroup.name === 'trany' ? (
                              <Image
                              source={require('../images/icons/transmission.png')}
                              style={globalStyles.iconFacet}
                              />
                          ) : facetGroup.name === 'fueltype' ? (
                              <Image
                              source={require('../images/icons/fuel-type.png')}
                              style={globalStyles.iconFacet}
                              />
                          ) : facetGroup.name === 'drive' ? (
                              <Image
                              source={require('../images/icons/drive.png')}
                              style={globalStyles.iconFacet}
                              />
                          ) : facetGroup.name === 'year' ? (
                              <Image
                              source={require('../images/icons/year.png')}
                              style={globalStyles.iconFacet}
                              />
                          ) : facetGroup.name === 'cylinders' ? (
                              <Image
                              source={require('../images/icons/engine.png')}
                              style={globalStyles.iconFacet}
                              />
                          ) : (
                              <Image
                              source={require('../images/icons/car-.png')}
                              style={globalStyles.iconFacet}
                              />
                          )}
                          <Text style={globalStyles.TextMenuCarBold} key={index}>
                              {facetGroup.name === 'vclass' ? 'Class' : facetGroup.name === 'trany' ? 'Transmission' : facetGroup.name === 'fueltype' ? 'Fuel Type' : facetGroup.name.charAt(0).toUpperCase() + facetGroup.name.slice(1)} :
                          </Text>
                          </View>
                          {facetGroup.facets.map((facet, index) => (
                            <Text key={index} style={globalStyles.TextMenuCar}>{facet.name}</Text>
                          ))}
                      </View>
                      ))
                  }
                  </ScrollView>
                ) : (
                    <Text style={globalStyles.TextMenuCar}>No results found.</Text>
                )}
            </View>
          </View>
        </View>
      );
      
    
}