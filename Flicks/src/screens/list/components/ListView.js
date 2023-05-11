/*
 List movies implementation 
    Fetch movies and list from server
    Used react-native-super-grid library for grid view
    Implemented pagination 
    Implemented Search
*/

import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {PixelRatio, StyleSheet, Text, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {PosterCard} from '../../../components/PosterCard';
import {getRequestedData} from '../../../network/NetworkRequest';
import {
  convertTo_dp,
  convertTo_sp,
  Loading,
  objToQueryString,
} from '../../../utils/helpers';
import {ThemeColor, ThemeFonts} from '../../../utils/Theme';

const ListView = ({navigation, isSearch, searchText}) => {
  const [payloadOffset, setPayloadOffset] = useState(1);
  const [listItems, setListItems] = useState({
    movies: [],
    search: [],
    loading: true,
  });

  const queryString = objToQueryString({
    page: payloadOffset,
  });

  const requestUrl = `listmovies/paged?${queryString}`;

  // fetch function for listing movies from server
  async function getMoviesList() {
    const response = await getRequestedData('GET', requestUrl);

    if (response.status === 200) {
      const data = await response.json();
      let contentData = data?.page['content-items']?.content;

      if (contentData?.length === 0) {
        setPayloadOffset(0);
      } else {
        if (contentData?.length !== 0) {
          if (listItems.movies.length === 0) {
            setListItems({
              movies: contentData,
              search: contentData,
              loading: false,
            });
          } else {
            let tempList = [...listItems.movies, ...contentData];

            setListItems({
              movies: tempList,
              search: tempList,
              loading: false,
            });
          }
        }
      }
    } else {
      setPayloadOffset(0);
    }
  }

  useEffect(() => {
    if (payloadOffset !== 0) {
      getMoviesList();
    }
  }, [payloadOffset]);

  useEffect(() => {
    if (searchText.length !== 0) {
      var filteredList = listItems.movies.filter(item =>
        item?.name?.toLowerCase().includes(searchText.toLowerCase()),
      );

      setListItems({...listItems, search: filteredList});
    } else {
      setListItems({...listItems, search: listItems.movies});
    }
  }, [searchText]);

  // Render component for grid view showing each movies with image and title

  const MovieCard = useCallback(({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageBackgroundView}>
          <PosterCard type={item['poster-image']} />
        </View>
        <View style={styles.titleTextViewStyle}>
          <Text numberOfLines={2} style={styles.itemName}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      {listItems.loading ? (
        <Loading />
      ) : (
        <FlatGrid
          itemDimension={90}
          data={listItems.search}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={30 / PixelRatio.get()}
          renderItem={({item}) => <MovieCard item={item} />}
          keyExtractor={item => item?.id}
          initialNumToRender={10}
          onEndReachedThreshold={1.5}
          onEndReached={() => {
            if (payloadOffset !== 0 && !isSearch) {
              setPayloadOffset(payloadOffset + 1);
            }
          }}
          ListFooterComponent={payloadOffset !== 0 && !isSearch && <Loading />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColor.black,
    justifyContent: 'center',
  },
  gridView: {
    marginTop: convertTo_dp(36),
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
  },
  itemName: {
    fontSize: convertTo_sp(48),
    color: '#FFFFFF',
    fontWeight: '400',
    fontFamily: ThemeFonts.secondary,
  },
  imageBackgroundView: {
    flex: 1,
    overflow: 'hidden',
  },
  titleTextViewStyle: {
    height: convertTo_dp(114),
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});

export default ListView;
