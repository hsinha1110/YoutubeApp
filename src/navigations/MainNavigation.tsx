import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as screens from '@/screens';
import Routes from '@/constants/Routes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.HOME_SCREEN} component={screens.HomeScreen} />

      <Stack.Screen name={Routes.ADD_SCREEN} component={screens.AddScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
