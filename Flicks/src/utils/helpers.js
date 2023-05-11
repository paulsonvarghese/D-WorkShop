/* Helper Components that we can use through out our application*/

import React from 'react';
import {View, ActivityIndicator, PixelRatio} from 'react-native';
import {ThemeColor} from './Theme';

// dp(123) converts 123px (px as in your mockup design) to dp.
export const convertTo_dp = px => {
  return px / PixelRatio.get();
};

// sp(54) converts 54px (px as in your mockup design) to sp
export const convertTo_sp = px => {
  return px / (PixelRatio.getFontScale() * PixelRatio.get());
};

//Custom loading component
export const Loading = () => (
  <View>
    <ActivityIndicator color={ThemeColor.lightShade} size="large" />
  </View>
);

//This function can take keyvalue pairs and covert to query params
export function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
    );
  }
  return keyValuePairs.join('&');
}
