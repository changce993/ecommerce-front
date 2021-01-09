import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html {
        font-size: 16px;
        box-sizing:border-box;
    }

    *, *::before, *::after {
        padding:0;
        margin:0;
        box-sizing:inherit;
        font-family: 'Montserrat', sans-serif;
        color:${props => props.theme.colors.black90};
    }

    body {
        font-size:1rem;
        line-height:1.5;
        background-color: ${props => props.theme.colors.black05};
    }

    .container{
        max-width:1440px;
        width:90%;
        margin:0 auto;
    }

    .overflow-y{
        overflow-y:scroll;
        ::-webkit-scrollbar{
            display:none;
        }
    }

    img {
        max-width:100%;
    }
`;
