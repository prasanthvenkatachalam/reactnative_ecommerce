import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Delete from '../Assets/Svgs/delete.svg';
import AddIcon from '../Assets/Svgs/add.svg';
import MinusIcon from '../Assets/Svgs/minus.svg';
import {PRIMARYCOLOR, SECONDARYCOLOR, WHITECOLOR} from '../Utilities/Colors';
import {getAmountFormat, sliceText} from '../Utilities/Methods';
import {
  addOrRemoveCartItem,
  increaseDecreaseCartItem,
} from '../reduxStore/ecommSlice';
import {FONT_SIZE} from '../Utilities/Constants';

const CartItem = ({item, dispatch}) => {
  const onPressDelete = () => {
    dispatch(addOrRemoveCartItem(item.id));
  };

  const onPressIncreaseDescrease = isIncrease => {
    dispatch(increaseDecreaseCartItem({id: item.id, isIncrease}));
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.cartImageContainer}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: WHITECOLOR,
            borderRadius: 7,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <Image
            source={{uri: item.image}}
            style={styles.cartItemImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.cartItemDetailesContainer}>
        <Text style={styles.cartItemName}>{sliceText(item.title, 45)}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.cartItemTotalPrice}>
            {getAmountFormat(item.price)}
          </Text>
        </View>

        <View style={styles.countINCDECContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 80,
            }}>
            <TouchableOpacity
              onPress={() => {
                onPressIncreaseDescrease(false);
              }}>
              <MinusIcon fill={PRIMARYCOLOR} fillSecondary={SECONDARYCOLOR} />
            </TouchableOpacity>
            <Text style={styles.count}>{item.cart_quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                onPressIncreaseDescrease(true);
              }}>
              <AddIcon fill={PRIMARYCOLOR} fillSecondary={SECONDARYCOLOR} />
            </TouchableOpacity>
          </View>
          <Text style={styles.totalPriceText}>
            {getAmountFormat(item.totalPrice)}
          </Text>
        </View>
      </View>

      <View style={styles.deleteIconContainer}>
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={onPressDelete}>
          <Delete fillSecondary={SECONDARYCOLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  cartImageContainer: {
    height: 80,
    width: '20%',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  cartItemDetailesContainer: {
    width: '70%',
    justifyContent: 'center',
  },

  deleteIconContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemName: {
    fontSize: FONT_SIZE.small,
    color: SECONDARYCOLOR,
  },
  cartItemTotalPrice: {
    fontSize: FONT_SIZE.small,

    color: PRIMARYCOLOR,
    marginVertical: 7,
  },

  countINCDECContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  count: {
    color: SECONDARYCOLOR,
    fontSize: FONT_SIZE.medium,
    marginHorizontal: 10,
  },

  totalPriceText: {
    color: PRIMARYCOLOR,
    fontSize: FONT_SIZE.medium,
    marginHorizontal: 10,
  },
  cartItemImage: {
    height: '100%',
    width: '100%',
    padding: 5,
    borderRadius: 7,
  },
  textInput: {
    justifyContent: 'flex-start',
    borderRadius: 8,
    flexDirection: 'row',
    borderWidth: 1,
    width: '50%',
    height: 40,
    borderColor: '#E8EBEB',
    paddingHorizontal: 10,
    marginVertical: 6,
    alignSelf: 'flex-end',
  },
  textInputText: {
    width: '90%',
    height: '100%',
    fontSize: FONT_SIZE.small,
    color: '#000',
  },
  rupeeSymbolText: {
    textAlignVertical: 'center',
    fontSize: FONT_SIZE.small,
    color: '#000',
  },
  rupeeSymbolContainer: {
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
