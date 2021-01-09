import { Div } from 'react-atomize';
import styled from 'styled-components';
import Layout from '../Layout';
import { Subtitle, Text, Anchor as AnchorUI } from '../../ui/Text';
import LottieCart from './LottieCart';

const Anchor = styled(AnchorUI)`
    text-align:center;
`

const Empty = () => {

    return (
        <Layout bg='black05'>
            <Div
                className='container'
                minH='calc(100vh - 5.4rem)'
                d='flex'
                flexDir='column'
                align='center'

            >
                <Subtitle m='2rem 0'>Tu carrito esta vacio</Subtitle>
                <Text>Comencemos agregando algo</Text>

                <Anchor href='/products'>
                    <LottieCart/>
                    Ir a productos
                </Anchor>
            </Div>
        </Layout>
    )
}

export default Empty
