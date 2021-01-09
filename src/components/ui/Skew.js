import styled from 'styled-components';

export const SkewBottom = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    /* width:100%;
    height:${({ height }) => height ? height : '5rem'}; */
    border-width:0 0 10vh 100vw;
    border-style:solid;
    border-color:transparent transparent ${props => props.theme.colors.black05} transparent;
`