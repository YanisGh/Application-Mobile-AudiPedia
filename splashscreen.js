import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { globalStyles } from './globalStyles';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Image
            style={styles.logoImg}
            source={{
              uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    logoImg:{
        width: 200,
        height: 70,
        resizeMode: 'center',
      }
});