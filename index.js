const inquirer = require("inquirer");

const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//Array for pushing new team members

let teamMembers = [];

//Add manager prompting function
addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your manager's Name:",
        name: "name",
      },
      {
        type: "input",
        message: "what is the manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "what is the manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "what is the manager office number?",
        name: "officeNumber",
      },
    ])

    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamMembers.push(manager);

      addToTeam();
    });
};

//Add Engineer function

addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your Engineer's Name:",
        name: "name",
      },
      {
        type: "input",
        message: "what is the Engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "what is the Engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "what is the Engineer's GitHub userName?",
        name: "gitHub",
      },
    ])

    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.gitHub
      );
      teamMembers.push(engineer);

      addToTeam();
    });
};

//Add intern prompting function

addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your Intern's Name:",
        name: "name",
      },
      {
        type: "input",
        message: "what is the Intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "what is the Intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "what school is the Intern attending?",
        name: "school",
      },
    ])

    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamMembers.push(intern);

      addToTeam();
    });
};

//Prompt for forking path
addToTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a new team member?",
        name: "profileOptions",
        choices: ["Add Engineer", "Add Intern", "Generate Team Profile"],
      },
    ])
    .then((data) => {
      if (data.profileOptions === "Add Engineer") {
        addEngineer();
      } else if (data.profileOptions === "Add Intern") {
        addIntern();
      } else {
        teamProfileGenerator();
      }
    });
};

//
teamBuilder = (teamMembers) => {
  //uses card generator function for each member of team in teamMembers Array
  let cardHTML = "";
  teamMembers.forEach(cardGenerator);

  function cardGenerator(item) {
    let employeeInformation = "";
    if (item.getRole() === "Engineer") {
      employeeInformation = `GitHub: <a href="https://github.com/${item.gitHub}" target="_blank"> ${item.gitHub}</a>`;
    } else if (item.getRole() === "Intern") {
      employeeInformation = `School: ${item.school}`;
    } else {
      employeeInformation = `Office #: ${item.officeNumber}`;
    }
    cardHTML += `
<div class="employee-card">
<div class="card-header" id = "employee-name">
  ${item.name}
  <br />
  <div id = "role">${item.getRole()}</div>
</div>
<div class="employee-info">
  <ul>
    <li>Employee ID: ${item.id}</li>
    <li>Email: <a href = "mailto:${item.email}">${item.email}</a></li>
    <li>${employeeInformation}</li>
  </ul>
</div>
</div>`;
  }
  return cardHTML;
};

teamProfileGenerator = () => {
  console.log(teamMembers);
  const HTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./Assets/reset.css" />
      <link rel="stylesheet" href="./Assets/style.css" />
      <title>My Team</title>
    </head>
    <body>
      <header>
        <nav>My Team</nav>
      </header>
  <main>
      <section>

      ${teamBuilder(teamMembers)}


      </section>
      </main>
    </body>
  </html>`;

  fs.writeFile("./dist/teamProfile.html", HTML, (err) =>
    err
      ? console.error(err)
      : console.log("successfully written teamProfile.html!")
  );
};

addManager();
