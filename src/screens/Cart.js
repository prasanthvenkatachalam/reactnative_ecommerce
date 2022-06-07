import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import EmptyStore from '../components/EmptyStore';
import CartItem from '../components/CartItem';

import {FONT_SIZE} from '../Utilities/Constants';
import {
  BUTTONCOLOR,
  PRIMARYCOLOR,
  SECONDARYCOLOR,
  WHITECOLOR,
} from '../Utilities/Colors';
import {getAmountFormat} from '../Utilities/Methods';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const {cartList} = useSelector(state => state.eCommStore);
  const [isRefresh, setisRefresh] = useState(false);
  const getTotalPrice = () => {
    let totalAmount = 0;
    cartList.map(item => {
      totalAmount += item.totalPrice;
    });
    return totalAmount;
  };

  const onRefresh = () => {
    setisRefresh(true);
    setTimeout(() => {
      setisRefresh(false);
    }, 3000);
  };
  const AmountContainer = () => {
    return (
      <View style={styles.cartAmountContainer}>
        <Text style={styles.priceText}>
          Price:
          <Text
            style={[styles.priceText, {marginLeft: 8, color: SECONDARYCOLOR}]}>
            {' ' + getAmountFormat(getTotalPrice())}
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            navigation.navigate('DeliveryAddress');
          }}>
          <Text style={styles.buttonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.headerText}>Cart</Text>
      <FlatList
        data={cartList}
        renderItem={({item, index}) => {
          return <CartItem item={item} dispatch={dispatch} onPres />;
        }}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyStore}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />
        }
      />
      {cartList.length > 0 && <AmountContainer />}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerText: {
    fontSize: FONT_SIZE.large,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  cartAmountContainer: {
    backgroundColor: BUTTONCOLOR,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: FONT_SIZE.medium,
    color: '#2B3D54',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: FONT_SIZE.small,
    color: WHITECOLOR,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: PRIMARYCOLOR,
    paddingVertical: 12,
    // paddingHorizontal: 28,
    marginLeft: 20,
    borderRadius: 30,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
});
