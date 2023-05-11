/* List movie genres using Flat list */

import React from 'react';
import {FlatList} from 'react-native';
import {cards} from '../../../utils/Constants';
import HomeListCard from './HomeListCard';

const HomeListView = ({navigation}) => {
  return (
    <FlatList
      scrollEventThrottle={16}
      bounces={false}
      data={cards}
      renderItem={({item}) => (
        <HomeListCard item={item} navigation={navigation} />
      )}
      keyExtractor={item => item.index}
    />
  );
};

export default HomeListView;
