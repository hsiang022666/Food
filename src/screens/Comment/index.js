import React from 'react';
import  { useEffect, useState } from 'react';
import { SafeAreaView, Text, View , Button, FlatList} from 'react-native';
import styles from './styles';
import CommentCard from "../../../components/CommentCard";
import Title from "../../../components/Title";


const Comment = () => {

    const onBack = () => {
        navigation.goBack();
   };

   

    

    return (
        <SafeAreaView style={styles.container}>  
            <View>

                <Title style={styles.text} text="評論"/>


                <CommentCard
                    title="店家的服務貼心!"
                    image={{
                        image:'https://snoopyblog.com/wp-content/uploads/2022/06/%E8%BD%89%E8%A7%92%E5%86%B0-8.jpg',
                        image2:'https://snoopyblog.com/wp-content/uploads/2022/06/%E8%BD%89%E8%A7%92%E5%86%B0-10.jpg'
                        
                    }}
                    author={{
                        name: 'James Milner',
                        image:'https://www.looper.com/img/gallery/the-ending-of-avatar-finally-explained/intro-1669817126.jpg'
                    }}
                /> 

                <CommentCard
                    title="雙色冰有多種口味可選"
                    image={{
                        image:'https://img.onl/xjEAxV',
                        image2:'https://tenjo.tw/wp-content/uploads/20180522233553_86.jpg'
                        
                    }}
                    author={{
                        name: 'Mart Chen',
                        image:'https://i.pinimg.com/564x/ed/06/80/ed068032c3c4c222251c5fc3f242d6d0.jpg'
                    }}
                />  

                <CommentCard
                    title="「咖哩醬雞肉飯」不錯"
                    image={{
                        image:'https://snoopyblog.com/wp-content/uploads/2022/06/%E8%BD%89%E8%A7%92%E5%86%B0-22.jpg'
                        
                    }}
                    author={{
                        name: '林 in Wan',
                        image:'https://i.pinimg.com/564x/9b/b0/66/9bb066864b0d225c324551ee2c83125d.jpg'
                    }}
                />  

                <CommentCard
                    title="三色冰（泰奶、黑糖、煉乳）很搭"
                    image={{
                        image:'https://img.onl/lNKq7',
                        image2:'https://tenjo.tw/wp-content/uploads/20180522233423_9.jpg'
                        
                    }}
                    author={{
                        name: 'April Lee',
                        image:'https://i.pinimg.com/564x/0c/84/81/0c84818a315c2b0308b52e9e3216e2b1.jpg'
                    }}
                />  
                

            </View>

            <View style={styles.fixToText}>
                
                <Button
                    title="返回上一頁"
                    onPress={() => onBack()}
                />
            </View>
              
              
               
        </SafeAreaView>
        
    );
};


export default React.memo(Comment);