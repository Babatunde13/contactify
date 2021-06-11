import Modal from 'react-bootstrap/Modal'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react'

const EditContactModal = props  => {
  const [firstName, setFirstName] = useState(props.firstname)
  const [lastName, setLastName] = useState(props.lastname) 
  const [email, setEmail] = useState(props.email)
  const [company, setCompany] = useState(props.company) 
  const [jobTitle, setJobTitle] = useState(props.jobtitle) 
  const [phone, setPhone] = useState(props.phone) 
  const [address, setAddress] = useState(props.address)

  const onEdit = () => {
    const payload = {
      firstName,
      lastName,
      email,
      company,
      jobTitle,
      phone, 
      address
    }
    props.onEdit(payload)
  }

  return (
    <Modal
      {...props}
      size="xlg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Row>
              <Form.Group as={Col}>
                <Form.Control placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Control type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Control type="phone" value={phone} placeholder="Phone number(+2348180854296)" onChange={(e) => setPhone(e.target.value)}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Control placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Control placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)}/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}/>
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
        <Button variant="success" onClick={onEdit} disabled={(!firstName || !lastName || !phone) ? true : false}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default EditContactModal