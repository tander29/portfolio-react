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

const ProjectCard = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <React.Fragment>
      <Card
        style={{
          minWidth: "100px",
          maxWidth: "200px",
          overflow: "auto"
        }}
      >
        <CardContent>
          <Typography variant="subtitle2">JS Maze</Typography>
          <Typography variant="caption" component="div">
            Description this is a thing that blah blahblahblahblah
          </Typography>
          <ButtonGroup
            style={{ margin: "auto", marginBottom: "0" }}
            size="small"
            variant="text"
            color="primary"
          >
            <Button size="small">Repo</Button>
            <Button href="https://tander29.github.io/checkers">Deployed</Button>
          </ButtonGroup>
          <ClickAwayListener onClickAway={() => setShowMore(false)}>
            <div>
              <Button size="small" onClick={toggleShowMore}>
                More
              </Button>
              <Collapse in={showMore}>
                <Typography>Hello</Typography>
              </Collapse>
            </div>
          </ClickAwayListener>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ProjectCard;
