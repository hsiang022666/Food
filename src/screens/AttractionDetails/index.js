import React from 'react';
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View, Button, ScrollView } from 'react-native';
import styles from './styles';
import Title from '../../../components/Title';
import InfoCard from '../../../components/InfoCard';

const AttractionDetails = ({ navigation, route }) => {
   const { item } = route?.params  || {};
   const mainImage = item.images?.length ? item.images[0] : null;
   const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
   
   /*console.log('item :>>', item); */

   const onBack = () => {
        navigation.goBack();
   };

   const onGalleryNavigate = () => {
        navigation.navigate('Gallery', { images: item?.images });
    };


    return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <ImageBackground 
                    style={styles.mainImage} 
                    imageStyle={{ borderRadius: 10}} 
                    source={{uri:mainImage}}
              >
              <View style={styles.header}>
                <Pressable onPress={onBack} hitSlop={8}>
                    <Image style={styles.icon} source={require('../../../assets/back.png')} />
                </Pressable>
                <Pressable hitSlop={8}>
                    <Image style={styles.icon} source={require('../../../assets/share.png')} />
                </Pressable>
              </View>
              </ImageBackground>

              <View>
                <Pressable onPress={onGalleryNavigate} style={styles.footer}>
                    {slicedImages?.map((image) => (
                        <View key={image}>
                            <Image source={{ uri: image }} style={styles.miniImage} />
                        </View>
                    ))}
                </Pressable>
              </View>
              
              <View style={styles.headerContainer}>
                <View>
                    <Title style={styles.title} text={item?.city} />
                    <Text style={styles.city}>{item?.name}</Text>
                </View>
                <Title style={styles.price} text={item?.entry_price} />
            </View>

            <InfoCard text={item?.address} icon={require('../../../assets/location_circle.png')} />
            <InfoCard
                text={`營業時間 ${item?.opening_time} - ${item?.closing_time}`}
                icon={require('../../../assets/schedule.png')}
            />
            <InfoCard text={item?.service} icon={require('../../../assets/take-away.png')} />
            <InfoCard text={item?.introduction} icon={require('../../../assets/introduction.png')} />

            <View>
            <Text style={styles.mapText} onPress={() => navigation.navigate('Map', { item })}>美食餐廳地圖</Text>
            <Text style={styles.mapText} onPress={() => navigation.navigate('Comment')}>查看評論</Text>
            </View>
                
            
            
          </ScrollView>
        </SafeAreaView>  
      
    );
};


export default React.memo(AttractionDetails);