//Custom Search bar

import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {ThemeColor} from '../utils/Theme';

export const SearchBar = ({
  navigation,
  title,
  fontSize,
  isSearch,
  callBack,
  cancel,
}) => {
  return (
    <View style={styles.headerBackgroundView}>
      <TextInput
        clearButtonMode="always"
        placeholderTextColor={ThemeColor.placeholderColor}
        placeholder={'Search Movies'}
        autoFocus={true}
        color={ThemeColor.dark}
        style={styles.searchBarStyle}
        onChangeText={text => callBack(text)}
      />
      <TouchableOpacity style={styles.leftArrowIcon} onPress={() => cancel()}>
        <Text style={styles.titleTextStyle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor.transparent,
  },
  headerBackgroundView: {
    backgroundColor: ThemeColor.transparent,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
  },
  leftArrowIcon: {
    height: 40,

    justifyContent: 'center',
    marginLeft: 5,
  },
  titleTextStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: ThemeColor.white,
    marginBottom: 0,

    marginLeft: 10,
  },
  searchBarStyle: {
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: ThemeColor.lighter,
    borderWidth: 0,
    borderRadius: 5,
    borderColor: ThemeColor.lighter,
    height: 40,
    fontSize: 16,
    fontWeight: '500',
    width: '85%',
    padding: 5,
    flexDirection: 'row',
  },
});
