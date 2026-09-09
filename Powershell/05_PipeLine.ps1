# Get-Service -Name Spooler
$serviceName = "Spooler"
Get-Service -Name $serviceName

Start-Service -Name $serviceName

#   how to stop service
# Get-Help stop-service -Full

Get-Service -Name $serviceName | Stop-Service

$serviceName | Get-service | Start-Service
Get-Service -Name $serviceName

$serviceName = New-Object -TypeName System.Collections.ArrayList
$serviceName.AddRange(@('spooler','w32Time'))
$serviceName | Get-Service
$serviceName | Get-Service | Start-Service

# $serviceName | Get-Service | ForEach-Object{Write-Object "Service : $($_.DisplayName) is currently $($_.Status)"}