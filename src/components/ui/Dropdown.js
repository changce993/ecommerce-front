import { useState } from 'react';
import { Dropdown } from "atomize";
import { Text } from './Text';

const BasicDropdown = ({ children, options, m }) => {

    const [ showDropdown, setShowDropdown ] = useState(false);
    if(children === undefined) children = 'Seleccione';
    if(options === undefined) options = ["Option 1", "Option 2", "Option 3"];

    const menuList = (
        <>
            {options.map((name, index) => (
                <Text
                    key={index}
                    p='.5rem'
                    m='.5rem'
                    hoverBg='primary10'
                    cursor='pointer'
                    transition
                >
                    {name}
                </Text>
            ))}
        </>
      );

    return (
      <Dropdown
        m={m}
        maxW='100%'
        isOpen={showDropdown}
        onClick={() => setShowDropdown(!showDropdown)}
        menu={menuList}
      >
        { children }
      </Dropdown>
    );
}

export default BasicDropdown;