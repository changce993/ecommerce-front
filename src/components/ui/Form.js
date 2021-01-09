import { Div } from 'react-atomize';
import styled from 'styled-components';

export const Form = styled.form``

export const Input = styled(Div)`
    margin:${props => props.m ? props.m : '0'};

    label{
        font-size:12px;
    }

    input{
        outline:none;
        border:${props => props.searchbar ? 'none' : `1px solid ${props.theme.colors.black30}`};
        padding:0.75rem;
        max-width:100%;
        width:${props => props.w ? props.w : '15rem'};
        height:2.5rem;
        transition:.3s;
        border-radius:${props => props.radius ? props.radius : '0'};

        :hover{
            box-shadow:${props => props.searchbar ? '0 0 8px rgba(10,46,70, .12)' : 'none'};
        }

        :focus{
            box-shadow:${props => props.searchbar ? '0 4px 8px rgba(10,46,70, .24)' : 'none'};
        }
    }
`