import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {addOrRemoveCartItem} from '../reduxStore/ecommSlice';

const ShowProducts = ({width, height, item, dispatch, navigation}) => {
  const handleAddtoCart = () => {
    if (item.isCart) {
      navigation.navigate('CartStack');
    } else {
      dispatch(addOrRemoveCartItem(item.id));
    }
  };
  return (
    <View style={styles.container}>
      <View style={{height: '30%'}}>
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          {item.title.slice(0, 5)}
        </Text>
      </View>
      <View style={{height: '40%'}}>
        <Image
          source={{uri: item.image}}
          style={{width: width / 2 - 20, height: '100%'}}
        />
      </View>
      <TouchableOpacity onPress={handleAddtoCart} style={styles.cartBtn}>
        <Text style={styles.cartText}>
          {item.isCart ? 'Go to Cart' : ' Add to Cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowProducts;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: width / 2 - 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B4E197',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  cartText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#B4E197',
    borderRadius: 5,
  },
  cartBtn: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
