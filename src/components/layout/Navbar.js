import styled from 'styled-components';
import { Div } from 'react-atomize';
import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';

const Nav = styled(Div)`
    z-index:1;
`

const Navbar = ({ colorLogo, textColor, bg, searchbar }) => {

    if(bg === undefined) bg = 'white';
    if(searchbar === undefined) searchbar = false;

    return (
        <>
            <Nav pos='fixed' w='100%' tag='nav' bg={bg} d={{xs:'none',md:'block'}}>
                <Div className='container' d='flex' justify='space-between' align='center'>
                    <Logo colorLogo={colorLogo} />
                    
                    <Navigation searchbar={searchbar} textColor={textColor} />
                </Div>
            </Nav>
            
            <Div
                bg={bg}
                h='5.4rem'
            />
        </>
    )
}

export default Navbar
