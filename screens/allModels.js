import React, {useState, useEffect} from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from '../globalStyles';

export default function allModels({navigation}){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    const url ="https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&q=&sort=year&facet=model&refine.make=Audi"
    
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
            <Text style={globalStyles.TextMenu}></Text>
            <View style={globalStyles.menuHome}>   
            <TouchableOpacity>
                        <ImageBackground
                        style={globalStyles.logoImgMenu}
                        source={{
                            uri : 'https://assetseu-h2.izmocars.com/userfiles/105587/header_gammeaudisport.jpg',
                        }}>
                        </ImageBackground> 
            </TouchableOpacity>
            <Text style={{color : "white", fontFamily : "audi-bold", marginBottom : 5}}>Tap on a model to learn more about it's specifications</Text>
            <ScrollView>
            {loading ? (
                <Text style={globalStyles.TextMenuImg}>Loading all data for the model...</Text>
                ) : (
                data.map((facetGroup, index) => (
                <View style={globalStyles.containerInfoCar} key={index}>
                    <Text style={globalStyles.TextMenuCarBold} key={index}>
                        {facetGroup.name === 'vclass' ? 'Class' : facetGroup.name === 'trany' ? 'Transmission' : facetGroup.name === 'fueltype' ? 'Fuel Type' : facetGroup.name.charAt(0).toUpperCase() + facetGroup.name.slice(1)} :
                    </Text>
                    {facetGroup.facets.map((facet) => (
                    <TouchableOpacity onPress={() => navigation.navigate('searchedModel', facet)}>
                        <Text style={globalStyles.TextMenuCar} key={index}>{facet.name}</Text>
                    </TouchableOpacity>
                    ))}
                </View>
                ))
            )}
            </ScrollView>
            </View>
        </View>
    )
}