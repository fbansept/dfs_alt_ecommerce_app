import {ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CardProduct from '../components/CardProduct';
import {useEffect} from 'react';

const ProductList = ({navigation}) => {
  const [listeProduit, setListeProduit] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(json => json.json())
      .then(resultat => {
        setListeProduit(resultat.products);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  }, []);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {listeProduit.map(produit => (
        <TouchableOpacity
          key={produit.id}
          onPress={() => navigation.navigate('Product details', {produit})}>
          <CardProduct
            title={produit.title}
            thumbnail={produit.thumbnail}
            description={produit.description}
            rating={produit.rating}
            price={produit.price}
            discountPercentage={produit.discountPercentage}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProductList;
