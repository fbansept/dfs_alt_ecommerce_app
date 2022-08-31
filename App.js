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
import CardProduct from './components/CardProduct';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [listeProduit, setListeProduit] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(json => json.json())
      .then(resultat => {
        setListeProduit(resultat.products);
      });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {listeProduit.map(produit => (
          <CardProduct
            key={produit.id}
            title={produit.title}
            thumbnail={produit.thumbnail}
            description={produit.description}
            rating={produit.rating}
            price={produit.price}
            discountPercentage={produit.discountPercentage}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  equivalentClasse: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
