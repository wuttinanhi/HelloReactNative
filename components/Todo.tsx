import React from 'react';
import {ToastAndroid} from 'react-native';
import {Button} from 'react-native-paper';

export const Todo = () => {
  return (
    <Button
      icon="camera"
      mode="contained"
      onPress={() => {
        console.log('Pressed');
        ToastAndroid.show('Test Button!', ToastAndroid.SHORT);
      }}>
      Press me
    </Button>
  );
};
