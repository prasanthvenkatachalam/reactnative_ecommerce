import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
import DeliveryAddress from '../screens/DeliveryAddress';
import OrderConfirmation from '../screens/OrderConfirmation';

const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen
        name="DeliveryAddress"
        component={DeliveryAddress}
        options={{headerShown: true}}
      />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
    </Stack.Navigator>
  );
};

export default CartStack;
