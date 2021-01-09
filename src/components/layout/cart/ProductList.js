import { Col, Div, Row } from 'react-atomize';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {

    return (
        <Col size='8' h='100%'>
            <Div bg='white' p='2rem' shadow='1' h='calc(100vh - 13rem)'>
                <Row>
                    <Col size='6' textWeight='700'>Producto</Col>
                    <Col size='2' textWeight='700'>Precio</Col>
                    <Col size='2' textWeight='700'>Cant.</Col>
                    <Col size='2' textWeight='700'>Total</Col>
                </Row>

                <Div p='1rem 0'>
                    {products.map((product, index) => (
                        <ProductItem
                            product={product}
                            key={index}
                        />
                    ))}
                </Div>

                
            </Div>
        </Col>
    )
}

export default ProductList
