const inquirer = require("inquirer");

const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { json } = require("stream/consumers");

inquirer
  .prompt([
    {
      type: "list",
      message: "what is the employees role?",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role",
    },
    {
      type: "input",
      message: "What is the employees name?",
      name: "employeeName",
    },
    {
      type: "input",
      message: "what is the employees ID?",
      name: "id",
    },
    {
      type: "input",
      message: "what is the employees email address?",
      name: "email",
    },
    // {
    //   type: "input",
    //   message: "Enter the employees office number:",
    //   name: "office",
    // },
    // {
    //   type: "input",
    //   message: "Please enter the employees gitHub:",
    //   name: "gitHub",
    // },
    // {
    //   type: "input",
    //   message: "Please enter the employees school:",
    //   name: "school",
    // },
  ])

  .then((response) => {
    if (response.role === "Manager") {
      inquirer.prompt({
        type: "input",
        message: "what is your office number?",
        name: "office",
      });
    } else if (response.role === "Engineer") {
      inquirer.prompt({
        type: "input",
        message: "what is your gitHub?",
        name: "gitHub",
      });
    } else if (response.role === "Intern") {
      inquirer.prompt({
        type: "input",
        message: "what is your school?",
        name: "school",
      });
    }
  })
  .then((response) => writeHTMLfile(response));

var writeHTMLfile = function (response) {
  fs.writeFile("index.html", writeHTML(response), (err) =>
    err ? console.error(err) : console.log("successfully written index.html!")
  );
};

const writeHTML = function (response) {
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
        <div class="employee-card">
          <div class="card-header">
            ${response.employeeName}
            <br />
            ${data.role}
          </div>
          <div class="employee-info">
            <ul>
              <li>${response.id}</li>
              <li>${response.email}</li>
              <li>${response.office}</li>
            </ul>
          </div>
        </div>
      </section>
    </body>
  </html>
  `;
  return HTML;
};
