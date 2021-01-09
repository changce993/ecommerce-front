import styled from 'styled-components'
import { Image } from 'react-atomize';

export default styled(Image)`
    max-width:100%;
    height:${props => props.h ? props.h : 'auto'};
    width:${props => props.w ? props.w : 'auto'};
    object-fit:cover;
`