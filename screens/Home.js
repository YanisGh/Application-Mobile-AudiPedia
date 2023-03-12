import React, { useState, useEffect} from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../globalStyles';

export default function Home({navigation}){

    const name = navigation.getParam('userName');
    const isLoggedIn = navigation.getParam('isLoggedIn');
    
    const goETron= () => {
        navigation.navigate('AudiETron')
      }
    const goR8 = () => {
        navigation.navigate('AudiR8')
      }
    const goSQ5 = () => {
        navigation.navigate('AudiSQ5')
      }
    const goAllModels = () =>{
        navigation.navigate('allModels')
    }
    const database = () =>{
        navigation.navigate('Database')
    }
    const goCon = () =>{
        navigation.navigate('ConnexionPage')
    }
    const goFav = () => {
        navigation.navigate('Favorites', { userName: name });
      };

    return(
        <View style={globalStyles.container}>
            {/* {console.log(name)}
            {console.log(isLoggedIn)} */}
            <View style={globalStyles.logoContainer}>
                {/* image 1*/}
                <Image
                    style={{
                        width: 100,
                        height: 35
                      }}
                    source={{
                    uri: 'https://pnggrid.com/wp-content/uploads/2021/04/white-audi-logo-1024x356.png',
                }} />
                <TouchableOpacity onPress={goCon}>
                {isLoggedIn ? 
                /* image 2*/
                <Image
                    source={require('../images/icons/logout-large-2x.png')}
                    style={{ width: 35, height: 35, tintColor: "white", textAlign: "right"}}
                /> :
                /* image 2*/ 
                <Image
                    source={require('../images/icons/login-large-2x.png')}
                    style={{ width: 35, height: 35, tintColor: "white", textAlign: "right"}}
                />
                }
                </TouchableOpacity>
            </View>
            <Text style={globalStyles.TextMenu} onPress={database}>Vorsprung durch Technik</Text>
            {isLoggedIn ?
            <ScrollView>
            <Text style={globalStyles.TextMenu}>Welcome {name}</Text> 
                <TouchableOpacity onPress={goETron}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                    uri: 'https://uhdwallpapers.org/uploads/converted/21/02/10/audi-e-tron-gt-2021-1920x1080_947678-mm-90.webp',
                    }}><Text style={globalStyles.TextMenuImg}>New Audi E-Tron GT</Text>
                    </ImageBackground>  
                </TouchableOpacity>

                <TouchableOpacity onPress={goR8}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                    uri: 'https://wallpaperaccess.com/full/385869.jpg',
                    }}><Text style={globalStyles.TextMenuImgR8}>Audi R8</Text>
                    </ImageBackground>  
                </TouchableOpacity>
    
                <TouchableOpacity onPress={goSQ5}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                    uri: 'https://www.largus.fr/images/images/audi-sq5-tdi-2021-2.jpg',
                    }}><Text style={globalStyles.TextMenuImgSQ5}>Audi SQ5</Text>
                    </ImageBackground>  
                </TouchableOpacity>    

                <TouchableOpacity onPress={goAllModels}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                        uri : 'https://www.audi-sxm.com/content/dam/nemo/aola/Latin-America-general/2021/September/News/Vosprung2030/Header1400x434_Vorsprung2030.jpg?imwidth=1920',
                    }}><Text style={globalStyles.TextMenuImgAllModels}>All models</Text>
                    </ImageBackground>  
                </TouchableOpacity>
                <TouchableOpacity onPress={goFav}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                    uri: 'https://assetseu-h2.izmocars.com/userfiles/105587/header_gammeaudisport.jpg',
                    }}><Text style={globalStyles.TextMenuImgFav}>Favorites</Text>
                    </ImageBackground>  
                </TouchableOpacity>
            </ScrollView> :
            <View style={globalStyles.menuHome}>
            {isLoggedIn ? <Text style={globalStyles.TextMenu}>Logged In, Welcome {name}</Text> :
            <Text style={globalStyles.TextMenu}>Not logged in, Welcome</Text>}
               
                <TouchableOpacity onPress={goETron}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                    uri: 'https://uhdwallpapers.org/uploads/converted/21/02/10/audi-e-tron-gt-2021-1920x1080_947678-mm-90.webp',
                    }}><Text style={globalStyles.TextMenuImg}>New Audi E-Tron GT</Text>
                    </ImageBackground>  
                </TouchableOpacity>

                <TouchableOpacity onPress={goR8}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                    uri: 'https://wallpaperaccess.com/full/385869.jpg',
                    }}><Text style={globalStyles.TextMenuImgR8}>Audi R8</Text>
                    </ImageBackground>  
                </TouchableOpacity>
    
                <TouchableOpacity onPress={goSQ5}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                    uri: 'https://www.largus.fr/images/images/audi-sq5-tdi-2021-2.jpg',
                    }}><Text style={globalStyles.TextMenuImgSQ5}>Audi SQ5</Text>
                    </ImageBackground>  
                </TouchableOpacity>    

                <TouchableOpacity onPress={goAllModels}>
                    <ImageBackground
                    style={globalStyles.logoImgMenu}
                    source={{
                        uri : 'https://herbchambers.s3.us-east-1.amazonaws.com/lp/audi/2020/near-me/header.jpg',
                    }}><Text style={globalStyles.TextMenuImgAllModels}>All models</Text>
                    </ImageBackground>  
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}