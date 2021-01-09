import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const productsContext = createContext();

const ProdutsProvider = ({ children }) => {

    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ category, setCategory ] = useState('1');
    const [ searchbar, setSearchbar ] = useState('');
    const [ newest, setNewest ] = useState([]);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:1337/products');
        setProducts(response.data);
        setNewest(response.data.reverse().slice(0,4));
    };

    const getCategories = async () => {
        const response = await axios.get('http://localhost:1337/categories');
        setCategories(response.data);
    };

    useEffect(() => getCategories(), []);

    useEffect(() => getProducts(), []);

    useEffect(() => {
        const searchProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchbar.toLowerCase());
        });

        if(searchbar.trim() === ''){
            getProducts()
        } else {
            setProducts(searchProducts)
        }

        // eslint-disable-next-line
    }, [searchbar]);

    useEffect(() => {
        const getProductsByCategory = async () => {
            const response = await axios.get(`http://localhost:1337/categories/${category}`);
            setProducts(response.data.products)
        }
        getProductsByCategory()
    }, [category]);

    return (
        <productsContext.Provider value={{
            products,
            categories,
            newest,
            setSearchbar,
            setCategory
        }}>
            { children }
        </productsContext.Provider>
    )
}

export default ProdutsProvider;
