import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import PersonalInformation from "./PersonalInformation";
import EducationExperience from "./EducationExperience";
import PracticalExperience from "./PracticalExperience";


import uniqid from 'uniqid';

function UserInput({
  updateName,
  updateEmail,
  updatePhoneNumber,
  updateAddress,
  updatePhoto,
  updateEducationExperience,
  updateIndividualEducationExperience,
  deleteEducationExperience,
  educationExperience,
  updatePracticalExperience,
  updateIndividualPracticalExperience,
  deletePracticalExperience,
  practicalExperience
}) {

  function returnEducationExperience() {
    let componentArr = [];
    for (let i = 0; i < educationExperience.length; i++) {
      componentArr.push(<EducationExperience 
        updateIndividualEducationExperience={updateIndividualEducationExperience}
        deleteEducationExperience={deleteEducationExperience} 
        id = {educationExperience[i].id}
        key = {educationExperience[i].id}

      />);
    }
    return componentArr;
  }

  function returnPracticalExperience() {
    let componentArr = [];
    for (let i = 0; i < practicalExperience.length; i++) {
      componentArr.push(<PracticalExperience 
        updateIndividualPracticalExperience={updateIndividualPracticalExperience}
        deletePracticalExperience={deletePracticalExperience}
        id = {practicalExperience[i].id}
        key = {practicalExperience[i].id}
      />)
    }
    return componentArr;
  }

  useEffect(() => {
    returnPracticalExperience();
  })

  useEffect(() => {
    returnEducationExperience();
  });

  return(
    <Container className="secondary-background">
      <h1 className="text-center secondary-header">Personal Information</h1>
      <PersonalInformation 
        updateName={updateName}
        updateEmail={updateEmail}
        updatePhoneNumber={updatePhoneNumber}
        updateAddress={updateAddress}
        updatePhoto={updatePhoto}
      />

      <h1 className="text-center secondary-header">Education Experience</h1>
      <Container>
        {returnEducationExperience()}
      </Container>
      
      
      <Button onClick={updateEducationExperience}>Add New Education Experience</Button>
      
      <h1 className="text-center secondary-header">Practical Experience</h1>
      <Container>
        {returnPracticalExperience()}
      </Container>
      <Button onClick={updatePracticalExperience}>Add New Practical Experience</Button>
      
    </Container>
  );
}

export default UserInput;