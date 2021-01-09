import { useState, useEffect } from 'react';
import { Row, Col } from 'react-atomize';
import Counter from '../../ui/Counter';

const ProductItem = ({ product }) => {

    const { name, price } = product;
    const [ quantity, setQuantity ] = useState(1);

    return (
        <Row
            p='.25rem 0'
            m='.25rem 0'
            border={{b:'1px solid'}}
            borderColor='black20'
        >
            <Col size='6'>{name}</Col>
            <Col size='2'>$ {price}</Col>
            <Col size='2'>
                <Counter
                    setQuantity={setQuantity}
                    quantity={quantity}
                    name={name}
                    price={price}
                />
            </Col>
            <Col size='2'>$ {price * quantity}</Col>
        </Row>
    )
}

export default ProductItem;
