import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import CVPreview from "./components/CVPreview";
import UserInput from "./components/UserInput";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styleApp.css"

import defaultPhoto from "../src/resources/selfPhoto.jpg";

function App() {
  //Personal Information
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("JSSmith@abc.com");
  const [phoneNumber, setPhoneNumber] = useState(12345678);
  const [address, setAddress] = useState("123 Main St Anytown, USA");
  const [photo, setPhoto] = useState(defaultPhoto);

  //Education Experience
  const [educationExperience, setEducationExperience] = useState([{ id: 'education0', institution: "School of CCC", duration: "1999-2004", titleStudy:"Degree in ABC" }])
  let educationCounter = 0;

  //Practical Experience
  const [practicalExperience, setPracticalExperience] = useState([{id: 'practical0', companyName: "ABC", positionTitle:"Sales Manager", jobDetail: "Manage clients, organize meets", otherDetail: "Best Salesman award 2020"}])
  let practicalCounter = 0;

  //Personal Information Methods
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const updateAddress = (e) => {
    setAddress(e.target.value);
  };
  const updatePhoto = (e) => {
    console.log(e.target.files[0])
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      setPhoto(reader.result);
    });
  }; 

  //Education Experience Methods
    //for Add button
  const updateEducationExperience = (e) => {
    educationCounter++
    setEducationExperience(educationExperience => [...educationExperience, { id: `education${educationCounter}`, institution: "School of BCD", duration: "1234", titleStudy:"olvl" }])
  }
    //for Delete button
  const deleteEducationExperience = (e) => {
    let targetParentId = e.target.parentElement.id.slice()
    let copyArr = educationExperience.filter(item => item.id != targetParentId);
    setEducationExperience(copyArr);
  };
    //update each key in educationExperience object base on id
  const updateIndividualEducationExperience = (e) => {
    //get id number using - as stop
    let targetIdNum = e.target.id.slice(e.target.id.indexOf("-") + 1, e.target.id.length);
    let targetId = `education${targetIdNum}`;
    //get key value of target
    let targetKey = e.target.getAttribute("name");
    //get input value of target
    let targetValue = e.target.value;
    //create a copy of original state
    let copyArr = educationExperience.map(item => {
      console.log(item)
      if(item.id == targetId) {
        //need to do switch case as setting targetKey creates a new key instead of replacing
        switch(targetKey) {
          case "institution":
            return {...item, institution: targetValue};
            break;
          case "duration":
            return {...item, duration: targetValue};
            break;
          case "titleStudy":
            return {...item, titleStudy: targetValue};
            break;
        }
      }
      return item;
    });
    //then replace previous state with updated copy
    setEducationExperience(copyArr);
  }; 

  //Practical Experience Methods
    //For Add Button
    const updatePracticalExperience = (e) => {
      practicalCounter++
      setPracticalExperience(practicalExperience => [...practicalExperience, { id: `practical${practicalCounter}`, companyName: "ABC Company", positionTitle: "Inset Title here", jobDetail:"NIL", otherDetail: "NIL" }])
    };
    //For Delete Button
    const deletePracticalExperience = (e) => {
      let targetParentId = e.target.parentElement.id.slice()
      let copyArr = practicalExperience.filter(item => item.id != targetParentId);
      setPracticalExperience(copyArr);
    }

    //update each key in practicalExperience object base on id
    const updateIndividualPracticalExperience = (e) => {
      //get id number using - as stop
      let targetIdNum = e.target.id.slice(e.target.id.indexOf("-") + 1, e.target.id.length);
      let targetId = `practical${targetIdNum}`;
      //get key value of target
      let targetKey = e.target.getAttribute("name");
      //get input value of target
      let targetValue = e.target.value;
      //create a copy of original state
      let copyArr = practicalExperience.map(item => {
        console.log(item)
        if(item.id == targetId) {
          //need to do switch case as setting targetKey creates a new key instead of replacing
          switch(targetKey) {
            case "companyName":
              return {...item, companyName: targetValue};
              break;
            case "positionTitle":
              return {...item, positionTitle: targetValue};
              break;
            case "jobDetail":
              return {...item, jobDetail: targetValue};
              break;
            case "otherDetail":
              return {...item, otherDetail: targetValue};
              break;
          }
        }
        return item;
      });
      //then replace previous state with updated copy
      setPracticalExperience(copyArr);
    };

  return (
    <Container fluid className="main-background min-vh-100">
      <header>
        <h1 className="text-center text-white">CV Application</h1>
      </header>
      <UserInput 
        updateName={updateName}
        updateEmail={updateEmail}
        updatePhoneNumber={updatePhoneNumber}
        updateAddress={updateAddress}
        updatePhoto={updatePhoto}
        updateEducationExperience={updateEducationExperience}
        updateIndividualEducationExperience={updateIndividualEducationExperience}
        deleteEducationExperience={deleteEducationExperience}
        educationExperience={educationExperience}

        updatePracticalExperience={updatePracticalExperience}
        updateIndividualPracticalExperience={updateIndividualPracticalExperience}
        deletePracticalExperience={deletePracticalExperience}
        practicalExperience={practicalExperience}
      />
      <CVPreview 
        previewName={name}
        previewEmail={email}
        previewPhoneNumber={phoneNumber}
        previewAddress={address}
        previewPhoto={photo}
        previewEducationExperience={educationExperience}
        previewPracticalExperience={practicalExperience}
        
      />
    </Container>
  );
}

export default App;
