import React from "react";
import { Avatar } from "@material-ui/core";
import picture from "../Media/selfportrait.jpg";

const GeneralDescription = `
I am software developer and proud to have gotten here as a career changer.  I came here from a biotech background working in as a lab technician doing Agricultural Research 
to now where I creating high quality code.  I attended a 1 year coding academy, where I had the opportunity to be hired as a coach there, help out students in my cohort and others,
and facilitate our capstone projects as a scrum master/lead developer.  I still off mentorship to those who ask.  Currently I work apart of Home Advisor/Angie's List within the Angie's List brand name
as a full stack developer, working between a React Front End and a Scala backend.
`;

const About = () => {
  return (
    <React.Fragment>
      <h1 id="about">ABOUT</h1>
      <div
        style={{
          display: "flex",
          width: "90vw",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ width: "30%" }}>
          <Avatar
            style={{ marginLeft: "4em", width: "8em", height: "8em" }}
            alt="work"
            src={picture}
          >
            TMA
          </Avatar>
        </div>
        <div style={{ width: "70%" }}>{GeneralDescription}</div>
      </div>
    </React.Fragment>
  );
};

export default About;
