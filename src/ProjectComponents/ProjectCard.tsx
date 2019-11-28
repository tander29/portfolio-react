import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Typography,
  ClickAwayListener,
  ButtonGroup
  // Slide
} from "@material-ui/core";
import { ProjectI } from "../Projects/ProjectsInfo";

const ProjectCard = (project: ProjectI) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    // <Slide in={true} direction="up" style={{ transitionDelay: "200ms" }}>
    <Card
      style={{
        minWidth: "100px",
        maxWidth: "200px",
        overflow: "auto",
        margin: ".75em"
      }}
    >
      <CardContent>
        <Typography variant="subtitle2">{project.title}</Typography>
        <Typography
          style={{
            textOverflow: "ellipsis",
            maxHeight: "40px",
            overflow: "hidden"
          }}
          variant="caption"
          component="div"
        >
          {project.description.length < 40 ? project.description : ""}
          {!showMore ? project.description.slice(0, 40) + "..." : ""}
        </Typography>
        <Collapse in={showMore}>
          <Typography variant="caption" component="div">
            {showMore ? project.description : ""}
          </Typography>
        </Collapse>

        <ButtonGroup
          style={{ margin: "auto", marginBottom: "0" }}
          size="small"
          variant="text"
          color="primary"
        >
          <Button
            href={project.repoUrl}
            target="blank"
            style={{ fontSize: ".6em" }}
          >
            Repo
          </Button>

          {project.deployUrl ? (
            <Button href={project.deployUrl} style={{ fontSize: ".6em" }}>
              Deployed
            </Button>
          ) : null}
        </ButtonGroup>
        <ClickAwayListener onClickAway={() => setShowMore(false)}>
          <span>
            <Button size="small" onClick={toggleShowMore}>
              {!showMore ? "More" : "Hide"}
            </Button>
          </span>
        </ClickAwayListener>
      </CardContent>
    </Card>
    // </Slide>
  );
};

export default ProjectCard;
