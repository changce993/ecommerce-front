import styled from 'styled-components';
import { Div } from 'react-atomize';
import { Subtitle, Text } from '../../ui/Text';
import { Input as InputUI } from '../../ui/Form';
import Button from '../../ui/Button';

const Input = styled(InputUI)`
    input{
        border:none;
    }
`

const Content = styled(Div)`

    ${Text}{
        margin:1rem 0;
    }

    ${Input}{
        margin:1rem 0 2rem;
    }

`

const Suscribe = () => {
    return (
        <Content h='calc(100vh - 5.4rem)' d='flex' justify='center' align='center' flexDir='column'>
            <Subtitle>Suscribete a nuestro newsletter</Subtitle>
            <Text>Y entérate sobre todas nuestras promociones y novedades</Text>

            <Input>
                <input 
                    placeholder='Ingresa tu correo electronico'
                />
            </Input>

            <Button>
                <button>
                    Suscribirme
                </button>
            </Button>
        </Content>
    )
}

export default Suscribe
