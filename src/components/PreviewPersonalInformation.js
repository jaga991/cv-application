import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const selfPhoto = false;

function PreviewPersonalInformation({
  previewName,
  previewEmail,
  previewPhoneNumber,
  previewAddress,
  previewPhoto
}) {

  return(
    <Row className="bg-white">
      <Col className="d-flex flex-column justify-content-center" xs={6}>
        <h2>Name: {previewName}</h2>
        <h2>Email: {previewEmail}</h2>
        <h3>Phone Number: {previewPhoneNumber}</h3>
        <h4>Address: {previewAddress}</h4>
      </Col>
      <Col className="d-flex justify-content-center">
        <Image 
          src={previewPhoto} 
          
        />
      </Col>
    </Row>
  );
}

export default PreviewPersonalInformation;