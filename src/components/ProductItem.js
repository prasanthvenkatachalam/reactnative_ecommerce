import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import RatingStar from '../Assets/Svgs/rating_star.svg';
import {PRIMARYCOLOR, SECONDARYCOLOR, WHITECOLOR} from '../Utilities/Colors';
import {windowWidth} from '../Utilities/Constants';
import {getAmountFormat, sliceText} from '../Utilities/Methods';
import {addOrRemoveCartItem} from '../reduxStore/ecommSlice';

const ProductItem = ({item, dispatch, navigation}) => {
  const handleAddtoCart = () => {
    if (item.isCart) {
      navigation.navigate('CartStack');
    } else {
      dispatch(addOrRemoveCartItem(item.id));
    }
  };

  return (
    <TouchableOpacity
      style={styles.featuredListItem}
      onPress={() => {
        navigation.navigate('ViewProduct', {
          productId: item.id,
        });
      }}>
      <Image
        source={{uri: item.image}}
        key={item.image}
        resizeMode="contain"
        style={styles.featuredProductImage}
      />

      <Text style={styles.featuredItemName}>{sliceText(item.title, 30)}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingNumber}>{item.rating.rate}</Text>
          <RatingStar />
        </View>
        <Text style={{color: '#00000063'}}>({item.rating.count}) ratings</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{color: '#000000'}}>{getAmountFormat(item.price)})</Text>
      </View>

      <TouchableOpacity style={styles.addToBagButton} onPress={handleAddtoCart}>
        <Text style={{color: WHITECOLOR}}>
          {item.isCart ? 'GO TO CART' : 'ADD TO CART'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  featuredListItem: {
    width: (windowWidth - 30) / 2,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginVertical: 10,
  },
  featuredProductImage: {
    width: '100%',
    height: (windowWidth - 30) / 2,
    borderRadius: 10,
  },
  featuredItemName: {
    color: SECONDARYCOLOR,
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  ratingBox: {
    backgroundColor: '#00B512',
    borderRadius: 5,
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    color: WHITECOLOR,
  },
  lastPrice: {
    color: '#9F9F9F',
    marginHorizontal: 10,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#9F9F9F',
  },
  addToBagButton: {
    backgroundColor: PRIMARYCOLOR,
    // backgroundColor: PlatformColor('@android:color/primary'),
    borderRadius: 23,
    paddingVertical: 7,
    alignItems: 'center',
  },
  addWishListButton: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: 5,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: WHITECOLOR,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
