import { useContext } from 'react';
import styled from 'styled-components';
import { Col, Div } from 'react-atomize';
import { Text } from '../../ui/Text';
import { Form, Input } from '../../ui/Form';
import ButtonUI from '../../ui/Button';
import DeliveryForm from './DeliveryForm';

import { cartContext } from '../../../context/cart/cartContext';

const Button = styled(ButtonUI)`
    button{
        background: ${props => props.theme.colors.info};
        box-shadow:none;

        :hover{
            background: #0077cc;
            box-shadow:none;
        }
    }
`

const Payment = () => {

    const { productPrices, shippnig, isDelivery, setIsDelivery } = useContext(cartContext);

    return (
        <Col size='4'>
            <Form>
                <Div
                    bg='white'
                    p='2rem'
                    shadow='5'
                    h='calc(100vh - 13rem)'
                    d='flex'
                    flexDir='column'
                    align='flex-start'
                    justify='space-between'
                >
                    <Div w='100%'>
                        <Div d='flex' align='center' justify='space-between'>
                            <Text
                                cursor='pointer'
                                onClick={() => setIsDelivery(false)}
                                textColor={isDelivery === false ? 'info' : 'black10'}
                            >Retiro en local</Text>

                            <Text
                                cursor='pointer'
                                onClick={() => setIsDelivery(true)}
                                textColor={isDelivery ? 'info' : 'black10'}
                            >Envio a domicilio</Text>
                        </Div>

                        {isDelivery ? <DeliveryForm /> : (
                            <Input w='100%' m='1.5rem 0' radius='6px'>
                                <input placeholder='dd/mm/aaaa' type='date' />
                            </Input>
                        )}

                        <Div d='flex' justify='space-between'>
                            <div>
                                <Text textWeight='700' textSize='F12'>Total en productos</Text>
                                <Text textSize='F24' textWeight='700'>
                                    $ {productPrices}
                                </Text>
                            </div>

                            <div>
                                <Text textWeight='700' textSize='F12'>Costo de envio</Text>
                                <Text textSize='F24' textWeight='700'>
                                    $ {shippnig}
                                </Text>
                            </div>
                        </Div>
                    </Div>
                    
                    <Div w='100%'>
                        <Text textSize='F12' textWeight='700'>Total a pagar</Text>
                        
                        <Text textSize='F32' textWeight='700'>$ {shippnig + productPrices}</Text>
                        
                        <Button w='100%' m='1rem 0 0' onClick={e =>{
                            e.preventDefault()
                            alert('Compra realizada')
                        }}>
                            <button>
                                Comprar ahora
                            </button>
                        </Button>
                    </Div>

                </Div>
            </Form>
        </Col>
    )
}

export default Payment
