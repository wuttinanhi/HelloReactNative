import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {Button, Card, Paragraph, Text, TextInput} from 'react-native-paper';

export const Todo = () => {
  const [todo, setTodo] = React.useState<string[]>([]);
  const [text, setText] = React.useState('');

  async function loadTodo() {
    try {
      const storageValue = await AsyncStorage.getItem('todo');
      if (storageValue) {
        const parsed = JSON.parse(storageValue);
        setTodo(parsed);
      }
    } catch (error) {}
  }

  async function saveTodo(value: string[]) {
    await AsyncStorage.setItem('todo', JSON.stringify(value));
  }

  useEffect(() => {
    loadTodo();
  }, []);

  async function addTodo(name: string) {
    const newTodo = [...todo, name];
    setTodo(newTodo);
    saveTodo(newTodo);
  }

  async function removeTodo(index: number) {
    ToastAndroid.show(`Removing ${index}`, ToastAndroid.SHORT);
    let newTodo = [...todo];
    newTodo = newTodo.filter((__, i) => i !== index);
    setTodo(newTodo);
    saveTodo(newTodo);
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
        <View key={i}>
          <Card style={styles.cardStyle}>
            <Card.Title title={v} />
            <Card.Content>
              <Paragraph>
                #{i} {v}
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => removeTodo(i)}>Remove</Button>
            </Card.Actions>
          </Card>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  largeText: {fontSize: 20},
  cardStyle: {
    margin: 10,
    padding: 0,
    borderWidth: 2,
    borderColor: 'gray',
  },
});
