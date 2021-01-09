import { Div } from 'react-atomize';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, bg, searchbar }) => {
    return (
        <Div pos='relative'>
            <Navbar bg={bg} searchbar={searchbar} />
                { children }
            <Footer />
        </Div>
    )
}

export default Layout
