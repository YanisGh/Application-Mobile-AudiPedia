import React from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../globalStyles';

export default function AudiA1(){


    return(
        <View style={globalStyles.container}>
            <View style={globalStyles.logoContainer}>
                <Image
                    style={globalStyles.logoImg}
                    source={{
                    uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
                }} />
            </View>
            <Text style={globalStyles.TextMenu}>Audi A1</Text>
            <View style={globalStyles.menuHome}>   
            <TouchableOpacity>
                        <ImageBackground
                        style={globalStyles.logoImgMenu}
                        source={{
                        uri: 'https://i.ytimg.com/vi/v8-9G2Q3fAo/maxresdefault.jpg',
                        }}><Text style={globalStyles.TextMenuImgA1}>Rediscover the classics</Text>
                        </ImageBackground>  
                    </TouchableOpacity>
            </View>
        </View>
    )
}