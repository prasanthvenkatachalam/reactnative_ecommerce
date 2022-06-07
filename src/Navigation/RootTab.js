import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductListStack from './ProductListStack';
import {useSelector} from 'react-redux';
import CartStack from './CartStack';
import HomeIcon from '../Assets/Svgs/home.svg';
import CartIcon from '../Assets/Svgs/cart.svg';
import {PRIMARYCOLOR, SECONDARYCOLOR} from '../Utilities/Colors';
const Tab = createBottomTabNavigator();

const RootTab = () => {
  const {cartList} = useSelector(state => state.eCommStore);

  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let TabIcon;
          if (route.name === 'ProductListStack') {
            TabIcon = HomeIcon;
          } else if (route.name === 'CartStack') {
            TabIcon = CartIcon;
          }
          return <TabIcon fill={focused ? PRIMARYCOLOR : SECONDARYCOLOR} />;
        },
        tabBarStyle: {
          backgroundColor: '#F8F8F8',
        },
        headerShown: false,
        tabBarItemStyle: {height: 40, alignSelf: 'center'},
      })}>
      <Tab.Screen name="ProductListStack" component={ProductListStack} />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          headerShown: false,
          tabBarBadge: cartList.length ? cartList.length : null,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTab;
