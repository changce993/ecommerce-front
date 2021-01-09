import styled from 'styled-components';

export default styled.a`
    display:inline-block;
    width:${props => props.w ? props.w : '15rem'};
    max-width:100%;
    margin:${props => props.m ? props.m : '0'};

    button{
        outline:none;
        border:none;
        background-color: ${props => props.neuphormism ? 'transparent' : props.theme.colors.primary100};
        width:${props => props.w ? props.w : '15rem'};
        padding:1rem;
        max-width:100%;
        border-radius:1rem;
        color: white;
        cursor:pointer;
        font-weight:600;
        transition:.3s;
        box-shadow:${props => props.neuphormism ? '3px 3px 6px black, -3px -3px 6px rgba(255,255,255,.16)' : '4px 4px 16px ' + props.theme.colors.primaryDark};

        :hover{
            background-color: ${props => props.neuphormism ? 'transparent' : props.theme.colors.primaryDark};
            box-shadow:${props => props.neuphormism ? '-3px -3px 6px rgba(255,255,255,.16), 3px 3px 6px black' : '4px 4px 16px ' + props.theme.colors.primaryDark};
        }
    }
`
