import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


const AttractionCard = ({ title, subtitle, imageSrc, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
            <Image style={styles.image} source={{ uri: imageSrc }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../../assets/locationv2.png')}  />
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>   
        </TouchableOpacity>

    );
};

export default React.memo(AttractionCard);  