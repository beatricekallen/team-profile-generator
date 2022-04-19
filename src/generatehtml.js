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
    <body class="min-100-vh">
    <header>
      <h1 class="bg-success text-light mb-3 p-3 text-center">My Team</h1>
    </header>
    <main>
    <div class="container">
    
    ${teamManager.map(
      (manager) =>
        `<div class="row justify-content-center">
        <div class="col-4 m-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Manager</h5>
              <p class="card-text">Name: ${manager.name}</p>
              <p class="card-text">Employee ID: ${manager.id}</p>
              <p class="card-text">Email address: ${manager.email}</p>
              <p class="card-text">Office number: ${manager.officeNumber}</p>
          </div>
        </div>
        </div>
        </div>`
    )}
    <div class="row justify-content-around">
        ${allEngineers
          .map(
            (engineer) =>
              `<div class="col-4 m-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Engineer</h5>
                  <p class="card-text">Name: ${engineer.name}</p>
                  <p class="card-text">Employee ID: ${engineer.id}</p>
                  <p class="card-text">Email address: ${engineer.email}</p>
                  <p class="card-text">GitHub username: ${engineer.github}</p>
              </div>
            </div>
            </div>`
          )
          .join("")}
          
        ${allInterns
          .map(
            (intern) =>
              `<div class="col-4 m-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Intern</h5>
                  <p class="card-text">Name: ${intern.name}</p>
                  <p class="card-text">Employee ID: ${intern.id}</p>
                  <p class="card-text">Email address: ${intern.email}</p>
                  <p class="card-text">School: ${intern.school}</p>
              </div>
            </div>
            </div>`
          )
          .join("")}
          </div>
    </div>
    </div>
    </main>
    </body>
    </html>`;
};

// const generateTeamManager = (teamManager) => {
//   return `
//   <div class="col">
//   <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Manager</h5>
//     ${teamManager.map(
//       (manager) => `<p class="card-text">Name: ${manager.name}`
//     )}</p>
//     ${teamManager.map(
//       (manager) => `<p class="card-text">Employee ID: ${manager.id}`
//     )}</p>
//     ${teamManager.map(
//       (manager) => `<p class="card-text">Email address: ${manager.email}`
//     )}</p>
//     ${teamManager.map(
//       (manager) => `<p class="card-text">Office number: ${manager.officeNumber}`
//     )}</p>
//   </div>
// </div>
// </div>`;
// };

// const generateEngineers = (allEngineers) => {
//   if (allEngineers !== []) {
//     return `<div class="col">
//   <div class="card" style="width: 18rem;">
//       <div class="card-body">
//         <h5 class="card-title">Engineer</h5>
//         ${allEngineers.forEach((Engineer) => {
//           `<p class="card-text">Name: ${Engineer.name}`;
//         })}</p>
//         ${allEngineers.forEach((Engineer) => {
//           `<p class="card-text">Employee ID: ${Engineer.id}`;
//         })}</p>
//         ${allEngineers.forEach((Engineer) => {
//           `<p class="card-text">Email address: ${Engineer.email}`;
//         })}</p>
//         ${allEngineers.forEach((Engineer) => {
//           `<p class="card-text">Name: ${Engineer.github}`;
//         })}</p>
//       </div>
//     </div>
//     </div>`;
//   } else return;
// };

// const generateInterns = (allInterns) => {
//   if (allInterns !== []) {
//     `${allInterns.map(
//       (intern) =>
//         `<div class="col">
//         <div class="card" style="width: 18rem;">
//           <div class="card-body">
//             <h5 class="card-title">Intern</h5>
//               <p class="card-text">Name: ${intern.name}</p>
//               <p class="card-text">Employee ID: ${intern.id}</p>
//               <p class="card-text">Email address: ${intern.email}</p>
//               <p class="card-text">School: ${intern.school}</p>
//           </div>
//         </div>
//         </div>}`
//     );
//   } else return " ";
// };

// const generateTeam = (teamManager, allEngineers, allInterns) => {
//   generateTeamManager(teamManager);
//   if (allEngineers !== []) {
//     generateEngineers(allEngineers);
//   }
//   if (allInterns !== []) {
//     generateInterns(allInterns);
//   }
// };

module.exports = generateHtml;
