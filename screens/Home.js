import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../globalStyles';

export default function Home({navigation}){

    const gos = () => {
        navigation.navigate('ConnexionPage')
      }

    // const goR8 = () => {
    //     navigation.navigate('AudiR8')
    //   }
    // const goA1 = () => {
    //     navigation.navigate('AudiA1')
    //   }

    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.logoContainer}>
                <Image
                    style={globalStyles.logoImg}
                    source={{
                    uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
                }} />
            </View>
            <Text style={globalStyles.TextMenu}>Discover our new offerings</Text>
            <View style={globalStyles.menuHome}>   
                    <TouchableOpacity onPress={gos}>
                        <ImageBackground
                        style={globalStyles.logoImgMenu}
                        source={{
                        uri: 'https://uhdwallpapers.org/uploads/converted/21/02/10/audi-e-tron-gt-2021-1920x1080_947678-mm-90.webp',
                        }}><Text style={globalStyles.TextMenuImg}>New 2023 Audi E-Tron GT</Text>
                        </ImageBackground>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gos}>
                        <ImageBackground
                        style={globalStyles.logoImgMenu}
                        source={{
                        uri: 'https://media4.speedcafe.com/wp-content/uploads/2020/09/637241-scaled.jpg',
                        }}><Text style={globalStyles.TextMenuImgR8}>Audi R8</Text>
                        </ImageBackground>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={gos}>
                        <ImageBackground
                        style={globalStyles.logoImgMenu}
                        source={{
                        uri: 'https://i.ytimg.com/vi/v8-9G2Q3fAo/maxresdefault.jpg',
                        }}><Text style={globalStyles.TextMenuImgA1}>Rediscover the classics</Text>
                        </ImageBackground>  
                    </TouchableOpacity>
                    <Text style={globalStyles.TextMenu}>More cars</Text>
                    <TouchableOpacity onPress={gos}>
                        <Image
                        style={globalStyles.logoPlusMenu}
                        source={require('../images/icons/system-add-large-2x.png')}
                        />
                    </TouchableOpacity>
            </View>
        </View>
    )
}