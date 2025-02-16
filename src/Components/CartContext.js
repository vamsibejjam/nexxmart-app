import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
  totalDiscount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const discountAmount = Math.floor((action.payload.price * action.payload.discount) / 100);
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price,
        totalDiscount: state.totalDiscount + discountAmount,
      };

    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find((item) => item.id === action.payload.id);
      const updatedItems = state.items.filter((item) => item.id !== action.payload.id);
      const removeDiscountAmount = Math.floor((itemToRemove.price * itemToRemove.discount) / 100);
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemToRemove.price,
        totalDiscount: state.totalDiscount - removeDiscountAmount,
      };

    case 'UPDATE_ITEM':
      const findItemByName = state.items.find(item => item.name === action.item);

      if (!findItemByName) return state;

      const previousCount = findItemByName.count || 1;
      const newItems = state.items.map(item =>
        item.name === action.item ? { ...item, count: action.count } : item
      );

      const priceDifference = findItemByName.price * (action.count - previousCount);
      const discountPerItem = Math.floor((findItemByName.price * findItemByName.discount) / 100);
      const discountDifference = discountPerItem * (action.count - previousCount);

      return {
        ...state,
        items: newItems,
        totalAmount: state.totalAmount + priceDifference,
        totalDiscount: state.totalDiscount + discountDifference,
      };

    case 'RESET_CART':
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
