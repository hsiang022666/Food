import React from "react";
import {ImageBackground, Text, View, Image,StyleSheet} from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";

const Splash = ({ navigation }) => {
    return (
            <ImageBackground style={styles.background} source={require('../../../assets/splash.jpg')}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                    <Text style={styles.title}>今天吃什麼 ?</Text>    
                </View> 


                <View style={styles.container}>
                    <Text style={styles.bigTitle}>新北．台北</Text>  
                    <Text style={styles.subtitle}>美食餐廳推薦</Text>  


                    <Button onPress={() => navigation.navigate('Home')}>開始</Button>
                </View>   
            </ImageBackground>
    )
}


export default React.memo(Splash);