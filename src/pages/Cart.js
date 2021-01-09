import { useContext, useState } from 'react';
import { Row } from 'react-atomize';
import Layout from '../components/layout/Layout';
import Empty from '../components/layout/cart/Empty';
import Topbar from '../components/layout/cart/Topbar';
import ProductList from '../components/layout/cart/ProductList';
import Payment from '../components/layout/cart/Payment';

import { cartContext } from '../context/cart/cartContext';

const Cart = () => {

    const { cartProducts } = useContext(cartContext);

    if(cartProducts.length <= 0) return <Empty/>

    return (
        <Layout bg='black05'>
            <div className='container'>
                <Topbar />
                <Row>
                    <ProductList products={cartProducts}/>
                    <Payment/>
                </Row>
            </div>
        </Layout>
    )
}

export default Cart
