import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Row as RowAtomize, Div } from 'react-atomize';
import Sidedrawer from './Sidedrawer';
import Loading from '../Loading';
import Notification from '../../ui/Notification';
import CardProduct from './CardProduct';

import { productsContext } from '../../../context/products/productsContext';

const Row = styled(RowAtomize)`
    row-gap:1rem;
    margin-top:2rem;
`

const Products = () => {

    const [ successDark, setSuccessDark ] = useState(false);
    const { products } = useContext(productsContext);

    return (
        <Div className='container' p='1rem 0 2rem'>

            {products.length <= 0 ? <Loading/> : (
                <>
                    <Notification
                        successDark={successDark}
                        setSuccessDark={setSuccessDark}
                    >Producto agregado con exito</Notification>

                    <Sidedrawer />

                    <Row>
                        {products.map((product, index) => (
                            <CardProduct
                                key={index}
                                product={product}
                                setSuccessDark={setSuccessDark}
                            />
                        ))}
                    </Row>
                </>
            )}
        </Div>
    )
}

export default Products
