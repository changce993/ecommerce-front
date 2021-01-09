import { Div } from 'react-atomize';
import { Text } from '../../ui/Text';

const Sidebar = () => {
    return (
        <Div bg='' h='calc(100vh - 5.5rem)' className='overflow-y' p='2rem'>
            {[...Array(10)].map((category, index) => (
                <Text key={index}>Categoria {index}</Text>
            ))}
        </Div>
    )
}

export default Sidebar
