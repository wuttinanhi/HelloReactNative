import React from 'react';
import {Alert, Button, SafeAreaView, Text, View} from 'react-native';
import {globalStyles} from '../styles/global';

export const AboutScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <View>
        <View style={globalStyles.spacer}>
          <Text>About Screen</Text>
        </View>

        <View style={globalStyles.spacer}>
          <Button
            title="Alert"
            onPress={() => {
              Alert.alert('Test');
            }}
          />
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
