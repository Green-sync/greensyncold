const { spawn } = require("child_process");
let pnpmVersion;
const fs = require("fs");
let pnpmInstalled;
const checkPNPM = () => {
  const child = spawn("pnpm", ["-v"]);
  child.on("error", (error) => {
    console.error(`Error checking for pnpm version: ${error.message}`);
    installPNPM();
  });
  child.stdout.on("data", (data) => {
    pnpmVersion = data.toString().trim();
    console.log(`pnpm version: ${pnpmVersion}`);
    startProject();
  });
  child.stderr.on("data", (data) => {
    console.error(`Error checking for pnpm version: ${data}`);
    installPNPM();
  });
};
const installPNPM = () => {
  const child = spawn("npm", ["install", "-g", "pnpm"]);
  child.on("error", (error) => {
    console.error(`Error installing pnpm: ${error.message}`);
  });
  child.stdout.on("data", (data) => {
    console.log(`pnpm installed: ${data}`);
    checkPNPM();
  });
  child.stderr.on("data", (data) => {
    console.error(`Error installing pnpm: ${data}`);
  });
};
const startProject = () => {
  if (!pnpmVersion) {
    console.log("Please wait while we check your pnpm version...");
    checkPNPM();
  } else {
    fs.readFile("Applications/client/.env.example", "utf8", (err, data) => {
      if (err) throw err;
      fs.writeFile("Applications/client/.env", data, (err) => {
        if (err) throw err;
        console.log(
          ".env file has been created with the contents of .env.example"
        );
      });
    });
    console.log(
      "Starting All good now you can install dependencies by using this script pnpm install '"
    );
  }
};
startProject();
