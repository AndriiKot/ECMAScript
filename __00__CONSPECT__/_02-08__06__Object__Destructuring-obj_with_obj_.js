const user = {
  name: { firstName: "Andrii", lastName: "Kot" },
  gitHub: "myGitHubPage",
};

const { name, gitHub } = user;
const { firstName, lastName } = name;

console.log(firstName, lastName, gitHub); // Andrii Kot myGitHubPage
