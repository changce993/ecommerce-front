import { Div, Col } from 'react-atomize';

const Cards = ({ children }) => {
    return (
        <Col size={{xs:12, md:6, lg:4, xl:3}}>
            <Div
                bg='white'
                rounded='sm'
                shadow='1'
                p='1rem'
                m={{b:'1rem'}}
                d='flex'
                flexDir='column'
            >
                { children }
            </Div>
        </Col>
    )
}

export default Cards