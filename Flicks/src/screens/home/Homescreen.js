/* Home screen list movie genres  */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeColor} from '../../utils/Theme';
import HomeListView from './components/HomeListView';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomeListView navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor.black,
  },
});

export default HomeScreen;
