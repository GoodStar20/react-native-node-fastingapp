import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';

import { Routes } from 'Navigators/routes';
import UserListScene from 'Scenes/UserList';
import UserEditScene from 'Scenes/UserEdit';

const Stack = createStackNavigator();

const options = {
  headerShown: false
};

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName={Routes.Main} screenOptions={options}>
    <Stack.Screen
      name={Routes.Main}
      component={UserListScene}
      options={{
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
      }}
    />
    <Stack.Screen
      name={Routes.UserEdit}
      component={UserEditScene}
      options={{
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
      }}
    />
  </Stack.Navigator>
);
