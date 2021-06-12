import Modal from 'react-bootstrap/Modal'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BaseModal = (props)  => {
  const onHide = () => {
    if (props.create) {
      props.updateFirstName('')
      props.updateLastName('')
      props.updateEmail('')
      props.updatePhone('' )
      props.updateAddress('')
    }
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="xlg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header && props.header}
          {props.title && props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Row>
              <Form.Group as={Col} className='form-group'>
                <Form.Control placeholder="First name"  className='form-control' value={props.firstName} onChange={e => {props.updateFirstName(e.target.value)}}/>
              </Form.Group>
              <Form.Group as={Col} className='form-group'>
                <Form.Control placeholder="Last name"  className='form-control' value={props.lastName} onChange={e => {props.updateLastName(e.target.value)}}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Control type="email" placeholder="Email" value={props.email} onChange={e => {props.updateEmail(e.target.value)}}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Control type="phone" placeholder="Phone number(+2348180854296)" value={props.phone} onChange={e => {props.updatePhone(e.target.value)}}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Control placeholder="Address" value={props.address} onChange={e => {props.updateAddress(e.target.value)}}/>
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Close</Button>
        <Button variant="success" onClick={props.create ? props.handleCreate: props.handleEdit} disabled={(!props.firstName || !props.lastName || !props.phone) ? true : false}>{props.btnText}</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default BaseModal