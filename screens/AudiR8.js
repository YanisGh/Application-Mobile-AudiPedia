import React, {useState, useEffect} from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { json } from "react-router-dom";
import { globalStyles } from '../globalStyles';

export default function AudiR8(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const Audi = 'R8';
    const url ="https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&q=&facet=make&facet=model&facet=cylinders&facet=drive&facet=fueltype&facet=trany&facet=vclass&facet=year&refine.make=Audi&refine.model="+ Audi +""
    
    useEffect(() =>{
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            setData(json.facet_groups);
            setLoading(false);
          })
          .catch((error) => console.error(error));
      }, []);

    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.logoContainer}>
                <Image
                    style={globalStyles.logoImg}
                    source={{
                    uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
                }} />
            </View>
            <View style={globalStyles.menuHome}>   
            <ImageBackground
            style={globalStyles.logoImgMenu}
            source={{
            uri: 'https://media4.speedcafe.com/wp-content/uploads/2020/09/637241-scaled.jpg',
            }}>
            </ImageBackground>  
                <View style={{height : 620}}>
                    <ScrollView>
                    {loading ? (
                        <Text style={globalStyles.TextMenuImg}>Loading all data for the model...</Text>
                    ) : (
                        data.map((facetGroup, index) => (
                        <View style={globalStyles.containerInfoCar} key={index}>
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
                            <Text style={globalStyles.TextMenuCarBold} key={facetGroup.name}>
                                {facetGroup.name === 'vclass' ? 'Class' : facetGroup.name === 'trany' ? 'Transmission' : facetGroup.name === 'fueltype' ? 'Fuel Type' : facetGroup.name.charAt(0).toUpperCase() + facetGroup.name.slice(1)} :
                            </Text>
                            </View>
                            {facetGroup.facets.map((facet, index) => (
                            <Text style={globalStyles.TextMenuCar} key={`${facetGroup.name}-${index}`}>{facet.name}</Text>
                            ))}
                        </View>
                        ))
                    )}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}