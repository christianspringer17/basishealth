# Extract a poster frame from an MP4 (requires ffmpeg)
# Usage: .\scripts\extract-poster.ps1 -Video public\videos\hero.mp4 -Output public\images\hero-poster.jpg

param(
  [Parameter(Mandatory = $true)]
  [string]$Video,
  [Parameter(Mandatory = $true)]
  [string]$Output
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$videoPath = Join-Path $repoRoot $Video
$outputPath = Join-Path $repoRoot $Output

if (-not (Test-Path $videoPath)) {
  Write-Error "Video not found: $videoPath"
}

$outputDir = Split-Path -Parent $outputPath
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpeg) {
  Write-Error "ffmpeg not found. Install with: winget install Gyan.FFmpeg"
}

$proc = Start-Process -FilePath "ffmpeg" -ArgumentList @(
  "-y", "-i", $videoPath, "-ss", "00:00:01", "-frames:v", "1", "-update", "1", "-q:v", "2", $outputPath
) -Wait -PassThru -NoNewWindow -RedirectStandardError "NUL" -RedirectStandardOutput "NUL"

if ($proc.ExitCode -ne 0 -or -not (Test-Path $outputPath)) {
  Write-Error "Poster extraction failed (exit $($proc.ExitCode))"
}

Write-Host "Poster saved: $Output"
