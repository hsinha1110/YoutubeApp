import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigation from '@/navigations/MainNavigation';
import { navigationRef } from '@/utils/navigationUtils';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
