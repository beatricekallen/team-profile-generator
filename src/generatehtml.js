const generateHtml = (teamManager, allEngineers, allInterns) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <body>
        ${generateManager(teamManager)}
        ${generateEngineers(allEngineers)}
        ${generateInterns(allInterns)}
    </body>
    </html>`;
};

const generateManager = (teamManager) => {
  return `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${this.manager.name}</p>
        <p class="card-text">Employee ID: ${this.manager.id}</p>
        <p class="card-text">Email address: ${this.manager.email}</p>
        <p class="card-text">Office number: ${this.manager.officeNumber}</p>
      </div>
    </div>`;
};

const generateEngineers = (allEngineers) => {
  return `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        ${allEngineers.map(
          (engineer) => `<p class="card-text">Name: ${engineer.name}`
        )}</p>
        ${allEngineers.map(
          (engineer) => `<p class="card-text">Employee ID: ${engineer.id}`
        )}</p>
        ${allEngineers.map(
          (engineer) => `<p class="card-text">Email address: ${engineer.email}`
        )}</p>
        ${allEngineers.map(
          (engineer) => `<p class="card-text">Name: ${engineer.github}`
        )}</p>
      </div>
    </div>`;
};

const generateInterns = (allInterns) => {
  return `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        ${allInterns.map(
          (intern) => `<p class="card-text">Name: ${intern.name}`
        )}</p>
        ${allInterns.map(
          (intern) => `<p class="card-text">Employee ID: ${intern.id}`
        )}</p>
        ${allInterns.map(
          (intern) => `<p class="card-text">Email address: ${intern.email}`
        )}</p>
        ${allInterns.map(
          (intern) => `<p class="card-text">School: ${intern.school}`
        )}</p>
      </div>
    </div>`;
};

module.exports = generateHtml;
