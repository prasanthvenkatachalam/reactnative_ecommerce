import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  productsList: [],
  cartList: [],
};

const ecommSlice = createSlice({
  name: 'eCommStore',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.productsList = action.payload;
    },
    addOrRemoveCartItem: (state, action) => {
      let temp = [...state.productsList].map(ele => {
        if (ele.id === action.payload) {
          if (!ele.isCart) {
            state.cartList.push({
              ...ele,
              cart_quantity: 1,
              totalPrice: ele.price,
              isCart: !ele.isCart,
            });
          } else {
            state.cartList = state.cartList.filter(
              item => item.id !== action.payload,
            );
          }
          return {
            ...ele,
            isCart: !ele.isCart,
          };
        } else {
          return {
            ...ele,
          };
        }
      });
      state.productsList = [...temp];
    },

    increaseDecreaseCartItem: (state, action) => {
      let temp = state.cartList.map(ele => {
        if (ele.id === action.payload.id) {
          let cartQty = ele.cart_quantity;
          let qtyTotalPrice = ele.totalPrice;
          if (action.payload.isIncrease) {
            cartQty = cartQty + 1;
            qtyTotalPrice = qtyTotalPrice + ele.price;
          } else {
            if (cartQty !== 1) {
              cartQty = cartQty - 1;
              qtyTotalPrice = qtyTotalPrice - ele.price;
            }
          }
          return {
            ...ele,
            cart_quantity: cartQty,
            totalPrice: qtyTotalPrice,
          };
        } else {
          return {
            ...ele,
          };
        }
      });

      state.cartList = [...temp];
    },

    clearCart: state => {
      let temp = [...state.productsList].map(ele => {
        return {
          ...ele,
          isCart: false,
        };
      });
      state.productsList = [...temp];
      state.cartList = [];
    },
  },
});
export const {
  addProduct,
  addOrRemoveCartItem,
  increaseDecreaseCartItem,
  clearCart,
} = ecommSlice.actions;
export default ecommSlice.reducer;
