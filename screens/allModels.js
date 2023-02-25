import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../globalStyles';

export default function allModels({navigation}){


    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.logoContainer}>
                <Image
                    style={globalStyles.logoImg}
                    source={{
                    uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
                }} />
            </View>
            <Text style={globalStyles.TextMenu}>test Appel API</Text>
            <View style={globalStyles.menuHome}>   
                    <TouchableOpacity>
                        <ImageBackground
                        style={globalStyles.logoImgMenu}
                        source={{
                        uri: 'https://uhdwallpapers.org/uploads/converted/21/02/10/audi-e-tron-gt-2021-1920x1080_947678-mm-90.webp',
                        }}><Text style={globalStyles.TextMenuImg}>New 2023 Audi E-Tron GT</Text>
                        </ImageBackground>  
                    </TouchableOpacity>
            </View>
        </View>
    )
}