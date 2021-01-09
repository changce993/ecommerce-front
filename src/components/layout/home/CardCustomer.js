import { Col, Div, Icon } from 'react-atomize';
import { Text } from '../../ui/Text';

const CardCustomer = ({ customer }) => {

    const { name, comment, rating } = customer;

    return (
        <Col size={{xs:12,md:6,xl:4}}>
            <Div bg='white' p='2rem' shadow='1' m={{b:'1rem'}}>
                <Div d='flex' align='center' justify='space-between' m={{b:'.5rem'}}>
                    <Text textWeight='700'>
                        {name}
                    </Text>
                    
                    <Div>
                        {[...Array(rating)].map((rating, index) => {
                            return <Icon color='warning' name="StarSolid" size="20px" key={index}/>
                        })}

                        {[...Array(5 - rating)].map((rating, index) => {
                            return <Icon color='black10' name="StarSolid" size="20px" key={index}/>
                        })}
                    </Div>
                </Div>

                <Text>{comment}</Text>
            </Div>
        </Col>
    )
}

export default CardCustomer
