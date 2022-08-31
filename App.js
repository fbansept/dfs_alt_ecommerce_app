import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProductList from './screens/ProductList';
import Cart from './screens/Cart';
import Profil from './screens/Profil';
import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const Tab = createMaterialBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={ProductList} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  equivalentClasse: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
