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
    }
  ],
  React: [
    {
      title: "Kwitter",
      deployUrl: "https://tander29.github.io/kwitter",
      repoUrl: "https://github.com/tander29/kwitter",
      description:
        "MVP for Twitter, created Front End to integrate with backend API"
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
  ]
};

export default ProjectLists;
