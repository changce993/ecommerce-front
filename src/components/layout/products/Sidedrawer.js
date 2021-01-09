import { useState, useContext } from 'react';
import { Div } from 'react-atomize';
import { Text, Heading } from '../../ui/Text';
import Drawer from '../../ui/Drawer';
import UseAnimation from 'react-useanimations';
import settings2 from 'react-useanimations/lib/settings2';

import { productsContext } from '../../../context/products/productsContext';

const Sidedrawer = () => {

    const { categories, setCategory } = useContext(productsContext);

    const [ isOpen, setIsOpen ] = useState(false);

    const FilterButton = (
        <Div d='flex' align='center' onClick={() => setIsOpen(!isOpen)}>
            <UseAnimation animation={settings2} size='32' reverse={isOpen} />
            <Text m={{l:'.5rem'}}>Filtrar</Text>
        </Div>
    )

    return (
        <Drawer button={FilterButton}>
            <Heading>Categorias</Heading>
            {categories.map((category, index) => (
                <Text
                    key={index}
                    m='.5rem 0'
                    hoverBg='primary05'
                    p='.5rem 1rem'
                    cursor='pointer'
                    transition
                    onClick={() => setCategory(category.id)}
                >{category.name}</Text>
            ))}
        </Drawer>
    )
}

export default Sidedrawer
