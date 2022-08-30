import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const CardProduct = ({title, thumbnail}) => {
  return (
    <View style={[styles.card, styles.shadow]}>
      <View style={styles.imageCard}>
        <ImageBackground style={styles.image} source={{uri: thumbnail}} />
      </View>
      <View style={styles.contentCard}>
        <Text style={styles.titleCard}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  titleCard: {
    fontSize: 16,
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
