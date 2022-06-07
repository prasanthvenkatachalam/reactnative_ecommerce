import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {FONT_SIZE} from '../Utilities/Constants';
const EmptyStore = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={[styles.container, {height: height - 130}]}>
      <Text style={styles.containertext}>No Products Found !</Text>
    </View>
  );
};

export default EmptyStore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containertext: {
    textAlign: 'center',
    fontSize: FONT_SIZE.medium,
  },
});
