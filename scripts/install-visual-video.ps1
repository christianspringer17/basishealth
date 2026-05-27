# Copy mid-page visual video into public/videos/visual.mp4
# Edit $source if your file lives elsewhere.

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$destDir = Join-Path $repoRoot "public\videos"
$dest = Join-Path $destDir "visual.mp4"

# Default: brand video in public/videos (or edit path below)
$source = Join-Path $repoRoot "public\videos\Untitled design (2).mp4"
if (-not (Test-Path $source)) {
  $source = Join-Path $repoRoot "public\videos\Untitled design.mp4"
}

if (-not (Test-Path $source)) {
  Write-Host "Source not found:" $source
  Write-Host "Edit `$source in this script, or copy your file to public/videos/visual.mp4 manually."
  exit 1
}

New-Item -ItemType Directory -Force -Path $destDir | Out-Null
Copy-Item -LiteralPath $source -Destination $dest -Force

$sizeMB = [math]::Round((Get-Item $dest).Length / 1MB, 1)
Write-Host "Done: public/videos/visual.mp4 ($sizeMB MB)"
