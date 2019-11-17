import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import ProjectsList from "../Projects/ProjectsInfo";

// const projectTypes = ["javascript", "react.js", "python", "django", "go"];
const projectTypes = Object.keys(ProjectsList);

const ProjectContainer = () => {
  const [projTitle, setProjTitle] = useState<string>("JavaScript");

  const ProjectSelection = (projectTypes: Array<string>) => {
    return projectTypes.map((type: string, index: number) => (
      <Button key={index} onClick={() => setProjTitle(type)}>
        {type}
      </Button>
    ));
  };

  const Projects = () => {
    return ProjectsList[projTitle].map((project, _) => (
      <ProjectCard key={_} {...project} />
    ));
  };

  return (
    <React.Fragment>
      <Typography>Currently Viewing {projTitle}</Typography>
      <aside>{ProjectSelection(projectTypes)}</aside>
      {Projects()}
    </React.Fragment>
  );
};

export default ProjectContainer;
