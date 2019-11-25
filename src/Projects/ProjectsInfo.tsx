export interface ProjectI {
  title: string;
  repoUrl: string;
  deployUrl?: string;
  picture?: string;
  description: string;
}

export interface ProjectListsI {
  [key: string]: ProjectI[];
}

const ProjectLists: ProjectListsI = {
  JavaScript: [
    {
      title: "Checkers",
      deployUrl: "https://tander29.github.io/checkers",
      repoUrl: "https://github.com/tander29/checkers",
      picture: "checker.jpg",
      description:
        "JS object oriented programming using prototypical class structure"
    },
    {
      title: "Sokoban",
      deployUrl: "https://tander29.github.io/sokoban",
      repoUrl: "https://github.com/tander29/sokoban",
      picture: "sokabon.jpg",
      description: "Basic game and logic usage"
    },
    {
      title: "Jeopardy",
      deployUrl: "https://tander29.github.io/team-jeopardy",
      repoUrl: "https://github.com/tander29/team-jeopardy",
      description:
        "Game of jeopardy, integrate with 2 different API's, one for questions answers and points, and DuckDuckGo to search for more info on the correct answer."
    }
  ],
  React: [
    {
      title: "Kwitter",
      deployUrl: "https://tander29.github.io/kwitter",
      repoUrl: "https://github.com/tander29/kwitter",
      description:
        "MVP for Twitter, created Front End to integrate with backend API"
    },
    {
      title: "Book Buddy",
      deployUrl: "https://tander29.github.io/bookbuddies",
      repoUrl: "https://github.com/tander29/bookbuddies",
      description: "Social platform for exchanging books"
    },
    {
      title: "portfolio-react",
      repoUrl: "https://github.com/tander29/portfolio-react",
      description:
        "This site is TypeScript/React, with clean code in mind.  Component libary is Material-ui.  Both TypeScript and Material-Ui were 100% self taught."
    }
  ],
  Python: [
    {
      title: "Slack Twitter Bot",
      repoUrl: "https://github.com/tander29/slacktweet",
      description:
        "Slack bot that takes input in channel, searches new twitter posts for keywords, posts tweets back in slack"
    }
  ],
  Django: [
    {
      title: "Kreddit",
      repoUrl: "https://github.com/tander29/kreddit",
      description:
        "MVP For a reddit off brand, django app contained in a basic Docker set up.  Users can post, upvote, routing, auth/user session security"
    }
  ],
  TypeScript: [
    {
      title: "portfolio-react",
      repoUrl: "https://github.com/tander29/portfolio-react",
      description:
        "This site is TypeScript/React, with clean code in mind.  Component libary is Material-ui.  Both TypeScript and Material-Ui were 100% self taught."
    }
  ],
  Node: [
    {
      title: "Book Buddy Back End",
      repoUrl: "https://github.com/tander29/bookbuddy-api",
      description:
        "Back end for Book body website, uses Node.JS, Postgres, and hosted on heroku"
    }
  ]
};

export default ProjectLists;
