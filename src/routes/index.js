import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//service
import NavigationService from './navigationService';

//constants
import {ScreenName} from './screenName';
import ScreenPath from './screensPath';
import MyDrawer from './drawer';

//custom function
import {isNullorUndefined} from '../utils/utility';

export const RouteStack = initialRouteName => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer
      screenOptions={{gestureEnabled: true}}
      ref={NavigationService.navigationRef}>
      <Stack.Navigator
        initialRouteName={
          !isNullorUndefined(initialRouteName?.initialRouteName) &&
          initialRouteName?.initialRouteName
        }>
        {/* Auth */}
        <Stack.Screen
          name={ScreenName.signin}
          component={ScreenPath.Signin}
          options={{headerShown: false}}
        />

        {/* root */}
        <Stack.Screen
          name={ScreenName.dashBoard}
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
