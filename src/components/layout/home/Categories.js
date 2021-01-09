import styled from 'styled-components';
import { Div, Row, Col } from 'react-atomize';
import { Subtitle, Text } from '../../ui/Text';
import Image from '../../ui/Image';

const Card = styled(Div)`
    background-color: #fff;
    padding:2rem;
    text-align:center;
    font-weight:700;
`

const Categories = () => {

    return (
        <Div className='container' p='10rem 0 5rem'>
            <Subtitle textAlign='center' tag='h3' m={{b:'2rem'}} data-aos='fade-up'>
                Lorem ipsum is placeholder text
            </Subtitle>

            <Text textAlign='center' w={{xs:'100%', md:'80%', lg:'60%'}} m='0 auto' data-aos='fade-up'>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </Text>

            <Row p='5rem 0'>
                <Col size='6' data-aos='fade-up' data-aos-delay='100'>
                    <Card>
                        <Text>Macbook</Text>
                        <Image m={{t:'2rem'}} h='10rem' src={`/assets/images/macbook.png`} />
                    </Card>
                </Col>

                <Col size='3' data-aos='fade-up' data-aos-delay='200'>
                    <Card>
                        <Text>iPhone</Text>
                        <Image m={{t:'2rem'}} h='10rem' src={`/assets/images/iPhone11.png`} />
                    </Card>
                </Col>

                <Col size='3' data-aos='fade-up' data-aos-delay='300'>
                    <Card>
                        <Text>iPad</Text>
                        <Image m={{t:'2rem'}} h='10rem' src={`/assets/images/ipadPro.png`} />
                    </Card>
                </Col>
            </Row>
        </Div>
    )
}

export default Categories
