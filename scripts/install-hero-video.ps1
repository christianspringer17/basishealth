# Copy your hero video into public/videos/hero.mp4 (native site asset)
# Run from repo root in PowerShell:
#   .\scripts\install-hero-video.ps1

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$destDir = Join-Path $repoRoot "public\videos"
$dest = Join-Path $destDir "hero.mp4"

$source = Join-Path $env:USERPROFILE "Downloads\Metabolism is the foundation. Your care should reflect it. (1).mp4"

if (-not (Test-Path $source)) {
  Write-Host "Source not found:" $source
  Write-Host "Edit `$source in this script if your file is elsewhere."
  exit 1
}

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
Copy-Item -LiteralPath $source -Destination $dest -Force

$sizeMB = [math]::Round((Get-Item $dest).Length / 1MB, 1)
Write-Host "Done: public/videos/hero.mp4 ($sizeMB MB)"

$extractScript = Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Path) "extract-poster.ps1"
if (Test-Path $extractScript) {
  & $extractScript -Video "public\videos\hero.mp4" -Output "public\images\hero-poster.jpg"
}

Write-Host "Next: git add public/videos/hero.mp4 public/images/hero-poster.jpg && git commit && git push"
