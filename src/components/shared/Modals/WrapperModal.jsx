import { Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

const WrapperModal = (props) => (
  <Modal
    show={props.show}
    onHide={props.onClose}
    className={props.styles ? props.styles : ""}
    centered={props.centered}
    backdrop="static"
  >
    {props.header.exist && <ModalHeader>{props.header.component}</ModalHeader>}
    <ModalBody>{props.children}</ModalBody>
    {props.footer.exist && <ModalFooter>{props.footer.component}</ModalFooter>}
  </Modal>
);

export default WrapperModal;
