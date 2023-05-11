/* 
  Home list card 
    Render item for home list view
    showing movie genres with images 
    
*/

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PosterCard} from '../../../components/PosterCard';
import * as Animatable from 'react-native-animatable';
import {ThemeColor, ThemeFonts} from '../../../utils/Theme';
import {convertTo_dp, convertTo_sp} from '../../../utils/helpers';
import {deviceWidth} from '../../../utils/Constants';
import LinearGradient from 'react-native-linear-gradient';

const HomeListCard = ({item, index, navigation}) => {
  return (
    <Animatable.View animation="fadeInUp" duration={1000} delay={index * 90}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('List', {
            listTitle: item?.type,
          });
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            ThemeColor.black,
            ThemeColor.secondary,
            ThemeColor.alternate,
            ThemeColor.secondary,
            ThemeColor.primary,
          ]}
          style={styles.linearGradient}>
          <View style={styles.mainCardView}>
            <View style={styles.imageBackgroundView}>
              <PosterCard type={item.poster_image} />
            </View>
            <View style={styles.titleTextViewStyle}>
              <Text numberOfLines={2} style={styles.titleTextStyle}>
                {item.type}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  mainCardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: ThemeColor.transparent,
    borderRadius: 5,
  },
  imageBackgroundView: {
    opacity: 0.9,
    borderRadius: 5,
    width: '50%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextViewStyle: {
    position: 'absolute',
    top: 0,

    right: 20,
    bottom: 0,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  titleTextStyle: {
    fontSize: convertTo_sp(64),
    fontWeight: 700,
    color: ThemeColor.white,
    fontFamily: ThemeFonts.alternate,
    maxWidth: deviceWidth / 2.5,
  },
  linearGradient: {
    flex: 1,

    borderRadius: 5,
    marginTop: 10,
    marginLeft: convertTo_dp(30),
    marginRight: convertTo_dp(30),
  },
});

export default HomeListCard;
