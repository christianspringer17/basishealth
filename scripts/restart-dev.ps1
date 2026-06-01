# Reliable dev restart on Windows — fixes Internal Server Error / missing 331.js
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "Stopping Node processes..."
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

Write-Host "Clearing .next and caches..."
if (Test-Path .next) { Remove-Item -Recurse -Force .next }
if (Test-Path node_modules\.cache) { Remove-Item -Recurse -Force node_modules\.cache }

$env:DEV_ALWAYS_CLEAN = "1"
Write-Host "Starting dev server (Turbopack)..."
npm run dev
