import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Greeter} from '../components/Greeter';

import {WhatIsMyIp} from '../components/WhatIsMyIp';
import {globalStyles} from '../styles/global';

export const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.sectionTitle}>Test Text</Text>

        <View style={globalStyles.spacer}>
          <Greeter />
        </View>

        <View style={globalStyles.spacer}>
          <Button title="Test Button" />
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
