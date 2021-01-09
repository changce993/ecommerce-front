import styled from 'styled-components';
import { Div } from 'react-atomize';
import Dropdown from '../../ui/Dropdown';
import { Input } from '../../ui/Form';

const Wrapper = styled(Div)`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    row-gap:1rem;
    column-gap:1rem;
    margin:1rem 0;
`

const DeliveryForm = () => {

    return (
        <Div>
            <Wrapper>
                <Dropdown>
                    Provincia
                </Dropdown>

                <Input w='100%' radius='6px'>
                    <input placeholder='Código postal' />
                </Input>
            </Wrapper>

            <Input w='100%' radius='6px'>
                <input placeholder='Dirección' />
            </Input>

            <Dropdown m='1rem 0'>
                Casa
            </Dropdown>
        </Div>
    )
}

export default DeliveryForm
