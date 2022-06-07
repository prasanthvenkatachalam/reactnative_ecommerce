import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListProducts from '../screens/ListProducts';
import ViewProduct from '../screens/ViewProduct';

const Stack = createNativeStackNavigator();
const ProductListStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ListProducts" component={ListProducts} />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default ProductListStack;

const styles = StyleSheet.create({});
