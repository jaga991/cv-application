import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PreviewEducationExperience({
  previewInstitute,
  previewDuration,
  previewTitleStudy
}) {
  return (
    <Row>
        <Col>
          <h5>{previewInstitute}</h5>
          <p>Duration of Study: {previewDuration}</p>
          <p>Attainment: {previewTitleStudy}</p>
        </Col>
      </Row>
  );
}

export default PreviewEducationExperience;