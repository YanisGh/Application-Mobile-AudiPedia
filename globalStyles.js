import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    logoContainer:{
      flexDirection: "row",
      marginTop: 40,
    },
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center', 
    },
    containerInfoCar: {
      backgroundColor: '#1a1a1a',
      color: 'white',
      width: 400,
      textAlign: "left",
    },
    containerMenu :{
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      height: 10,
    },
    menuHome :{
      alignItems: "center",
      height: 650,
      width: 500,
      backgroundColor: 'black',
      marginTop: 20
    },
    TextMenu :{
      textAlign: "center",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
      fontFamily: "audi-regular-extended"
    },
    TextMenuImg:{
      fontFamily: "audi-bold-extended",
      textAlign: "right",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
      marginRight: 25,
    },
    TextMenuCar:{
      fontFamily: "audi-regular-extended",
      textAlign: "left",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
      marginLeft: 10,
    },
    TextMenuCarBold:{
      fontFamily: "audi-bold-extended",
      textAlign: "left",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 15,
      marginLeft: 6,
    },
    TextMenuImgR8 :{
      fontFamily: "audi-bold-extended",
      textAlign: "left",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
      marginLeft: 40,
    },
    TextMenuImgSQ5 :{
      fontFamily: "audi-bold-extended",
      textAlign: "right",
      marginTop: 15,
      marginBottom: 5,
      marginRight: 60,
      color: "black",
      fontSize: 12,
    },
    TextMenuImgAllModels :{
      fontFamily: "audi-bold-extended",
      textAlign: "center",
      marginTop: 105,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
    },
    TextMenuImgFav :{
      fontFamily: "audi-bold-extended",
      textAlign: "center",
      marginTop: 10,
      marginBottom: 5,
      color: "white",
      fontSize: 12,
    },
    logoImgMenu:{
      width: 400,
      height: 140,
      marginBottom: 10,
    },
    logoPlusMenu:{
      tintColor: 'white',
      width: 100,
      height: 100,
    },
    containerForm:{
      width: 300,
    },
    input:{
      fontFamily: "audi-regular",
      backgroundColor:'white',
      color: 'black',
      height: 40,
      marginRight: 10,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    Text:{
      fontFamily: "audi-regular",
      color: 'white',
      marginTop: 5,
    },
    Test:{
      fontFamily: "audi-regular",
      color: 'white',
      textAlign: 'center',
      fontSize: 13,
    },
    TestUnderline:{
      fontFamily: "audi-bold",
      color: 'white',
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    Button:{
      fontFamily: "audi-bold",
      borderRadius: 6,
      alignContent: "center",
      backgroundColor: '#1a1a1a',
      marginTop: 40,
      marginBottom: 20,
      padding: 20,
      width: 150

    },
    logoImg:{
      width: 100,
      height: 35,
      resizeMode: 'center',
    },
    logoLog: {
      width: 35,
      height: 35,
      tintColor: "white",
      textAlign: "right",
    }, 
    iconFacet:{
      width: 20, 
      height: 20,
      marginLeft: 6,
      marginTop: 5,
      tintColor: 'white'
    }
});