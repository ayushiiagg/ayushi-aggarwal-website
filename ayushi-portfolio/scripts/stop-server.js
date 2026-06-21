const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pidFile = path.join(root, ".server.pid");

function readPid() {
  if (!fs.existsSync(pidFile)) return null;
  const pid = Number.parseInt(fs.readFileSync(pidFile, "utf8"), 10);
  return Number.isFinite(pid) ? pid : null;
}

const pid = readPid();
if (pid) {
  try {
    process.kill(pid);
    console.log(`Stopped server (PID ${pid})`);
  } catch {
    console.log("Server was not running");
  }
}

try {
  fs.unlinkSync(pidFile);
} catch {
  // Ignore missing pid file.
}
