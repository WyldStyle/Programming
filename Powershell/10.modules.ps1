# $env:PSModulePath
$($env:PSModulePath).Split(";")
Get-Module
# Get-Module -ListAvailable

Write-Output 'Lets import smthng from the list'
Import-Module -Name ScheduledTasks
Get-Module
#now scheduledTasks is imported into the current session

#Use get-command to get all the command related to this 
# Get-Command -Module ScheduledTasks
Get-ScheduledTask

#to remove a module
Remove-Module ScheduledTasks
Get-Module

Import-Module -Name ScheduledTasks

# Find-Module -Name X
# Install-Module -Name X
# Import-Module X
# Remove-Module X
# Uninstall-Module -Name X
