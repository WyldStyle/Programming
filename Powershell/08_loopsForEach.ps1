$filePath = "C:\Users\admin\Downloads\del.txt"
$filePath.GetType()
$sectionName = Get-Content -Path $filePath
$sectionName.GetType()
$sectionName[0]

$folderPath = "C:\Users\admin\Downloads\delFolder"
# New-Item -Path $folderPath -Name $sectionName[0] -ItemType Directory
# New-Item -Path $folderPath -Name $sectionName[1] -ItemType Directory
# New-Item -Path $folderPath -Name $sectionName[2] -ItemType Directory
# New-Item -Path $folderPath -Name $sectionName[3] -ItemType Directory
# New-Item -Path $folderPath -Name $sectionName[4] -ItemType Directory
#   Now if you try to run the program again you'll end up wit an error
#   As the folder has already been created. So to avoid it 

if((Test-Path -Path $folderPath\$sectionName[0]) -eq $false){
# New-Item -Path $folderPath -Name $sectionName[0] -ItemType Directory
Write-Output("Folder 0")
}
else{
    Write-Output("folder 0 already created")
}

# foreach($name in $sectionName){
#     $name
# }

Write-Output('###########')

# foreach($name in $sectionName){
# if((Test-Path -Path $folderPath\$name) -eq $false){
# New-Item -Path $folderPath -Name $name -ItemType Directory
# Write-Output("Folder",$name,"created")
# }
# else{
#     Write-Output("folder",$name, "already created")
# }
# }


# $sectionName | ForEach-Object -Process {
#     $_
# }
# $sectionName | ForEach-Object -Process {
# if((Test-Path -Path $folderPath\$_) -eq $false){
# New-Item -Path $folderPath -Name $_ -ItemType Directory
# Write-Output("Folder",$_,"created")
# }
# else{
#     Write-Output("folder",$_, "already created")
# }
# }

$sectionName.ForEach(
    {
    Write-Output $_
    }
)
$sectionName.ForEach(
    {
if((Test-Path -Path $folderPath\$_) -eq $false){
New-Item -Path $folderPath -Name $_ -ItemType Directory
Write-Output("Folder",$_,"created")
}
else{
    Write-Output("folder",$_, "already created")
}
    }
)