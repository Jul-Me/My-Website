import React, { useState } from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone, faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Controls } from '../../types/Controls';
import { ContactFormData } from '../../types/ContactFormData';
import { Sections } from '../../types/Sections';
import './Contact.scss';

function Contact(): JSX.Element {
  const [validated, setValidated] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const renderGetInTouch = () => (
    <>
      <h2 className="mb-5">Get in touch</h2>

      <div className="contact-get-in-touch">
        <FontAwesomeIcon icon={faSquarePhone} size="2x" />
        <div className="contact-info">
          <span>Call me:</span>
          <span>+44 (0)79 4346 8220</span>
        </div>
      </div>

      <div className="contact-get-in-touch">
        <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
        <div className="contact-info">
          <span>Let's chat:</span>
          <span>memai.julian@gmail.com</span>
        </div>
      </div>
    </>
  );

  const renderDropMeALine = () => (
    <>
      <h2 className="mb-5">Drop me a line</h2>

      <Form name="contact" noValidate validated={validated} onSubmit={handleSubmit} method="post" className="mb-3">
        <input type="hidden" name="form-name" value="contact" />
        <Row className="mb-3">
          <Col md className="mb-3 mb-md-0">
            <FloatingLabel controlId={Controls.name} label="Your name">
              <Form.Control type="text" placeholder="name" required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
            </FloatingLabel>
          </Col>

          <Col md>
            <FloatingLabel controlId={Controls.phone} label="Phone">
              <Form.Control type="tel" placeholder="+44 000 0000 0000" />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg>
            <FloatingLabel controlId={Controls.email} label="Email address">
              <Form.Control type="email" placeholder="name@example.com" required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter your email address.</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg>
            <FloatingLabel controlId={Controls.message} label="Message">
              <Form.Control as="textarea" placeholder="message" required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter your message.</Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-end align-items-center">
            <button type="submit" className="button">
              <FontAwesomeIcon icon={faPaperPlane} size="1x" />
              &nbsp;<span>Send</span>
            </button>
          </Col>
        </Row>
      </Form>

      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
    </>
  );

  const createQueryParamsFromObject = (data: ContactFormData & { 'form-name': string }) => {
    return Object.keys(data)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent((data as any)[key]);
      })
      .join('&');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const values: ContactFormData = {
        name: event.target[Controls.name].value,
        phone: event.target[Controls.phone].value,
        email: event.target[Controls.email].value,
        message: event.target[Controls.message].value,
      };

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: createQueryParamsFromObject({ 'form-name': 'contact', ...values }),
      })
        .then(() => {
          setSuccessMsg(`Thanks for reaching out. I'll get back to you soon.`);
        })
        .catch(() => {
          setErrorMsg('Oops, something went wrong. The form could not be submitted. Please try again.');
        });
    }

    setValidated(true);
  };

  return (
    <section className="contact" id={Sections.CONTACT}>
      <Container>
        <Row>
          <Col lg={6} md={12} className="contact-left-col pe-5">
            {renderGetInTouch()}
          </Col>

          <Col lg={6} md={12} className="ps-lg-5">
            {renderDropMeALine()}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
