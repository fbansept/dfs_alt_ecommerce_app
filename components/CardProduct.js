import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const CardProduct = ({title}) => {
  return (
    <View style={[styles.card, styles.shadow]}>
      <View style={styles.imageCard}></View>
      <View style={styles.contentCard}>
        <Text style={styles.titleCard}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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