/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from './tailwind.json';

const MyComponent = () => {
  const tailwind = useTailwind();

  return (
    <Text style={tailwind('mt-10 text-blue-600 text-4xl h-full')}>
      Hello world
    </Text>
  );
};

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <MyComponent />
    </TailwindProvider>
  );
};

export default App;
