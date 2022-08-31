import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Colors from '../Colors';
import {Rating} from 'react-native-elements';

const CardProduct = ({
  title,
  thumbnail,
  description,
  rating,
  price,
  discountPercentage,
}) => {
  const newPrice = Math.round(price - (price * discountPercentage) / 100);

  return (
    <View style={[styles.card, styles.shadow]}>
      <View style={styles.imageCard}>
        <ImageBackground style={styles.image} source={{uri: thumbnail}} />
      </View>
      <View style={styles.contentCard}>
        <Text style={styles.titleCard}>{title}</Text>
        <Rating startingValue={rating} readOnly imageSize={20} />
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={styles.descriptionCard}>
          {description}
        </Text>
        <View style={styles.row}>
          <Text style={styles.newPrice}>{newPrice}€</Text>
          <Text style={styles.oldPrice}>{price}€</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  newPrice: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  descriptionCard: {
    fontFamily: 'Comfortaa Medium',
    fontSize: 16,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  imageCard: {
    width: 150,
    backgroundColor: '#EEE',
  },
  contentCard: {
    padding: 5,
    flexShrink: 1,
  },
  titleCard: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
  },
  test: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    height: 200,
    borderRadius: 5,
    backgroundColor: Colors.white,
  },
  shadow: {
    elevation: 2,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default CardProduct;
