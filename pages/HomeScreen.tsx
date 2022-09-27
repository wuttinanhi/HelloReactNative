import React from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useTailwind} from 'tailwind-rn/dist';
import {Greeter} from '../components/Greeter';

import {WhatIsMyIp} from '../components/WhatIsMyIp';
import {globalStyles} from '../styles/global';

export const HomeScreen = ({navigation}: any) => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.sectionTitle}>Test Text</Text>

        <View style={globalStyles.spacer}>
          <Greeter />
        </View>

        <View>
          <Pressable
            style={tailwind('my-10 bg-orange-300 ')}
            onPress={() => Alert.alert('Test Pressable!')}>
            <View style={tailwind('flex flex-col items-center justify-center')}>
              <Avatar.Icon
                icon="car"
                size={80}
                style={tailwind('flex bg-transparent p-0 m-0 border-2')}
              />

              <Text style={tailwind('flex text-white text-2xl')}>
                Test Pressable
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={globalStyles.spacer}>
          <WhatIsMyIp />
        </View>

        <View style={globalStyles.spacer}>
          <Button
            title="Home"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />

          <Button
            title="About"
            onPress={() => {
              navigation.navigate('About');
            }}
          />

          <Button
            title="Todo"
            onPress={() => {
              navigation.navigate('Todo');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
