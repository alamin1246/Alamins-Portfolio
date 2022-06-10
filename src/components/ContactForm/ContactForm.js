import emailjs from "emailjs-com";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const ContactForm = () => {
  const emailSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ty17fq9",
        "template_05s1scp",
        e.target,
        "smOhK3g97zy3QwCYc"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("message send successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" container px-8 text-white ">
      <h1 className=" text-white text-center">Contact With Me</h1>
      <Form onSubmit={emailSend} className=" border p-3 mb-5">
        <fieldset className="p-3">
          <legend></legend>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTextArea">
            <Form.Label>Write Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="message"
              type="password"
              required
              placeholder="Write your Message"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </fieldset>
      </Form>
    </div>
  );
};

export default ContactForm;
