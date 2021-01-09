import { useContext } from 'react';
import { Div } from 'react-atomize';
import { Text, Heading } from '../../ui/Text';

import { cartContext } from '../../../context/cart/cartContext';

const Topbar = () => {
    
    const { setCartProducts } = useContext(cartContext);

    const handleClick = () => {
        localStorage.removeItem('products');
        setCartProducts([]);
    }

    return (
        <Div d='flex' align='center' justify='space-between' m={{y:'1rem'}}>
            <Heading>Mi carrito</Heading>
            <Text
                cursor='pointer'
                textColor='info'
                onClick={handleClick}
            >Vaciar carrito</Text>
        </Div>
    )
}

export default Topbar
