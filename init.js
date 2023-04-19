const { exec } = require("child_process");

exec("pnpm -v", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    installPNPM();

    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`pnpm version: ${stdout}`);
});

function installPNPM() {
  exec("npm install pnpm ", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`pnpm installed: ${stdout}`);
  });
}

exec(`pnpm install && pnpm start`, (stderr, stdout) => {
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`strat installed: ${stdout}`);
});
