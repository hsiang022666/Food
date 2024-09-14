import React from "react";
import {Text, TouchableOpacity, Image} from "react-native";
import styles from "./styles";

const Button = ({ onPress, childred }) => {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{childred}</Text>
            <Image style={styles.icon} source={require('../../assets/arrowRight.png')}/>
        </TouchableOpacity>
    )
}

export default React.memo(Button);