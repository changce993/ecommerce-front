import { createContext, useState, useEffect } from 'react';

export const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [ cartProducts, setCartProducts ] = useState([]);
    const [ productPrices, setProductPrices ] = useState(0);
    const [ shippnig, setShippnig ] = useState(0);
    const [ isDelivery, setIsDelivery ] = useState(false);

    useEffect(() => {

        const products = JSON.parse(localStorage.getItem('products'));

        if(!products) {
            setCartProducts([]);
        } else {
            setCartProducts(products);
            const prices = Object.values(products.map(product => product.price));
            setProductPrices(prices.reduce((acum, num) => acum + num));
        }
        
    }, []);

    useEffect(() => {
        if(isDelivery){
            setShippnig(100)
        } else {
            setShippnig(0)
        }
    }, [isDelivery])

    return (
        <cartContext.Provider value={{
            cartProducts,
            productPrices,
            shippnig,
            isDelivery,
            setCartProducts,
            setProductPrices,
            setShippnig,
            setIsDelivery
        }}>
            { children }
        </cartContext.Provider>
    )
}

export default CartProvider;