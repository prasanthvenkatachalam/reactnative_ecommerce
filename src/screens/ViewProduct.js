import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addOrRemoveCartItem} from '../reduxStore/ecommSlice';
import {
  BUTTONCOLOR,
  PRIMARYCOLOR,
  SECONDARYCOLOR,
  WHITECOLOR,
} from '../Utilities/Colors';
import {FONT_SIZE, windowWidth} from '../Utilities/Constants';
import {getAmountFormat} from '../Utilities/Methods';
import RatingStar from '../Assets/Svgs/rating_star.svg';

const ViewProduct = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {productsList} = useSelector(state => state.eCommStore);
  const [productDetails, setproductDetails] = useState(null);

  useEffect(() => {
    setproductDetails(
      productsList.find(item => item.id === route.params?.productId),
    );
  }, [productsList]);

  const handleAddtoCart = () => {
    if (productDetails.isCart) {
      navigation.navigate('CartStack');
    } else {
      console.log('KKK', productDetails.id);
      dispatch(addOrRemoveCartItem(productDetails.id));
    }
  };

  const AmountContainer = () => {
    return (
      <View style={styles.cartAmountContainer}>
        <Text style={styles.priceText}>
          Price:
          <Text
            style={[styles.priceText, {marginLeft: 8, color: SECONDARYCOLOR}]}>
            {' ' + getAmountFormat(productDetails.price)}
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddtoCart}>
          <Text style={styles.buttonText}>
            {productDetails.isCart ? 'GO TO BAG' : 'ADD TO BAG'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    productDetails && (
      <>
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: productDetails.image}}
              style={styles.product}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.productName}>{productDetails.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingNumber}>
                {productDetails.rating.rate}
              </Text>
              <RatingStar />
            </View>
            <Text style={{color: '#00000063', marginHorizontal: 10}}>
              ({productDetails.rating.count}) ratings
            </Text>
          </View>
          <Text style={styles.descriptionText}>
            {'Category : ' + productDetails.category}
          </Text>

          <Text style={styles.descriptionText}>
            {productDetails.description}
          </Text>
        </ScrollView>
        <AmountContainer />
      </>
    )
  );
};

export default ViewProduct;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: WHITECOLOR,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: '100%',
    height: windowWidth - 30,
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
  },
  product: {
    height: '100%',
    width: '100%',
  },
  productName: {
    color: SECONDARYCOLOR,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingBottom: 15,
    fontSize: FONT_SIZE.small,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: FONT_SIZE.small,
    color: '#676870',
    marginVertical: 5,
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

  ratingBox: {
    backgroundColor: '#00B512',
    borderRadius: 5,
    padding: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    color: WHITECOLOR,
  },
});
