import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../reduxStore/ecommSlice';
import {data} from './fakedata';
import EmptyStore from '../components/EmptyStore';
import ProductItem from '../components/ProductItem';
import {WHITECOLOR} from '../Utilities/Colors';
import {FONT_SIZE} from '../Utilities/Constants';
import Loader from '../components/Loader';

const ListProducts = ({navigation}) => {
  const {productsList} = useSelector(state => state.eCommStore);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [isRefresh, setisRefresh] = useState(false);
  useEffect(() => {
    setisLoading(true);
    handleAddProduct();
    setisLoading(false);
  }, []);
  const handleAddProduct = () => {
    let tempProducts = [...data].map((element, index) => {
      return {
        ...element,
        isCart: false,
      };
    });
    dispatch(addProduct(tempProducts));
  };

  const renderProductList = ({item}) => {
    return (
      <ProductItem item={item} dispatch={dispatch} navigation={navigation} />
    );
  };

  const onRefresh = () => {
    setisRefresh(true);
    setTimeout(() => {
      setisRefresh(false);
    }, 3000);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.headerTxt}>Products</Text>
      <FlatList
        data={productsList}
        keyboardShouldPersistTaps={'handled'}
        renderItem={renderProductList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}
        ListEmptyComponent={EmptyStore}
        onEndReachedThreshold={0.3}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default ListProducts;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: WHITECOLOR,
  },
  headerTxt: {
    alignSelf: 'center',
    fontSize: FONT_SIZE.large,
    paddingVertical: 10,
  },
});
