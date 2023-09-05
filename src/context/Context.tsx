import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer } from "react";

export interface ProductsFace {
  id: number;
  name: string;
  price: string;
  avatar: string;
  fastDelivery: boolean;
}

type productState = {
  products: ProductsFace[];
  cart: ProductsFace[];
};

type productAction = {
  type: string;
  payload: any;
};

export interface ContextProps {
  state: productState;
  dispatch: React.Dispatch<any>;
}

const Cart = createContext<ContextProps | undefined>(undefined);

const Context = ({ children }: { children: React.ReactNode }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.number.int(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    avatar: faker.image.avatar(),
    fastDelivery: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(
    (state: productState, action: productAction) => {
      switch (action) {
        default:
          return state;
      }
    },
    {
      products: products as ProductsFace[],
      cart: [],
    }
  );

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
