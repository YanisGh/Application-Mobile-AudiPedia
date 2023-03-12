import React, {useState, useEffect} from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from '../globalStyles';

export default function allModels({navigation}){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [userName, setName] = useState(navigation.getParam('userName'));
    
    
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
            <View style={globalStyles.menuHome}>   
            <ImageBackground
            style={globalStyles.logoImgMenu}
            source={{
                uri : 'https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/1920x1440_A189584_large.jpg?imwidth=1920&imdensity=1',
            }}>
            </ImageBackground> 
            <Text style={{color : "white", fontFamily : "audi-bold-extended", marginBottom : 7}}>Tap on a model for more details.</Text>
            <ScrollView>
            {loading ? (
                <Text style={globalStyles.TextMenuImg}>Loading all models...</Text>
                ) : (
                data.map((facetGroup, index) => (
                    <View style={globalStyles.containerInfoCar} key={`group-${index}`}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {facetGroup.name === 'make' || facetGroup.name === 'model' ? (
                        <Image
                        source={require('../images/icons/car-.png')}
                        style={globalStyles.iconFacet}
                        />
                    ) : (
                        <Image
                        source={require('../images/icons/car-.png')}
                        style={globalStyles.iconFacet}
                        />
                    )}
                    <Text style={globalStyles.TextMenuCarBold} key={`group-${index}`}>
                        {facetGroup.name === 'vclass' ? 'Class' : facetGroup.name === 'trany' ? 'Transmission' : facetGroup.name === 'fueltype' ? 'Fuel Type' : facetGroup.name.charAt(0).toUpperCase() + facetGroup.name.slice(1)} :
                    </Text>
                    </View>
                    {facetGroup.facets.map((facet, idx) => (
                        <TouchableOpacity onPress={() => navigation.navigate('searchedModel', {facet: facet.name, userName: userName})} key={`facet-${idx}`}>
                            <Text style={globalStyles.TextMenuCar} key={`facet-${idx}`}>{facet.name}</Text>
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
