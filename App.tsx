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
import {Provider as PaperProvider} from 'react-native-paper';
import {TailwindProvider} from 'tailwind-rn';
import Main from './Main';
import utilities from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </TailwindProvider>
  );
};

export default App;
