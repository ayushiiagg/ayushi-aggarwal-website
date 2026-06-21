const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pidFile = path.join(root, ".server.pid");
const logsDir = path.join(root, "logs");
const logFile = path.join(logsDir, "server.log");

function readPid() {
  if (!fs.existsSync(pidFile)) return null;
  const pid = Number.parseInt(fs.readFileSync(pidFile, "utf8"), 10);
  return Number.isFinite(pid) ? pid : null;
}

function stopExisting() {
  const pid = readPid();
  if (!pid) return;

  try {
    process.kill(pid);
  } catch {
    // Process already exited.
  }

  try {
    fs.unlinkSync(pidFile);
  } catch {
    // Ignore missing pid file.
  }
}

if (!fs.existsSync(path.join(root, ".next", "BUILD_ID"))) {
  console.error("No production build found. Run: npm run build");
  process.exit(1);
}

stopExisting();
fs.mkdirSync(logsDir, { recursive: true });

const nextBin = require.resolve("next/dist/bin/next");
const out = fs.openSync(logFile, "a");
const err = fs.openSync(logFile, "a");

const child = spawn(process.execPath, [nextBin, "start", "-p", "3000"], {
  cwd: root,
  detached: true,
  stdio: ["ignore", out, err],
  windowsHide: true,
  env: { ...process.env, NODE_ENV: "production" },
});

child.unref();
fs.writeFileSync(pidFile, String(child.pid));

console.log("Server running at http://localhost:3000");
console.log(`PID ${child.pid} (logs: logs/server.log)`);
