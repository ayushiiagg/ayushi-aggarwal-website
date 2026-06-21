# Start the site in the background without opening a console window.
$ErrorActionPreference = "Continue"

$env:Path = "C:\Program Files\nodejs;" + $env:Path
$Root = Split-Path -Parent $PSScriptRoot
Set-Location $Root

Write-Host "Stopping PM2 and any server on port 3000..."
npx pm2 delete ayushi-portfolio *> $null
npx pm2 kill *> $null

Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
  Select-Object -ExpandProperty OwningProcess -Unique |
  ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }

node scripts/stop-server.js *> $null

if (-not (Test-Path ".next\BUILD_ID")) {
  Write-Host "Building site (first run)..."
  npm run build
}

node scripts/start-server.js

Write-Host ""
Write-Host "Site: http://localhost:3000"
Write-Host "Stop: npm run dev:stop"
