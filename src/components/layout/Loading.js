import { Div } from 'react-atomize';
import { Text } from '../ui/Text';
import UseAnimation from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';

const Loading = () => {
    return (
        <Div h='calc(100vh - 5.4rem)' d='flex' flexDir='column' justify='center' align='center'>
            <Text>Cargando...</Text>
            <UseAnimation animation={infinity} size='48' autoplay='true' />
        </Div>
    )
}

export default Loading
