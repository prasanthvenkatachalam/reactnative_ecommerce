import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {PRIMARYCOLOR} from '../Utilities/Colors';

const Loader = () => {
  return (
    <View style={styles.loaderScreen}>
      <ActivityIndicator color={PRIMARYCOLOR} />
      <Text style={{color: PRIMARYCOLOR}}>Loading Products</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
