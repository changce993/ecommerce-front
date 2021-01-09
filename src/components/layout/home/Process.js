import { Row, Col, Div } from 'react-atomize';
import { Subtitle, Text } from '../../ui/Text';

const Process = () => {

    const bgPath = '/assets/images/bgIphone.png';

    return (
        <Div
            bgImg={bgPath}
            minH='100vh'
            maxW='1920px'
            m='0 auto'
            bgRepeat='no-repeat'
            bgPos='bottom left'
            p='5rem 0 2rem'
            shadow='5'
        >
            <div className='container'>
                <Subtitle>Como es el proceso</Subtitle>

                <Div d='flex' justify='space-between'>
                    <Div></Div>

                    <Div m='2rem 0' w='40rem' maxW='100%' bg='rgbaWhite8' p='2rem 2rem 1rem' shadow='5'>
                        {[...Array(3)].map((item, index) => (
                            <Div m={{b:'1.5rem'}} key={index} data-aos='fade-up'>
                                <Text
                                    textSize='F32'
                                    textWeight='700'
                                    m={{b:'.5rem'}}
                                >Paso {index + 1}</Text>

                                <Text textSize='F20'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                            </Div>
                        ))}
                    </Div>
                </Div>
            </div>
        </Div>
    )
}

export default Process
