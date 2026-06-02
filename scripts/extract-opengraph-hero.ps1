# First frame of herovid2.mp4 → link-preview image (1200×630) + video poster
# Usage: npm run poster:opengraph

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$video = Join-Path $repoRoot "public\videos\herovid2.mp4"
$ogOut = Join-Path $repoRoot "public\images\opengraph-hero.jpg"
$posterOut = Join-Path $repoRoot "public\images\herovid2-poster.jpg"

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Error "ffmpeg not found. Install with: winget install Gyan.FFmpeg"
}
if (-not (Test-Path $video)) {
  Write-Error "Video not found: $video"
}

$vf = "scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630"

foreach ($args in @(
  @("-y", "-i", $video, "-ss", "0", "-frames:v", "1", "-update", "1", "-q:v", "2", $posterOut),
  @("-y", "-i", $video, "-ss", "0", "-frames:v", "1", "-update", "1", "-vf", $vf, "-q:v", "2", $ogOut)
)) {
  $proc = Start-Process -FilePath "ffmpeg" -ArgumentList $args -Wait -PassThru -NoNewWindow
  if ($proc.ExitCode -ne 0) { Write-Error "ffmpeg failed (exit $($proc.ExitCode))" }
}

Write-Host "Poster: public/images/herovid2-poster.jpg"
Write-Host "Open Graph: public/images/opengraph-hero.jpg"
