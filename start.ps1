Set-Location $PSScriptRoot
Start-Process "http://localhost:8000"
& py -m http.server -d src