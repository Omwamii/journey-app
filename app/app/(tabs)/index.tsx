import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react'
import { Redirect } from 'expo-router';

const index = () => {
  return (
    <Redirect href={'/entries'} />
  );
};

export default index;