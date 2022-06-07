import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {BLACKCOLOR, PRIMARYCOLOR} from '../Utilities/Colors';
import {FONT_SIZE} from '../Utilities/Constants';
import {CommonActions} from '@react-navigation/native';
import {clearCart} from '../reduxStore/ecommSlice';
import {useDispatch} from 'react-redux';
const OrderConfirmation = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.orderText, {color: PRIMARYCOLOR}]}>
        Your Order is Confirmated
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'RootTab'}],
            }),
          );
        }}>
        <Text style={styles.orderText}> Go to Products</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    color: BLACKCOLOR,
    fontSize: FONT_SIZE.medium,
  },
  btn: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: PRIMARYCOLOR,
  },
});
