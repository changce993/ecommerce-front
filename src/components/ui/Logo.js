import { Image } from 'react-atomize';

const Logo = ({ colorLogo }) => {

    if(colorLogo === undefined) colorLogo = 'white'

    const pathLogo = `/assets/brand/logo.svg`;

    return (
        <a href='/'>
            <Image
                p='1rem 0'
                h='5rem'
                w='auto'
                src={pathLogo}
                alt='logo cryptoprecios'
            />
        </a>
    )
}

export default Logo;
