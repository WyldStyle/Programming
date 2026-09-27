# #powershell keeps executing commands even if a non-terminating error happens
# # $filePath = "C:\Users\admin\Downloads\delFolder\ErrorHandling"
# # $files = Get-ChildItem -Path $filePath
# # $files.foreach({
# #     Write-Output $_.Name
# # })
# #   #if we deliberately give the wrong file path it gives error
# #   #but even runs after that and gives o/p
# $filePath = "C:\Users\admin\Downloads\delFolder\Error_WRONG_PATH_Handling"
# $files = Get-ChildItem -Path $filePath
# $files.foreach({
#     Write-Output $_.Name
# })
# Write-Output "This is after the error"

# try {
# $filePath = "C:\Users\admin\Downloads\delFolder\Error_WRONG_PATH_Handling"
# $files = Get-ChildItem -Path $filePath
# $files.foreach({
#     Write-Output $_.Name
# })
# Write-Output "This is after the error"
# }
# catch {
#     <#Do this if a terminating exception happens#>
#     Write-Output "Caught Error"
# }

# #   #the same output happens agains because wrong path name is not a terminating error
# #   # for that we have to assign an error action
# try {
# $filePath = "C:\Users\admin\Downloads\delFolder\Error_WRONG_PATH_Handling"
# $files = Get-ChildItem -Path $filePath -ErrorAction Stop
# $files.foreach({
#     Write-Output $_.Name
# })
# Write-Output "This is after the error"
# }
# catch {
#     <#Do this if a terminating exception happens#>
#     # Write-Output "Caught Error"
#     Write-Output $_.Exception.Message
# }
# $ErrorActionPreference = "Stop"
# #   # this will ensure the preference is stop rather than continue (default)

# Write-Output '----------------------------'
# $Error
# # the array contains all the error
# $Error[0]

try {
$filePath = "C:\Users\admin\Downloads\delFolder\Error_WRONG_PATH_Handling"
$files = Get-ChildItem -Path $filePath -ErrorAction Stop
$files.foreach({
    Write-Output $_.Name
})
Write-Output "This is after the error"
}
catch {
    <#Do this if a terminating exception happens#>
    # Write-Output "Caught Error"
    Write-Output $_.Exception.Message
}finally{
    Write-Output 'This always run no matter what!'
}