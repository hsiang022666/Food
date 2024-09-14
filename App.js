import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';
import Comment from './src/screens/Comment';
import Map from './src/screens/Map';

const Stack = createStackNavigator();

const App = () => {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#F5F5F5',
    },
  };


  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash}  options={{ headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AttractionDetails' component={AttractionDetails}   />
        <Stack.Screen  name='Gallery' component={Gallery} />
        <Stack.Screen name='Comment' component={Comment}/>
        <Stack.Screen name='Map' component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};



export default App;
