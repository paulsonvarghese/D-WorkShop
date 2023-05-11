/* 
    Custom Image view loader 
      Loading images from local assets
      This component is used to display movie poster in home screen 
      and also in list screen

*/
import React from 'react';
import {Image, PixelRatio, StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../utils/Constants';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    objectFit: 'fill',
    height: PixelRatio.getPixelSizeForLayoutSize(deviceHeight / 12),
  },
});

export const POSTERS = {
  POSTER_1: 'poster1.jpg',
  POSTER_2: 'poster2.jpg',
  POSTER_3: 'poster3.jpg',
  POSTER_4: 'poster4.jpg',
  POSTER_5: 'poster5.jpg',
  POSTER_6: 'poster6.jpg',
  POSTER_7: 'poster7.jpg',
  POSTER_8: 'poster8.jpg',
  POSTER_9: 'poster9.jpg',
};

export const PosterCard = ({type}) => {
  let source;
  switch (type) {
    case POSTERS.POSTER_1:
      source = require('../../assets/images/poster1.jpg');
      break;
    case POSTERS.POSTER_2:
      source = require('../../assets/images/poster2.jpg');
      break;
    case POSTERS.POSTER_3:
      source = require('../../assets/images/poster3.jpg');
      break;
    case POSTERS.POSTER_4:
      source = require('../../assets/images/poster4.jpg');
      break;
    case POSTERS.POSTER_5:
      source = require('../../assets/images/poster5.jpg');
      break;
    case POSTERS.POSTER_6:
      source = require('../../assets/images/poster6.jpg');
      break;
    case POSTERS.POSTER_7:
      source = require('../../assets/images/poster7.jpg');
      break;
    case POSTERS.POSTER_8:
      source = require('../../assets/images/poster8.jpg');
      break;
    case POSTERS.POSTER_9:
      source = require('../../assets/images/poster9.jpg');
      break;
    default:
      source = require('../../assets/images/placeholder_for_missing_posters.png');

      break;
  }
  return <Image style={styles.card} {...{source}} />;
};
