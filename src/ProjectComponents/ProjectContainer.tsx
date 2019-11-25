import React, { useState } from "react";
import { Button, Typography, Badge } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import ProjectsList from "../Projects/ProjectsInfo";

type badgeColor = "primary" | "default" | "error" | "secondary";
const badgeColors: badgeColor[] = ["secondary", "primary"];
type buttonColor = "primary" | "default" | "secondary" | "inherit";
const buttonColors: buttonColor[] = ["primary", "secondary"];
const projectTypes = Object.keys(ProjectsList);

const ProjectContainer = () => {
  const [projTitle, setProjTitle] = useState<string>("JavaScript");

  const ProjectSelection = (projectTypes: Array<string>) => {
    return projectTypes.map((type: string, index: number) => {
      const isSelected = type === projTitle;
      return (
        <span
          key={index}
          style={{
            margin: ".8em",
            marginBottom: "1.2em"
          }}
        >
          <Badge
            color={badgeColors[index % 2]}
            badgeContent={ProjectsList[type].length}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <Button
              variant="contained"
              color={buttonColors[index % 2]}
              key={index}
              onClick={() => setProjTitle(type)}
              style={{
                marginBottom: "1em",
                border: isSelected ? "1px solid white" : undefined,
                color: isSelected ? "white" : undefined,
                backgroundColor: isSelected ? "RGBa(21, 97, 21, .4)" : undefined
              }}
              disabled={isSelected}
            >
              {type}
            </Button>
          </Badge>
        </span>
      );
    });
  };

  const Projects = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          overflow: "scroll",
          border: "3px solid RGBA(188, 205, 224, .4)",
          height: "40vh",
          width: "90vw"
        }}
      >
        {ProjectsList[projTitle].map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      <aside>{ProjectSelection(projectTypes)}</aside>
      <Typography>
        Displaying ({ProjectsList[projTitle].length}) {projTitle} Projects
      </Typography>
      <div>{Projects()}</div>
    </React.Fragment>
  );
};

export default ProjectContainer;
