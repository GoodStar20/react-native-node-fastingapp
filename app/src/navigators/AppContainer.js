import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
