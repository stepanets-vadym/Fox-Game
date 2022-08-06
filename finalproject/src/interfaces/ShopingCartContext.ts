import { CartItem } from './CartItem';
export interface ShopingCartContext {
  openCart: () => void
  closeCart: () => void
  getItemQuantity : (id: string | number) => string | number
  increaseCartQuantity : (id: string | number) => void
  deecreaseCartQuantity : (id: string | number) => void
  removeFromCart : (id: string | number) => void
  cartQuantity: number
  cartItems: CartItem[]
}