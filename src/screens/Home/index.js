import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View , FlatList} from 'react-native';
import Categories from '../../../components/Categories';
import Title from '../../../components/Title';
import styles from './styles';
import AttractionCard from '../../../components/AttractionCard';
import jsonData from '../../data/attractions';
import categories from '../../data/categories.json';
import { useNavigation } from '@react-navigation/native';

const ALL ='全部';


const Home = () => {
    const navigation = useNavigation()
    const [selectedCategory, setSelectedCategory] = useState(ALL);
    const [data, setData] = useState([]);

    

    useEffect (() => {
        setData(jsonData);
    }, []);

    useEffect(() => {
        if (selectedCategory === ALL) {
            console.log(jsonData);
            setData(jsonData);
        } else {
            const filteredData = jsonData?.filter(item => item?.categories?.includes(selectedCategory));
            console.log(filteredData);

            setData(filteredData);
        }
    }, [selectedCategory]);

    return (
        <SafeAreaView style={styles.container}>  
                <FlatList 
                    data={data}
                    numColumns={2}
                    style={{ flexGrow: 1 }}
                    ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
                    ListHeaderComponent={(
                        <>
                            <View style={{ margin: 32}}>
                                <Title text=' 新北台北 ' style={{fontWeight: 'normal'}} />
                                <Title text=' 吃什麼? 跟我憶起走'/>
                                
                                <Title text='美食地點' style={styles.subtitle} />
                            </View>

                            <Categories
                                selectedCategory={selectedCategory} 
                                onCategoryPress={setSelectedCategory} 
                                categories={[ALL, ...categories]}  
                            />
                        </>
                        
                    )}
                    keyExtractor={ item => String(item?.id)}
                    renderItem={({ item, index }) => 
                        <AttractionCard 
                            key={item.id}
                            style={index % 2 === 0 ? { marginRight: 12, marginLeft: 32 }: { marginRight: 32 } }
                            onPress={() => navigation.navigate('AttractionDetails', { item })}
                            title={item.name}
                            subtitle={item.city}
                            imageSrc={item.images?.length ? item.images[0] : null}
                        />   
                    }
                    //等於上面的寫法
                    /*renderItem={({ item, index }) => {
                        return (
                            <AttractionCard 
                                key={item.id}
                                style={index % 2 === 0 ? { marginRight: 12, marginLeft: 32 }: { marginRight: 32 } }
                                title={item.name}
                                subtitle={item.city}
                                imageSrc={item.images? item.images : null}
                            />
                        )
                    }}*/
                />
        </SafeAreaView>
        
    );
};


export default React.memo(Home);