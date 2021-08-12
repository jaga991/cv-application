import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function PreviewPracticalExperience({
  previewCompanyName,
  previewPositionTitle,
  previewJobDetail,
  previewOtherDetail
}) {
  return (
    <Row>
      <h5>{previewCompanyName}</h5>
      <p>Title: {previewPositionTitle}</p>
      <p>Details: {previewJobDetail}</p>
      <p>Others: {previewOtherDetail}</p>
    </Row>
  );
}

export default PreviewPracticalExperience;