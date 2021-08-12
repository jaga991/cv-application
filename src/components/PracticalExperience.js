import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";

function PracticalExperience({id, updateIndividualPracticalExperience}) {
  let idNum = id.slice((id.search(/\d/)), id.length);
  let formCompanyNameId = `formCompanyName-${idNum}`;
  let formPositionTitleId = `formPositionTitle-${idNum}`;
  let formJobDetailId = `formJobDetail-${idNum}`;
  let formOtherDetailId = `formOtherDetail-${idNum}`;

  return(
    <Form id={id}>
      <FormGroup className="mb-3" controlId={formCompanyNameId}>
        <FormLabel className="d-block">Company Name</FormLabel>
        <FormControl
          name="companyName"
          type="text" 
          placeholder="ABC Corporation" 
          onChange={updateIndividualPracticalExperience}
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId={formPositionTitleId}>
        <FormLabel className="d-block">Position Title</FormLabel>
        <FormControl 
          name="positionTitle"
          type="text" 
          placeholder="Sales Manager" 
          onChange={updateIndividualPracticalExperience}
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId={formJobDetailId}>
        <FormLabel className="d-block">Job Detail</FormLabel>
        <FormControl 
          name="jobDetail"
          type="text" 
          placeholder="Manage clients, hold meetings"
          onChange={updateIndividualPracticalExperience} 
        />
      </FormGroup>
      
      <FormGroup className="mb-3" controlId={formOtherDetailId}>
        <FormLabel className="d-block">Other Details</FormLabel>
        <FormControl 
          name="otherDetail"
          as="textarea" 
          placeholder="Won best Salesman award, have major clients etc..." 
          onChange={updateIndividualPracticalExperience}
        />
      </FormGroup>
    </Form>
  );
}

export default PracticalExperience;