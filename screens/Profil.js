import {Alert, Linking, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {Camera} from 'react-native-vision-camera';

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
            onPress={async () => {
              let permission = await Camera.getCameraPermissionStatus();

              if (permission === 'authorized') {
                Alert.alert('TDODO affichage caméra');
              } else {
                permission = await Camera.requestCameraPermission();

                if (permission === 'denied') {
                  Linking.openSettings();
                }
              }
            }}>
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
