const user = {
  name: { firstName: "Andrii", lastName: "Kot" },
  gitHub: "myGitHubPage",
};

const {
  name: { firstName, lastName },
  gitHub,
} = user;

console.log(firstName, lastName, gitHub); // Andrii Kot myGitHubPage
