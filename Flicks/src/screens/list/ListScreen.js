/* Listing all the movies by its type */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {HeaderButton} from '../../components/HeaderButton';
import {SearchBar} from '../../components/SearchBar';
import {backImage, searchImage} from '../../utils/Constants';
import {ThemeColor} from '../../utils/Theme';
import ListView from './components/ListView';

const ListScreen = ({navigation, route}) => {
  const {listTitle} = route.params;
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [searchText, setSearchText] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <HeaderButton
          height={20}
          width={20}
          iconImage={searchImage}
          title={''}
          onPress={() => {
            setSearchEnabled(true);
          }}
        />
      ),
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => (
        <HeaderButton
          height={20}
          width={20}
          iconImage={backImage}
          title={listTitle}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  //search bar callback method for search text

  function searchHeaderCallback(text) {
    setSearchText(text);
  }
  //search bar callback method for cancel search
  function cancelSearchBar() {
    setSearchText('');
    setSearchEnabled(false);
  }

  return (
    <View style={styles.container}>
      {searchEnabled && (
        <SearchBar callBack={searchHeaderCallback} cancel={cancelSearchBar} />
      )}
      <ListView
        navigation={navigation}
        isSearch={searchEnabled}
        searchText={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor.black,
    justifyContent: 'center',
  },
});

export default ListScreen;
