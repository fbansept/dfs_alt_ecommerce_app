import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ProductDetails from './ProductDetails';
import ProductList from './ProductList';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Products list" component={ProductList} />
        <Stack.Screen name="Product details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
