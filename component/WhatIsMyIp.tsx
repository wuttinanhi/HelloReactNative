import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

export const WhatIsMyIp = () => {
  const [myIp, setMyIp] = useState(null);

  useEffect(() => {
    fetch('https://httpbin.org/ip')
      .then(res => res.json())
      .then(data => setMyIp(data.origin));
  }, []);

  return <Text>Your Ip Address is: {myIp}</Text>;
};
