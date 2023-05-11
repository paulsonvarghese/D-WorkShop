/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';

import {ThemeColor} from './src/utils/Theme';
import NavigationComponent from './src/navigation/NavigationComponent';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <NavigationComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor.primary,
  },

});

export default App;
