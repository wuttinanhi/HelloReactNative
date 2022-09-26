import React from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

export const Todo = () => {
  const [todo, setTodo] = React.useState<string[]>([]);
  const [text, setText] = React.useState('');

  function addTodo(name: string) {
    setTodo([...todo, name]);
  }

  return (
    <View>
      <Text style={styles.largeText}>รายการทู่ดูลิสต์:</Text>

      <TextInput
        label="Type todo name..."
        value={text}
        onChangeText={value => setText(value)}
      />

      <Button
        mode="contained"
        onPress={() => {
          addTodo(text);
          ToastAndroid.show('Todo Added', ToastAndroid.SHORT);
        }}>
        Press me
      </Button>

      {todo.map((v, i) => (
        <Text key={i}>{v}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  largeText: {fontSize: 20},
});
