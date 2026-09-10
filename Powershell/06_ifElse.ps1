############ OPERATORS
# 1 > 2 doesn't work
# press - and whole lot operators pop up
1 -eq 1 # Equals
1 -lt 2 # less than
1 -le 2 # less n equal
2 -gt 2
2 -ge 2

Write-Host "check this eq and ceq" -ForegroundColor Green
'test1' -eq 'Test1'
'test1' -ceq 'Test1'
Write-Host "Contains = it is not case sensitive but ccontains is" -ForegroundColor Green
@(1,2,3) -contains 2
@('test','test1') -contains 'TEST';
@('test','test1') -contains 'test';
@('test','test1') -ccontains 'TEST';

Write-Host "if-else" -ForegroundColor Green # if-else
#   $filePath = 'PS D:\Programming\Powershell> .\06_ifElse.ps1' 
#   won't work
$filePath = 'D:\Programming\Powershell\06_ifElse.ps1'
# $filePath = 'D:\Programming\Powershell\07_ifElse.ps1' #for else o/p
# Test-Path -Path $filePath
if(Test-Path -Path $filePath){
    Write-Output ('File 05 exists')
    # Get-Content -Path $filePath 
    #   gives the inner content of the file
    $Data = Get-Content -Path $filePath 
    # Write-Output($Data.Count, "check")
    if($Data.Count -lt 2){
    Write-Output("check")
        Write-Output "This file has less than 2lines"
        elseif ($Data.Count -lt 4) {
        Write-Output "This file has less than 4lines"
        }
    }
        else {
        Write-Output "This file has more than 4lines"
        }
}
else{
    # Write-Output ("File doesn't exist")
    # Write-Output ("File 'D:\Programming\Powershell\07_ifElse.ps1' doesn't exist")
    Write-Output ("File '$filePath' doesn't exist")
    # Write-Output ("File `$filepath` doesn't exist") #won't work
    # Write-Output ("File `"$filePath"` doesn't exist ") # wont work 
    # Write-Output (`File "$filePath" doesn't exist`) #won't work
    Write-Output ("File $filePath doesn't exist")
    
}