# Get-Service -Name Spooler
$serviceName = "Spooler"
Get-Service -Name $serviceName

Start-Service -Name $serviceName

#   how to stop service
# Get-Help stop-service -Full

Get-Service -Name $serviceName | Stop-Service