import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import CardProduct from '../components/CardProduct';
import {useEffect} from 'react';

const ProducList = () => {
  const [listeProduit, setListeProduit] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(json => json.json())
      .then(resultat => {
        setListeProduit(resultat.products);
      });
  }, []);

  return (
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
  );
};

export default ProducList;
