import {Dimensions, Platform} from 'react-native';

export const deviceWidth = Dimensions.get('screen').width;
export const deviceHeight = Dimensions.get('screen').height;
export const isDeviceOS = Platform.OS === 'ios';

export const searchImage = require('../../assets/images/search.png');
export const backImage = require('../../assets/images/Back.png');
export const DEMO_BASE_URL = 'https://demo3378008.mockable.io/flicks/api/';

// Custom list array for loading home screen list with movie types
export const cards = [
  {
    index: 1,
    type: 'Romantic Comedy',
    poster_image: 'poster1.jpg',
  },
  {
    index: 2,
    type: 'Action',
    poster_image: 'poster2.jpg',
  },
  {
    index: 3,
    type: 'Horror',
    poster_image: 'poster3.jpg',
  },
  {
    index: 4,
    type: 'Thriller',
    poster_image: 'poster4.jpg',
  },
  {
    index: 5,
    type: 'Drama',
    poster_image: 'poster5.jpg',
  },
  {
    index: 6,
    type: 'War',
    poster_image: 'poster6.jpg',
  },
];
