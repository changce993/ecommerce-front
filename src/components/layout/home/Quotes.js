import { Div } from 'react-atomize';
import styled from 'styled-components';
import { Subtitle, Text as TextUI } from '../../ui/Text';

const Text = styled(TextUI)`
    line-height:${props => props.theme.textSize.height.F32};
`

const Quotes = () => {
    return (
        <Div p='10rem 0' className='container'>
            <Subtitle
                textAlign='center'
                data-aos='fade-up'
                m={{b:'2rem'}}
            >Envios a todo el pais</Subtitle>
            
            <Text
                textSize='F20'
                textAlign='center'
                data-aos='fade-up'
                w={{xs:'100%',md:'90%',lg:'80%',xl:'70%'}}
                m='0 auto'
            >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
        </Div>
    )
}

export default Quotes
