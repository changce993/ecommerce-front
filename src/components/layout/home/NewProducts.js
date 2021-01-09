import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Div, Row as RowAtomize } from 'react-atomize';
import { Heading } from '../../ui/Text';
import Notification from '../../ui/Notification';
import CardProduct from '../products/CardProduct';

import { productsContext } from '../../../context/products/productsContext';

const Row = styled(RowAtomize)`
    row-gap:1rem;
    margin-top:2rem;
`

const NewProducts = () => {

    const [ successDark, setSuccessDark ] = useState(false);
    const { newest } = useContext(productsContext);

    return (
        <Div className='container' p='5rem 0'>
            <Heading>
                Nuevos productos
            </Heading>

            <Notification
                successDark={successDark}
                setSuccessDark={setSuccessDark}
            >Producto agregado con exito</Notification>

            <Row>
                {newest.map((product, index) => {

                    return (
                        <CardProduct
                            delay={`${index * 5}0`}
                            aos='fade-up'
                            key={index}
                            product={product}
                            setSuccessDark={setSuccessDark}
                        />
                    )
                })}
            </Row>
        </Div>
    )
}

export default NewProducts
