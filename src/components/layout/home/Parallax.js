import { Parallax as ReactParallax } from 'react-parallax';
import { Div } from 'react-atomize';
import { Subtitle } from '../../ui/Text';

const Parallax = () => {

    const pathBg = '/assets/images/parallax.png'

    return (
        <ReactParallax bgImage={pathBg} bgImageAlt="apple store import" strength={200}>
            <Div h='80vh' className='container' d='flex' align='center' justify='center'>
                <Subtitle textColor='white'>Te vas a quedar con las ganas</Subtitle>
            </Div>
        </ReactParallax>
    )
}

export default Parallax
