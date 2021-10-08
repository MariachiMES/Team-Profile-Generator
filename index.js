const inquirer = require("inquirer");

const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//Array for pushing new team members

const teamMembers = [];

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
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    teamMembers.push(manager);

    addToTeam();
  })}

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
      const engineer = new Engineer(data.name, data.id, data.email, data.gitHub);
      teamMembers.push(engineer);
  
      addToTeam();
    })}

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
        })}

//Prompt for forking path
addToTeam = () => {
      inquirer.prompt([{
      type: 'list',
      message: 'Would you like to add a new team member?',
      name: 'profileOptions',
      choices: ['Add Engineer', 'Add Intern', 'Generate Team Profile']
    }
    ])
    .then((data) => {
    if (data.profileOptions === 'Add Engineer') {
      addEngineer();
      } else if (data.profileOptions === 'Add Intern') {
      addIntern();
    } else {
    teamProfileGenerator();
    }
  });
  }

//


  .then((response) => writeHTMLfile(response));

var writeHTMLfile = function (response) {
  
};

teamProfileGenerator = () => {

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
  
      <section>

      ${teamBuilder(teamMembers)}


      </section>
    </body>
  </html>`;

  fs.writeFile("teamProfile.html", HTML, (err) =>
    err ? console.error(err) : console.log("successfully written teamProfile.html!")
  );
};

teamBuilder = () => {




}

<div class="employee-card">
<div class="card-header">
  ${response.employee}
  <br />
  ${response.role}
</div>
<div class="employee-info">
  <ul>
    <li>${response.id}</li>
    <li>${response.email}</li>
    <li>${response.office}</li>
  </ul>
</div>
</div>