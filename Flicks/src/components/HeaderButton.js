//Custom header button for navigation header

import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeColor} from '../utils/Theme';

export const HeaderButton = ({
  title,
  onPress,
  navigation,
  iconImage,
  height,
  width,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={[styles.iconStyle, {height: height, width: width}]}
          source={iconImage}
        />
        <Text style={styles.titleTextStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    objectFit: 'fill',
  },
  titleTextStyle: {
    fontSize: 14,
    color: ThemeColor.white,
    marginLeft: 10,
  },
});
