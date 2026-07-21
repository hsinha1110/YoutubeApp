import React from 'react';
import * as screens from '@/screens';
import Routes from '@/constants/Routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigations/types';

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
      <Stack.Screen
        name={Routes.ADD_DETAILS_SCREEN}
        component={screens.AddDetailsScreen}
      />
      <Stack.Screen
        name={Routes.VIDEO_PLAYER_SCREEN}
        component={screens.VideoPlayerScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
