const { spawn } = require("child_process");
let pnpmVersion;
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
    const child = spawn("pnpm", [
      "install",
      "-w",
      "--shamefully-hoist",
      "&&",
      "pnpm",
      "start",
    ]);
    child.on("error", (error) => {
      console.error(`Error starting project: ${error.message}`);
    });
    child.stdout.on("data", (data) => {
      console.log(`Project started: ${data}`);
    });
    child.stderr.on("data", (data) => {
      console.error(`Error starting project: ${data}`);
    });
  }
};
startProject();
