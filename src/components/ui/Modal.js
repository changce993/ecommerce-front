import { useState } from 'react';
import { Modal as ModalAtomize, Col } from "atomize";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalAtomize
      isOpen={isOpen}
      onClose={onClose}
      align="center"
      rounded="md"
      w='50rem'
      maxW={{xs:'100%',sm:'70%',md:'100%'}}>
      {children}
    </ModalAtomize>
  );
};

const Button = ({ children, modalChildren }) => {

    const [ showModal, setShowModal ] = useState(false);

    return (
      <>
        <Col
          onClick={() => setShowModal(true)}
          size={{xs:12,sm:6,lg:4,xl:3}}
        >{children}</Col>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >{modalChildren}</Modal>
      </>
    );
}

export default Button;