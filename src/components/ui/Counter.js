import { useContext } from 'react';
import { Div } from 'react-atomize';
import { Text } from './Text';
import Image from './Image';

import { cartContext } from '../../context/cart/cartContext';

const Counter = ({ price, name, quantity, setQuantity }) => {

    const { productPrices, setProductPrices } = useContext(cartContext);

    const iconPath = '/assets/icons/';

    const handleClickMore = () => {
        setQuantity(quantity + 1)
        setProductPrices(productPrices + price);
    }

    const handleClickLess = () => {
        if(quantity <= 1){
            alert(`¿Queires eliminar ${name}?`)
        } else {
            setQuantity(quantity - 1)
            setProductPrices(productPrices - price);
        }
    }

    return (
        <Div d='flex' align='center'>
            <Image
                onClick={handleClickLess}
                cursor='pointer'
                src={`${iconPath}less.svg`}
            />

            <Text w='2rem' textAlign='center'>{quantity}</Text>

            <Image
                onClick={handleClickMore}
                cursor='pointer'
                src={`${iconPath}more.svg`}
            />
        </Div>
    )
}

export default Counter;

