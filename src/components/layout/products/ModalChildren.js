import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Div, Row, Col } from 'react-atomize';
import { Text } from '../../ui/Text';
import Image from '../../ui/Image';
import ButtonUI from '../../ui/Button';

import { cartContext } from '../../../context/cart/cartContext';

const Button = styled(ButtonUI)`
    button{
        margin:0 0 .5rem;
        background: ${props => props.theme.colors.info};
        box-shadow:none;

        :hover{
            background: #0077cc;
            box-shadow:none;
        }
    }
`

const Outline = styled(ButtonUI)`
    button{
        background:transparent;
        box-shadow:none;
        color:${props => props.theme.colors.info};
        border:1px solid ${props => props.theme.colors.info};

        :hover{
            background: transparent;
            box-shadow:none;
            border:1px solid #0077cc;
            color:#0077cc;
        }
    }
`

const Product = ({ product, setSuccessDark }) => {
    
    const { cartProducts, setCartProducts } = useContext(cartContext);

    useEffect(() => console.log(cartProducts), [cartProducts])

    const handleSetCartProducts = () => {
        const products = [...cartProducts, product];
        setCartProducts(products);
        localStorage.setItem('products', JSON.stringify(products));
        setSuccessDark(true);
    }

    const { name, images, price, stock, description } = product;
    const { url } = images[0];
    
    return (
        <Row>
            <Col size={{xs:12,md:6}}>
                <Text textAlign='center' textWeight='700'>{name}</Text>
                <Image
                    w='100%'
                src={`http://localhost:1337${url}`} />
            </Col>

            <Col size={{xs:12,md:6}}>
                <Div
                    d='flex'
                    align='center'
                    justify='space-between'
                    textWeight='700'
                    border={{b:'1px solid'}}
                    borderColor='black30'
                >
                    <Text>${price} USD</Text>
                    <Text>Disponibles: {stock}</Text>
                </Div>
                <Text
                    p='1rem'
                    bg='black10'
                    m='1rem 0'
                >{description}</Text>

                <Button w='100%'>
                    <button>
                        Comprar ahora
                    </button>
                </Button>

                <Outline w='100%'>
                    <button onClick={handleSetCartProducts}>
                        Agregar al carrito
                    </button>
                </Outline>
            </Col>
        </Row>
    )
}

export default Product
