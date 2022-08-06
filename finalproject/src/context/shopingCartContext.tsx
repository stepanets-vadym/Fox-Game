import { useLocalStorage } from 'hooks/useLocalStorage';
import { CartItem } from 'interfaces/CartItem';
import { ShopingCartContext } from 'interfaces/ShopingCartContext';
import { ShopingCartProviderProps } from 'interfaces/ShopingCartProvider';
import { createContext, useContext, useState } from 'react';

const shopingCartContext = createContext({} as ShopingCartContext);

export function useShopingCart() {
  return useContext(shopingCartContext);
}

export function ShopingCartProvider({ children }: ShopingCartProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(true);
  function getItemQuantity(id: string | number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number | string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function deecreaseCartQuantity(id: number | string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number | string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <shopingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        deecreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </shopingCartContext.Provider>
  );
}
