import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import RootStack from './src/Navigation/RootStack';
import {Provider} from 'react-redux';
import {store} from './src/reduxStore/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.sectionContainer}>
        <RootStack />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
