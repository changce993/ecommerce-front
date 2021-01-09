import { useState } from 'react';
import styled from 'styled-components';
import ButtonUI from './Button';
import { SideDrawer as BasicSideDrawer } from "atomize";

const Button = styled(ButtonUI)`
    button{
        color:${props => props.theme.colors.black80};
        border:1px solid white;
        box-shadow:3px 3px 6px rgba(0,0,0,.1), -3px -3px 6px white;

        :hover{
            border:1px solid #eee;
            box-shadow:0 0 6px rgba(0,0,0,.1), 0 0 6px white;
        }
    }
`

const SideDrawer = ({ isOpen, onClose, children }) => {
  return (
    <BasicSideDrawer isOpen={isOpen} onClose={onClose} onClick={() => onClose()}>
      {children}
    </BasicSideDrawer>
  );
};

const Drawer = ({ children, button }) => {

  const [ showSideDrawer, setShowSideDrawer ] = useState(false)

    return (
      <>
        <Button
          textColor={`${props => props.theme.colors.black60}`}
          neuphormism
          onClick={() => setShowSideDrawer(true)}
        >{button}</Button>
        
        <SideDrawer
          isOpen={showSideDrawer}
          onClose={() => setShowSideDrawer(false)}
        >{children}</SideDrawer>
      </>
    );
}

export default Drawer;