import React, {useState, useEffect} from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from '../globalStyles';

export default function AudiSQ5(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    const url ="https://public.opendatasoft.com/api/records/1.0/search/?dataset=all-vehicles-model&q=&facet=make&facet=model&facet=cylinders&facet=drive&facet=fueltype&facet=trany&facet=vclass&facet=year&refine.make=Audi&refine.model=SQ5"
    
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
                uri: 'https://cdn.motor1.com/images/mgl/eJZqP/s1/2021-audi-sq5-sportback-tdi.jpg',
                }}>
                </ImageBackground>  
            </TouchableOpacity>
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
    )
}