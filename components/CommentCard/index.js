import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';
import Rating from '../Rating';

const CommentCard = ({title, style, image, author, rating, time}) => {

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={{ flex:1 }}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>

                    <Rating rating={4.4} />
                </View>

                <Image style={styles.image} source={{ uri: image?.image }} />
                <Image style={styles.image} source={{ uri: image?.image2 }} />
            </View>
            

            <View style={styles.footer}>
                <View style={styles.row}>
                    <Image style={styles.authorImage} source={{ uri : author?. image }} />
                    <Text style={styles.footerText}>{author?.name}</Text>
                </View>
                
            </View>
       </View>

    );
};



export default React.memo(CommentCard);