import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";
import FormText from "react-bootstrap/FormText";

function PersonalInformation({
  updateName,
  updateEmail,
  updatePhoneNumber,
  updateAddress,
  updatePhoto
}) {
  return(
    <Container>
      <Form>
        <FormGroup className="mb-3" controlId ="formName">
          <FormLabel>Name</FormLabel>
          <FormControl 
            type="text" 
            placeholder="John Smith"
            onChange={updateName}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId ="formEmail">
          <FormLabel>Email</FormLabel>
          <FormControl 
            type="email" 
            placeholder="JSmith@abc.com" 
            onChange={updateEmail}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId ="formPhoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <FormControl 
            type="tel" 
            placeholder="12345678" 
            onChange={updatePhoneNumber}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId ="formAddress">
          <FormLabel>Address</FormLabel>
          <FormControl 
            type="text" 
            placeholder="12345678" 
            onChange={updateAddress}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId ="formSelfPhoto">
          <FormLabel className="d-block">Self Photo</FormLabel>
          <FormControl 
            type="file"
            aria-describedby="photoTypeOnly"
            onChange={updatePhoto}
          />
          <FormText className="d-block" id="photoTypeOnly" muted>
            only accept jpeg and png photos
          </FormText>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default PersonalInformation;