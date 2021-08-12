import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormGroup from "react-bootstrap/FormGroup";

function EducationExperience({ id, updateIndividualEducationExperience }) {
  let idNum = id.slice((id.search(/\d/)), id.length);
  let formInstitutionNameId = `formInstitutionName-${idNum}`;
  let formDurationOfStudyId = `formDurationOfStudy-${idNum}`;
  let formTitleOfStudyId = `formTitleOfStudy-${idNum}`;

  return (
    <Form id={id}>
      <FormGroup className="mb-3" controlId ={formInstitutionNameId}>
        <FormLabel className="d-block">Institution Name</FormLabel>
        <FormControl 
          name="institution" 
          type="text" 
          placeholder="School of ABC" 
          onChange={updateIndividualEducationExperience}
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId ={formDurationOfStudyId}>
        <FormLabel className="d-block">Duration of study</FormLabel>
        <FormControl 
          name="duration" 
          type="text" 
          placeholder="1999-2004"
          onChange={updateIndividualEducationExperience} 
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId ={formTitleOfStudyId}>
        <FormLabel className="d-block">Title of study</FormLabel>
        <FormControl 
          name="titleStudy" 
          type="text" 
          placeholder="O-lvl, diploma, degree" 
          onChange={updateIndividualEducationExperience}
        />
      </FormGroup>
    </Form>
  )
}

export default EducationExperience;