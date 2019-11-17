import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Typography,
  ClickAwayListener,
  ButtonGroup
} from "@material-ui/core";
import { ProjectI } from "../Projects/ProjectsInfo";

const ProjectCard = (project: ProjectI) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <React.Fragment>
      <Card
        style={{
          minWidth: "100px",
          maxWidth: "200px",
          overflow: "auto",
          marginTop: "1em"
        }}
      >
        <CardContent>
          <Typography variant="subtitle2">{project.title}</Typography>
          <Typography variant="caption" component="div">
            {project.description}
          </Typography>
          <ButtonGroup
            style={{ margin: "auto", marginBottom: "0" }}
            size="small"
            variant="text"
            color="primary"
          >
            <Button style={{ fontSize: ".6em" }}>Repo</Button>

            <Button
              // rel="noreferrer"
              href={project.deployUrl}
              // target="_blank"
              style={{ fontSize: ".6em" }}
            >
              Deployed
            </Button>
          </ButtonGroup>

          <ClickAwayListener onClickAway={() => setShowMore(false)}>
            <span>
              <Button size="small" onClick={toggleShowMore}>
                More
              </Button>
              <Collapse in={showMore}>
                <Typography>{project.description}</Typography>
              </Collapse>
            </span>
          </ClickAwayListener>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ProjectCard;
