import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Todo} from '../components/Todo';

export const TodoScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Todo />
      </View>
    </SafeAreaView>
  );
};
