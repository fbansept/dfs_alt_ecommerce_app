import {View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const Profil = () => {
  return (
    <View>
      <CustomButton onPress={() => console.log('test')}>
        Ajouter une photo de profil
      </CustomButton>
    </View>
  );
};

export default Profil;
