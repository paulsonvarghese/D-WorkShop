/*
   Navigation Component
 
*/

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../screens/home/Homescreen';
import ListScreen from '../screens/list/ListScreen';
import {ThemeColor} from '../utils/Theme';

const Stack = createNativeStackNavigator();

const StackScreenComponents = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: null,
      headerStyle: {
        backgroundColor: ThemeColor.black,
        borderBottomWidth: 0,
        borderBottomColor: 'red',
        elevation: 0,
        shadowOpacity: 0,
        height: 0,
        headerShadowVisible: false,
      },
      headerShadowVisible: false,

      elevation: 0,
      shadowOpacity: 0,
      headerTintColor: ThemeColor.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="List" component={ListScreen} />
  </Stack.Navigator>
);

function NavigationComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeStack"
          component={StackScreenComponents}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponent;
