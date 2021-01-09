import { Div, Row, Icon } from 'react-atomize';
import { Subtitle } from '../../ui/Text';
import CardCustomer from './CardCustomer';

const Customers = () => {

    const customers = [
        {
            name:'Juan Lopez',
            comment:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            rating:4
        },
        {
            name:'Diana Piani',
            comment:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            rating:3
        },
        {
            name:'Jorge Gonzalez',
            comment:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
            rating:5
        }
    ]

    return (
        <Div p='10rem 0 ' className='container'>
            <Subtitle
                textAlign='center'
            >Lo que dicen nuestros clientes</Subtitle>

            <Row p='5rem 0'>
                {customers.map((customer, index) => (
                    <CardCustomer customer={customer} key={index}/>
                ))}
            </Row>

            <Div d='flex' align='center' justify='center'>
                <Icon cursor='pointer' name="LeftArrow" size="24px" m='0 .5rem'/>
                <Icon cursor='pointer' name="RightArrow" size="24px" m='0 .5rem'/>
            </Div>
        </Div>
    )
}

export default Customers
