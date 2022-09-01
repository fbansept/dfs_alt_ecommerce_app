import {Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';

const Profil = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal animationType="slide" visible={modalVisible} transparent={false}>
        <View style={styles.modal}>
          <CustomButton
            style={{marginBottom: 10}}
            onPress={() => setModalVisible(false)}>
            Selectionner une photo de votre appareil
          </CustomButton>
          <CustomButton
            style={{marginBottom: 10}}
            onPress={() => setModalVisible(false)}>
            Prendre une photo
          </CustomButton>
          <CustomButton onPress={() => setModalVisible(false)}>
            Annuler
          </CustomButton>
        </View>
      </Modal>
      <CustomButton onPress={() => setModalVisible(true)}>
        Ajouter une photo de profil
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profil;
