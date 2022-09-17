import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';

export const Greeter = () => {
  const [value, setValue] = useState('');

  const greet = () => {
    Alert.alert('Greeter', `Hello! ${value}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Type Something..."
        onChangeText={text => setValue(text)}
      />
      <Button title="Greet" onPress={greet} />
    </View>
  );
};
