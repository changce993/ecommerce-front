import { useContext } from 'react';
import styled from 'styled-components';
import { Div } from 'react-atomize';
import { Link } from './Text';
import { Input } from './Form';
import ImageUI from './Image';

import { productsContext } from '../../context/products/productsContext';
import { cartContext } from '../../context/cart/cartContext';

const Image = styled(ImageUI)`
    height:1.5rem;
    width:auto;
    cursor:pointer;
`

const Cart = styled(Div)`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    a{
        display:inline-flex;
        padding:.5rem;
    }

    .counter{
        position:absolute;
        top:0;
        right:0;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:.5rem;
        font-weight:700;
        border-radius:1000px;
        background-color: red;
        color:white;
        width:1rem;
        height:1rem;
    }
`

const Navigation = ({ textColor, searchbar }) => {

    const { setSearchbar } = useContext(productsContext);
    const { cartProducts } = useContext(cartContext);

    const handleChange = e => setSearchbar(e.target.value);

    const links = [
        {name:'Inicio', url:'/'},
        {name:'Productos', url:'/products'}
    ];

    return (
        <Div d='flex' align='center'>
            {searchbar ? (
                <Input m={{r:'1rem'}} searchbar={searchbar}>
                    <input placeholder='buscar' onChange={handleChange}/>
                </Input>
            ) : null}

            {links.map(({name, url}, index) => (
                <Link
                    key={index}
                    to={url}
                    color={textColor}
                >{name}</Link>
            ))}
            
            <Cart>
                <a href='/cart'>
                {cartProducts.length <= 0 ? null : (
                    <div className='counter'>
                        {cartProducts.length}
                    </div>
                )}

                    <Image src='/assets/icons/cart.svg' />
                </a>
            </Cart>
        </Div>
    )
}

export default Navigation
