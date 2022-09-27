import { createContext, useEffect, useContext, useState } from "react";
import { Api } from "../../services/api";
import * as React from "react";

type Product = {
  id: number;
  img: string;
  name: string;
  category: string;
  price: number;
};

type CartItem = Product & {
  qty: number;
};

type ProductsResponse = Product[];

interface ShopProviderData {
  // loadingProducts: () => Promise<void>;
  addToCart: (item: Product) => void;
  updateCart: (type: "minus" | "plus", id: number) => void;
  removeFromCart: (id: number) => void;
  products: Product[];
  cart: CartItem[];
}

const ShopContext = createContext<ShopProviderData>({} as ShopProviderData);

type ShopProviderProps = {
  children: React.ReactNode;
};

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const keyStoragePreffix = "@burguerKenzie";

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const getLocalStorageCart = (): CartItem[] => {
    const storagedCart: CartItem[] = JSON.parse(
      localStorage.getItem(`${keyStoragePreffix}:cart`) as string
    );
    return storagedCart;
  };

  const loadingProducts = async () => {
    try {
      const { data } = await Api.get<ProductsResponse>("/products");
      setProducts(data);
    } catch (error) {}
  };

  const addToCart = (id) => {
    if (!products.length) {
      return;
    }
    const productToAdd = products.find((product) => product.id === id);

    if (!productToAdd) {
      return;
    }
    const productInCart = cart.filter((product) => product.id === id);

    if (productInCart.length) {
      updateCart(id, "plus");
      return;
    }
    setCart((cartState) => [...cartState, { ...productToAdd, qtde: 1 }]);
  };

  const updateCart = (id, type) => {
    if (!cart.length) {
      return;
    }

    let itemToUpdate = cart.find((item) => item.id === id);

    if (!itemToUpdate) {
      return;
    }

    if (type === "plus") {
      itemToUpdate = { ...itemToUpdate, qtde: itemToUpdate.qtde + 1 };
    }

    if (type === "minus") {
      if (itemToUpdate.qtde === 1) {
        removeFromCart(itemToUpdate.id);
        return;
      }
      itemToUpdate = { ...itemToUpdate, qtde: itemToUpdate.qtde - 1 };
    }

    const unmodifiedProducts = cart.filter((product) => product.id !== id);
    setCart([...unmodifiedProducts, { ...itemToUpdate }]);
  };

  const removeFromCart = (id) => {
    if (!cart.length) {
      return;
    }

    const productToRemove = cart.find((item) => item.id === id);

    if (!productToRemove) {
      return;
    }

    setCart([...cart.filter((product) => product.id !== productToRemove.id)]);
  };

  const isInShopCart = (id) => cart.filter((item) => item.id === id);

  const totalOfProductsInCart = cart.reduce(
    (total, curr) => total + curr.qtde,
    0
  );

  const subTotal = cart.reduce((acc, curr) => acc + curr.price * curr.qtde, 0);

  useEffect(() => {
    loadingProducts();
    const storagedCart = getLocalStorageCart();
    if (storagedCart) {
      setCart(storagedCart);
    }
  }, []);

  return (
    <ShopContext.Provider
      value={{
        cart,
        products,
        addToCart,
        updateCart,
        removeFromCart,
        isInShopCart,
        totalOfProductsInCart,
        subTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
