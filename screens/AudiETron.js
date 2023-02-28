import React, {useState, useEffect} from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { json } from "react-router-dom";
import { globalStyles } from '../globalStyles';

export default function AudiETron(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    const url ="https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&q=audi+a1&facet=make&facet=model&facet=cylinders&facet=drive&facet=fueltype&facet=trany&facet=vclass&facet=year&refine.make=Audi&refine.model=e-tron"
    
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
                uri: 'https://uhdwallpapers.org/uploads/converted/21/02/10/audi-e-tron-gt-2021-1920x1080_947678-mm-90.webp',
                }}>
                </ImageBackground>  
            </TouchableOpacity>
            <ScrollView>
            {loading ? (<Text style={globalStyles.TextMenuImg}>Loading all data for the model...</Text>) : 
            
            data.map((facetGroup, index) => (
                <View style={globalStyles.containerInfoCar} key={index}>
                    <Text style={globalStyles.TextMenuCarBold}>{facetGroup.name} :</Text>
                    {facetGroup.facets.map((facet) => (
                            <Text style={globalStyles.TextMenuCar}>{facet.name}</Text>
                    ))}
                </View>

            ))}
            </ScrollView>
            </View>
        </View>
    )
}