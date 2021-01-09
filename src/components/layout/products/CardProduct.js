import styled from 'styled-components';
import { Div } from 'react-atomize';
import { Text } from '../../ui/Text';
import Image from '../../ui/Image';
import Modal from '../../ui/Modal';
import ModalChildren from './ModalChildren';

const CardInfo = styled(Div)`
    transform:translateY(5rem);
`

const Card = styled(Div)`
    background-color: #fff;
    padding:2rem;
    text-align:center;
    font-weight:700;
    overflow:hidden;

    :hover{
        ${CardInfo}{
            transform:translateY(0rem);
        }
    }
`

const CardProduct = ({ product, setSuccessDark, aos, delay }) => {

    const { name, images, price, stock } = product;

    return (
        <Modal modalChildren={<ModalChildren setSuccessDark={setSuccessDark} product={product}/>}>
            <Card transition shadow='1' hoverShadow='5' cursor='pointer' data-aos={aos} data-aos-delay={delay}>
                <Text>{name}</Text>
                <Image
                    m={{t:'2rem'}}
                    h='10rem'
                    src={`http://localhost:1337${images[0].url}`}
                />
                <CardInfo d='flex' justify='space-between' align='center'>
                    <Text>${price}</Text>
                    <Text>Disponibles: {stock}</Text>
                </CardInfo>
            </Card>
        </Modal>
    )
}

export default CardProduct
