import styled from 'styled-components';
import UseAnimations from 'react-useanimations';
import searchToX from 'react-useanimations/lib/searchToX';

const Input = styled.form`
    background-color: rgba(255,255,255,.1);
    width:20rem;
    max-width:100%;
    margin-top:2rem;
    display:flex;
    justify-content:center;
    align-items:center;

    input{
        background-color: transparent;
        width:100%;
        padding:1rem;
        outline:none;
        border:none;
        color:white;
    }
`

const Icon = styled(UseAnimations)`
    margin-right:.5rem;
`

const useSearchbar = (placeholder, searchFn) => {

    const Searchbar = () => (
        <Input>
            <input placeholder={placeholder} onChange={searchFn}/>
            <Icon animation={searchToX} size={40} strokeColor='white'/>
        </Input>
    )

    return {
        Searchbar
    }
}

export default useSearchbar
