import { Div } from 'react-atomize';
import { SkewBottom } from '../../ui/Skew';
import { Title, Text } from '../../ui/Text';
import Image from '../../ui/Image';

const Header = () => {
    return (
        <Div bg='white' pos='relative'>
            <Div
                className='container'
                minH='85vh'
                p='5rem 0'
                overflow='hidden'
                d='flex'
                flexDir='column'
                justify='center'
            >
                <Title
                    data-aos='fade-up'
                    textAlign='left'
                    m={{b:'2rem'}}
                    w={{xs:'100%',lg:'70%'}}
                    textSize={{xs:'F48',md:'F80'}}
                >Te traemos lo que quieras desde USA</Title>

                <Text
                    data-aos='fade-up'
                    data-aos-delay='150'
                    w={{xs:'100%',md:'50%'}}
                >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>

                <Div
                    pos='absolute'
                    bottom='0'
                    right='0'
                    w='40rem'
                    opacity={{xs:'.3',md:'.5',lg:'.7',xl:'.9'}}
                >
                    <Image
                        src='/assets/images/header.png'
                    />
                </Div>
            </Div>
            <SkewBottom />
        </Div>
    )
}

export default Header
