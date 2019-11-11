import React from "react";
import { Button, Typography } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
const projectTypes = ["javascript", "react.js", "python", "django", "go"];

const projectSelection = (projectTypes: Array<string>) => {
  return projectTypes.map((type: string) => <Button>{type}</Button>);
};

const ProjectContainer = () => {
  return (
    <React.Fragment>
      <Typography>Currently Viewing JS projects</Typography>
      <aside>{projectSelection(projectTypes)}</aside>
      <ProjectCard />
    </React.Fragment>
  );
};

export default ProjectContainer;
