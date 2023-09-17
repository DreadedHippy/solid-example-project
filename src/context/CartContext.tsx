import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store"
import { CartItem } from "../models/carItem.model";

export const CartContext = createContext<{items: CartItem[], setItems: any}>();

export function CartContextProvider(props: any) {
	const [items, setItems] = createStore([]);

	return (
		<CartContext.Provider value={{items, setItems}}>
			{props.children}
		</CartContext.Provider>
	)
}

export function useCartContext() {
	return useContext(CartContext)!;
}