import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import PreviewPersonalInformation from "./PreviewPersonalInformation";
import PreviewEducationExperience from "./PreviewEducationExperience";
import PreviewPracticalExperience from "./PreviewPracticalExperience";

function CVPreview({
  previewName,
  previewEmail,
  previewPhoneNumber,
  previewAddress,
  previewPhoto,
  previewEducationExperience,
  previewPracticalExperience
}) {

  function returnPreviewEducationExperience() {
    let componentArr = [];
    for (let i = 0; i < previewEducationExperience.length; i++) {
      componentArr.push(<PreviewEducationExperience 
        previewInstitute={previewEducationExperience[i].institution}
        previewDuration={previewEducationExperience[i].duration}
        previewTitleStudy={previewEducationExperience[i].titleStudy}
      />);
    }
    return componentArr;
  }
  
  function returnPreviewPracticalExperience() {
    let componentArr = [];
    for (let i = 0; i < previewPracticalExperience.length; i++) {
      componentArr.push(<PreviewPracticalExperience 
        previewCompanyName={previewPracticalExperience[i].companyName}
        previewPositionTitle={previewPracticalExperience[i].positionTitle}
        previewJobDetail={previewPracticalExperience[i].jobDetail}
        previewOtherDetail={previewPracticalExperience[i].otherDetail}
      />);
    }
    return componentArr;
  }

  useEffect(() => {
    returnPreviewPracticalExperience();
  })

  useEffect(() => {
    returnPreviewEducationExperience();
  })

  return(
    <Container className="bg-secondary vh-100">
      <PreviewPersonalInformation 
        previewName={previewName}
        previewEmail={previewEmail}
        previewPhoneNumber={previewPhoneNumber}
        previewAddress={previewAddress}
        previewPhoto={previewPhoto}
      />

      <h1>Education</h1>
      {returnPreviewEducationExperience()}
      
      <h1>Practical Experience</h1>
      {returnPreviewPracticalExperience()}
    </Container>

  );
}

export default CVPreview;